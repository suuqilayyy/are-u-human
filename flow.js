// Shared order of the experience. "]" jumps to the next page, "[" to the previous (for rehearsing without a camera).
(function(){
  var ORDER=['index.html','start.html','face.html','stage.html?s=2','stage.html?s=3','jury.html','pass.html','forum.html'];
  function here(){
    var p=location.pathname.split('/').pop()||'index.html';
    var q=new URLSearchParams(location.search).get('s');
    return q?p+'?s='+q:p;
  }
  function idx(){var i=ORDER.indexOf(here());return i<0?0:i;}
  window.flowNext=function(){var i=idx();if(i<ORDER.length-1)location.href=ORDER[i+1];};
  window.flowPrev=function(){var i=idx();if(i>0)location.href=ORDER[i-1];};
  addEventListener('keydown',function(e){
    if(e.target&&/INPUT|TEXTAREA/.test(e.target.tagName))return;
    if(e.key===']')flowNext();
    if(e.key==='[')flowPrev();
  });
})();
