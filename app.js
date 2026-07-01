const t=document.getElementById('theme');
t.onclick=()=>document.body.classList.toggle('light');
const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.animate([{opacity:0,transform:'translateY(30px)'},{opacity:1,transform:'translateY(0)'}],{duration:600,fill:'forwards'});obs.unobserve(e.target);}}));
document.querySelectorAll('.section,.hero').forEach(x=>{x.style.opacity=0;obs.observe(x);});