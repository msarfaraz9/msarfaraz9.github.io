
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.style.transition='all .7s';e.target.style.opacity=1;e.target.style.transform='translateY(0)';}}));
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
