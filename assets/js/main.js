// machine à écrire
const mots=['marchent.','sont rapides.','me plaisent.','tournent en prod.'];
let mi=0,ci=0,del=false;const el=document.getElementById('type');
(function tick(){
  const w=mots[mi];
  el.textContent=del?w.slice(0,--ci):w.slice(0,++ci);
  let d=del?55:95;
  if(!del&&ci===w.length){d=1600;del=true}
  else if(del&&ci===0){del=false;mi=(mi+1)%mots.length;d=280}
  setTimeout(tick,d);
})();

// reveal au scroll
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(e=>io.observe(e));

// compteurs
const co=new IntersectionObserver(es=>es.forEach(e=>{
  if(!e.isIntersecting)return; co.unobserve(e.target);
  const t=+e.target.dataset.c;let n=0;
  const s=setInterval(()=>{n+=Math.ceil(t/40);if(n>=t){n=t;clearInterval(s)}e.target.textContent=n},30);
}),{threshold:.5});
document.querySelectorAll('.stat b').forEach(e=>co.observe(e));

document.getElementById('y').textContent=new Date().getFullYear();
