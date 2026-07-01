window.addEventListener('load',()=>{loader.style.display='none'});
document.getElementById('theme').onclick=()=>document.body.classList.toggle('light');
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.style.transition='all .7s';e.target.style.opacity=1;e.target.style.transform='translateY(0)';}}));
document.querySelectorAll('.reveal').forEach(x=>io.observe(x));