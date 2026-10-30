const photos=Array.from({length:15},(_,i)=>`photos/photo${i+1}.jpg`);
let current=0,timer;
const opening=document.getElementById('opening'),main=document.getElementById('main'),openBtn=document.getElementById('openBtn');
const slideImage=document.getElementById('slideImage'),slideNumber=document.getElementById('slideNumber'),dots=document.getElementById('dots');
const selfieAudio=document.getElementById('selfieAudio'),vaishuuAudio=document.getElementById('vaishuuAudio');
photos.forEach((_,i)=>{const d=document.createElement('span');d.className='dot';d.onclick=()=>showPhoto(i);dots.appendChild(d)});
function showPhoto(i){current=(i+15)%15;slideImage.style.opacity='0';setTimeout(()=>{slideImage.src=photos[current];slideNumber.textContent=current+1;slideImage.style.opacity='1';document.querySelectorAll('.dot').forEach((d,n)=>d.classList.toggle('active',n===current))},250)}
function next(){showPhoto(current+1)}function prev(){showPhoto(current-1)}
function start(){clearInterval(timer);timer=setInterval(next,4000)}
document.getElementById('nextBtn').onclick=()=>{next();start()};document.getElementById('prevBtn').onclick=()=>{prev();start()};
openBtn.onclick=()=>{opening.style.display='none';main.classList.remove('hidden');showPhoto(0);start();selfieAudio.play().catch(()=>{})};
selfieAudio.onended=()=>vaishuuAudio.play().catch(()=>{});
showPhoto(0);
