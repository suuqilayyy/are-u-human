// Bloom: a circle of color grows from a point until it fills the page, holds, then fades back.
// Version E from pass-wipe-lab.html, chosen 11-22.
//
//   Bloom.play({ from, color, hold, layer, text })  -> Promise, resolves when the page is back to normal
//
//   from   an Element (its center), {x, y} in viewport px, or 'random'. Default 'random'.
//   color  any CSS color or a preset name: pass, fail, brand, ink. Default 'pass'.
//   hold   ms to stay filled before fading. Default 400.
//   layer  'under' paints behind the page content, 'over' covers everything. Default 'under'.
//   text   'auto' (default): as the edge of the circle passes each piece of text, any text under
//          4.5:1 on the bloom color (WCAG AA) switches to white or ink, whichever contrasts more;
//          inline pieces inside a switched paragraph switch with it. Text sitting on its own background (buttons, cards) is left alone.
//          A color (e.g. '#fff'): all text on the page background switches to that color.
//          false: leave text as it is.
//   grow / fade  durations in ms. Defaults 700 / 450.
//
// While a bloom is on screen, <html> gets class "bloom-on" and data-bloom="<preset or custom>".
(function(){
  var PRESET={pass:'var(--pass,#2fb35d)',fail:'var(--danger,#cb3e34)',brand:'var(--brand-600,#2c6378)',ink:'var(--ink,#191b1a)'};
  var LIGHT='#ffffff',DARK='var(--ink,#191b1a)';
  var st=document.createElement('style');
  st.textContent='.bloom-layer{position:fixed;inset:0;pointer-events:none}.bloom-layer.under{z-index:-1}.bloom-layer.over{z-index:2147483000}';
  document.head.appendChild(st);

  // ---- color math (WCAG) ----
  function resolve(c){var t=document.createElement('i');t.style.color=c;t.style.display='none';document.body.appendChild(t);
    var m=getComputedStyle(t).color.match(/[\d.]+/g).map(Number);t.remove();return m;}
  function lum(c){var a=[c[0],c[1],c[2]].map(function(v){v/=255;return v<=.03928?v/12.92:Math.pow((v+.055)/1.055,2.4);});return .2126*a[0]+.7152*a[1]+.0722*a[2];}
  function contrast(a,b){var x=lum(a),y=lum(b);return (Math.max(x,y)+.05)/(Math.min(x,y)+.05);}

  // text that sits directly on the page background
  function onPage(el){
    for(var a=el;a&&a!==document.body&&a!==document.documentElement;a=a.parentElement){
      var s=getComputedStyle(a),bg=s.backgroundColor.match(/[\d.]+/g);
      if(s.backgroundImage!=='none'||(bg&&(bg.length<4||+bg[3]>0)))return false;
      if(+s.opacity===0||s.visibility==='hidden'||s.display==='none')return false;
    }return true;}
  function textEls(){
    var out=[];document.body.querySelectorAll('*').forEach(function(el){
      if(el.closest('.bloom-layer,script,style,svg'))return;
      var has=false;el.childNodes.forEach(function(n){if(n.nodeType===3&&n.textContent.trim())has=true;});
      if(!has)return;var r=el.getBoundingClientRect();if(!r.width||!r.height||r.bottom<0||r.top>innerHeight)return;
      if(onPage(el))out.push({el:el,x:r.left+r.width/2,y:r.top+r.height/2});});
    return out;}

  function bezier(x1,y1,x2,y2){return function(x){var lo=0,hi=1,t=x;for(var i=0;i<24;i++){t=(lo+hi)/2;
    var bx=3*(1-t)*(1-t)*t*x1+3*(1-t)*t*t*x2+t*t*t;if(bx<x)lo=t;else hi=t;}return 3*(1-t)*(1-t)*t*y1+3*(1-t)*t*t*y2+t*t*t;};}
  var EASE=bezier(.5,0,.2,1);

  function point(from){
    if(from&&from.getBoundingClientRect){var r=from.getBoundingClientRect();return {x:r.left+r.width/2,y:r.top+r.height/2};}
    if(from&&typeof from.x==='number')return from;
    return {x:innerWidth*(.15+Math.random()*.7),y:innerHeight*(.15+Math.random()*.7)};
  }

  function play(o){
    o=o||{};
    var p=point(o.from||'random'),name=o.color||'pass',color=PRESET[name]||name,
        layer=o.layer==='over'?'over':'under',hold=o.hold==null?400:o.hold,grow=o.grow||700,fade=o.fade||450;
    var R=Math.ceil(Math.max(Math.hypot(p.x,p.y),Math.hypot(innerWidth-p.x,p.y),Math.hypot(p.x,innerHeight-p.y),Math.hypot(innerWidth-p.x,innerHeight-p.y)))+4;
    var el=document.createElement('div');el.className='bloom-layer '+layer;el.style.background=color;
    var at=' at '+p.x+'px '+p.y+'px';el.style.clipPath='circle(0px'+at+')';
    document.body.appendChild(el);
    var root=document.documentElement,reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;

    // which text needs to flip, and to what
    var flips=[];
    if(layer==='under'&&o.text!==false){
      var bc=resolve(color),wc=resolve(LIGHT),dc=resolve(DARK),forced=o.text&&o.text!=='auto',
          target=forced?o.text:contrast(wc,bc)>=contrast(dc,bc)?LIGHT:DARK;
      var all=textEls();
      all.forEach(function(t){t.d=Math.hypot(t.x-p.x,t.y-p.y);t.target=target;
        t.hit=forced||contrast(resolve(getComputedStyle(t.el).color),bc)<4.5;});
      // keep a line of text one color: if a paragraph flips, its <code>/<b>/<a> flip with it, and vice versa
      all.forEach(function(t){if(t.hit)return;
        if(all.some(function(u){return u.hit&&(u.el.contains(t.el)||t.el.contains(u.el));}))t.hit=true;});
      all.forEach(function(t){if(t.hit)flips.push(t);});
    }
    // remember each element's own inline style once, even if blooms overlap
    function flip(t){var e=t.el;if(!e.__bloom)e.__bloom={n:0,c:e.style.color,t:e.style.transition};e.__bloom.n++;
      e.style.transition='color .2s ease-out';e.style.color=t.target;t.done=true;}
    function unflip(){flips.forEach(function(t){var e=t.el,b=e.__bloom;if(!t.done||!b)return;if(--b.n>0)return;
      e.style.transition='color .3s ease-out';e.style.color=b.c;
      setTimeout(function(){if(e.__bloom===b&&!b.n){e.style.transition=b.t;delete e.__bloom;}},320);});}

    return new Promise(function(done){
      if(reduce)el.animate([{opacity:0,clipPath:'circle('+R+'px'+at+')'},{opacity:1,clipPath:'circle('+R+'px'+at+')'}],{duration:150,fill:'forwards'});
      else el.animate([{clipPath:'circle(0px'+at+')'},{clipPath:'circle('+R+'px'+at+')'}],{duration:grow,easing:'cubic-bezier(.5,0,.2,1)',fill:'forwards'});
      root.classList.add('bloom-on');root.dataset.bloom=PRESET[name]?name:'custom';
      // flip each piece of text as the edge of the circle reaches it
      var t0=performance.now(),iv=setInterval(function(){
        var k=reduce?1:Math.min(1,(performance.now()-t0)/grow),r=R*EASE(k);
        flips.forEach(function(t){if(!t.done&&r>=t.d)flip(t);});
        if(k>=1)clearInterval(iv);
      },16);
      new Promise(function(r){setTimeout(r,(reduce?150:grow)+hold);}).then(function(){
        unflip();root.classList.remove('bloom-on');
        el.animate([{opacity:1},{opacity:0}],{duration:fade,easing:'ease-out',fill:'forwards'});
        return new Promise(function(r){setTimeout(r,fade);});
      }).then(function(){el.remove();delete root.dataset.bloom;done();});
    });
  }
  window.Bloom={play:play,presets:PRESET,_contrast:function(a,b){return contrast(resolve(a),resolve(b));}};
})();
