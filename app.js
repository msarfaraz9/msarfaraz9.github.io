
document.getElementById('theme').onclick=()=>document.body.classList.toggle('light');
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.style.transition='all .7s';e.target.style.opacity=1;e.target.style.transform='translateY(0)';}}));
document.querySelectorAll('.reveal').forEach(x=>io.observe(x));
const p=document.getElementById('particles');
for(let i=0;i<40;i++){let s=document.createElement('span');s.className='dot';s.style.cssText=`position:fixed;width:3px;height:3px;background:#66cfff;border-radius:50%;left:${Math.random()*100}vw;top:${Math.random()*100}vh;opacity:.35;`;p.appendChild(s);}
