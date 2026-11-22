const scenes = {face:'人脸验证', quiz:'直觉题', forum:'论坛', entry:'验证入口'};
const designs = {
  en:['英文原版','Doto 点阵 / Inter / Times New Roman'],
  plain:['中文 · 黑体','苹方，沿用现有界面'],
  pixel:['中文 · 像素','缝合像素字强调 / 思源黑体正文'],
  song:['中文 · 宋体','思源宋体标题与论坛 / 思源黑体按钮']
};
const graph = [
  '<path d="M14 50h72"/>',
  '<path d="M14 50 '+Array.from({length:36},(_,i)=>'L'+(16+i*2)+' '+(50+(i%2?1.4:-1.2)*(i%3?1:.6))).join(' ')+'"/>',
  '<path d="M12 74c6 0 14 2 18 8 2 4-2 8-6 6"/>'
].map(d=>'<span class="tile"><svg aria-hidden="true" viewBox="0 0 100 100" fill="none" stroke="#191b1a" stroke-width="4" stroke-linecap="round">'+d+'</svg></span>').join('');
const examples = {
  face:t=>`<div class="spec card"><img class="face-icon" src="../assets/svg/scan-face.svg" alt=""><h3>${t['face.heading']}</h3><p class="bodycopy">${t['face.position']}</p><p class="notice">${t['face.local']}</p><span class="fakebutton">${t['face.ok']}</span></div>`,
  entry:t=>`<div class="spec entry"><div class="entry-inner"><img alt="" src="../assets/img/logo.png"><h3 class="wordmark" lang="en"><b>HUMAN</b><br>Verification<br>Portal</h3><p class="lead">${t['start.lead']}</p></div><div class="bar"><div><small>${t['start.humansOnly']}</small><strong>${t['start.begin']}</strong></div><i aria-hidden="true">→</i></div></div>`,
  quiz:t=>`<div class="spec quiz"><div class="band"><small>${t['quiz.tap']}</small><h3>${t['quiz.A3.question'].replace('{keyword}','<mark>'+t['quiz.A3.keyword']+'</mark>')}</h3><p>${t['quiz.noRight']}</p></div><div class="tiles">${graph}</div><div class="quizfoot"><span><img src="../assets/svg/refresh.svg" alt=""><img src="../assets/svg/info.svg" alt=""></span><span class="submit">${t['quiz.verify']}</span></div></div>`,
  forum:t=>`<div class="spec forum"><h3>${t['forum.welcome']}</h3><p class="warning">${t['forum.camera']}</p><table><thead><tr><th>${t['forum.topic']}</th><th>${t['forum.from']}</th></tr></thead><tbody><tr><td><u>${t['forum.pinned']}</u></td><td>marigold_77</td></tr><tr><td>${t['forum.cat']}</td><td>tofu.jpg</td></tr><tr><td>${t['forum.letters']}</td><td>pen_pal</td></tr></tbody></table></div>`
};
const sceneControls=document.querySelector('#scenes');
const variantControls=document.querySelector('#variants');
const overview=document.querySelector('#overview');
const sheets=document.querySelector('#sheets');
const query=new URLSearchParams(location.search);
let scene=Object.hasOwn(scenes,query.get('scene'))?query.get('scene'):'face';
let variant=['all','plain','pixel','song'].includes(query.get('variant'))?query.get('variant'):(matchMedia('(max-width:700px)').matches?'pixel':'all');
function control(container,label,key,action){
  const button=document.createElement('button');
  button.type='button';button.textContent=label;button.dataset.key=key;
  button.addEventListener('click',()=>{action(key);render(true)});
  container.append(button);
}
Object.entries(scenes).forEach(([key,label])=>control(sceneControls,label,key,key=>scene=key));
Object.entries(designs).filter(([key])=>key!=='en').forEach(([key,[label]])=>control(variantControls,label.replace('中文 · ',''),key,key=>variant=key));
overview.addEventListener('click',()=>{variant='all';render(true)});
function render(updateUrl){
  for(const b of sceneControls.children)b.setAttribute('aria-pressed',b.dataset.key===scene);
  for(const b of variantControls.querySelectorAll('button'))b.setAttribute('aria-pressed',b.dataset.key===variant);
  overview.setAttribute('aria-pressed',variant==='all');
  sheets.classList.toggle('all',variant==='all');
  sheets.innerHTML=Object.entries(designs).filter(([key])=>key==='en'||variant==='all'||key===variant).map(([key,[title,description]])=>{
    const lang=key==='en'?'en':'zh';
    return `<section class="sheet"><div class="label"><h2>${title}</h2><small>${description}</small></div><div lang="${lang==='en'?'en':'zh-CN'}" class="stage ${key} ${scene}-stage">${examples[scene](window.neverlandMessages[lang])}</div></section>`;
  }).join('');
  if(updateUrl){
    const url=new URL(location.href);url.searchParams.set('scene',scene);url.searchParams.set('variant',variant);
    history.replaceState(null,'',url);
  }
}
render(false);
