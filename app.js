document.querySelectorAll('.metrics strong').forEach(el=>{
 const end=el.textContent.replace('+','').replace('%','');
 if(!isNaN(end)){let n=0;const isPct=el.textContent.includes('%');const plus=el.textContent.includes('+');
 const i=setInterval(()=>{n++;el.textContent=n+(isPct?'%':'')+(plus?'+':'');if(n>=Number(end))clearInterval(i);},25);}
});