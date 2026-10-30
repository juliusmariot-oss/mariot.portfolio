const $=(s,r=document)=>r.querySelector(s),GH="https://github.com/juliusmariot-oss";
const toast=t=>{const e=$("#toast");e.textContent=t;e.classList.add("on");setTimeout(()=>e.classList.remove("on"),2200)};
$("#yr").textContent=new Date().getFullYear();

/* data */
const skills=[["HTML5","fe"],["CSS3","fe"],["JavaScript","fe"],["React.js","fe"],["Bootstrap","fe"],["Tailwind CSS","fe"],["Git","tool"],["GitHub","tool"],["VS Code","tool"],["Figma","tool"],["NetBeans","tool"]];
$("#chips").innerHTML=skills.map(s=>`<span class="chip" data-t="${s[1]}">${s[0]}</span>`).join("");
$("#tabs").onclick=e=>{const b=e.target.closest("button");if(!b)return;document.querySelectorAll("#tabs button").forEach(x=>x.classList.toggle("on",x===b));
 document.querySelectorAll(".chip").forEach(c=>c.classList.toggle("hide",b.dataset.f!=="all"&&c.dataset.t!==b.dataset.f))};
const projects=[
{i:"🎓",n:"Student Management System",d:"A web-based system for managing student information, announcements, and academic records.",t:["HTML","CSS","JavaScript","PHP","MySQL"],f:["Student dashboard","Announcement system","Student records","Responsive interface","Login and authentication"]},
{i:"👟",n:"SNEAKPICK – Sneaker Selection System",d:"A sneaker selection system where users can browse sneakers, filter products, view details, and select their preferred size and color.",t:["Java","Java Swing","NetBeans","Data Structures"],f:["Sneaker product cards","Brand filtering","Size selection","Product details","Search functionality","Singly Linked List implementation"]},
{i:"📚",n:"E-Library System",d:"A responsive library website designed to help students browse and access available books and library resources.",t:["HTML","CSS","JavaScript","PHP","MySQL"],f:["Book browsing","Search functionality","Category filtering","Student interface","Responsive design"]}];
$("#projGrid").innerHTML=projects.map((p,k)=>`<article class="glass proj rv" style="--d:${k*.12}s" data-k="${k}"><div class="ico">${p.i}</div><h3>${p.n}</h3><p>${p.d}</p><div class="tg">${p.t.map(x=>`<span>${x}</span>`).join("")}</div><div class="row"><a class="btn sm p" href="${GH}" target="_blank" rel="noopener">View Project ↗</a><a class="btn sm" href="https://www.figma.com/" target="_blank" rel="noopener">Figma Design ↗</a></div></article>`).join("");

/* modal */
const ov=$("#ov"),md=$("#md");
const open=h=>{md.innerHTML=h+'<button class="btn sm" onclick="closeM()">Close</button>';ov.classList.add("on")};
window.closeM=()=>ov.classList.remove("on");
ov.onclick=e=>{if(e.target===ov)closeM()};document.onkeydown=e=>{if(e.key==="Escape")closeM()};
$("#projGrid").onclick=e=>{if(e.target.closest("a"))return;const c=e.target.closest(".proj");if(!c)return;const p=projects[c.dataset.k];
 open(`<h3>${p.i} ${p.n}</h3><p style="color:var(--mu)">${p.d}</p><div class="tg" style="margin:14px 0">${p.t.map(x=>`<span>${x}</span>`).join("")}</div><b>Features</b><ul>${p.f.map(x=>`<li>${x}</li>`).join("")}</ul>`)};

/* resume */
const resumeText=`JULIUS MARIOT\nFresh BSIT Graduate • Aspiring Front-End Developer\nEmail: juliusmariot@gmail.com\nGitHub: ${GH}\n\nEDUCATION\nBachelor of Science in Information Technology (BSIT)\n\nSKILLS\nHTML5, CSS3, JavaScript, React.js, Bootstrap, Tailwind CSS\nGit, GitHub, VS Code, Figma, NetBeans\n\nPROJECTS\n${projects.map(p=>"- "+p.n+" ("+p.t.join(", ")+")").join("\n")}\n\nCURRENTLY\nImproving JavaScript • Learning React.js • Building responsive websites • Improving UI/UX`;
$("#resumeBtn").onclick=()=>{try{const a=document.createElement("a");a.href=URL.createObjectURL(new Blob([resumeText],{type:"text/plain"}));a.download="Julius_Mariot_Resume.txt";a.click()}catch(_){}
 open(`<h3>Resume</h3><pre style="white-space:pre-wrap;font:.9rem/1.6 Inter;color:var(--mu);margin:12px 0 18px">${resumeText}</pre><button class="btn sm p" id="pr">🖨 Print / Save PDF</button> <button class="btn sm" id="cp">Copy Text</button> `);
 $("#pr").onclick=()=>{$("#rprint").style.display="block";$("#rprint").innerHTML=`<pre style="color:#000;background:#fff;padding:30px;font:14px/1.6 Arial;white-space:pre-wrap">${resumeText}</pre>`;try{print()}catch(_){toast("Print unavailable here")}};
 $("#cp").onclick=()=>copy(resumeText,"Resume copied")};
function copy(t,m){(navigator.clipboard?navigator.clipboard.writeText(t):Promise.reject()).then(()=>toast(m)).catch(()=>{const x=document.createElement("textarea");x.value=t;document.body.append(x);x.select();try{document.execCommand("copy");toast(m)}catch(_){toast("Copy not available")}x.remove()})}
$("#copyMail").onclick=()=>copy("juliusmariot@gmail.com","Email copied");
$("#cf").onsubmit=e=>{e.preventDefault();const s=encodeURIComponent("Portfolio message from "+$("#cn").value),b=encodeURIComponent($("#cm").value+"\n\n— "+$("#cn").value+" ("+$("#ce").value+")");
 location.href=`mailto:juliusmariot@gmail.com?subject=${s}&body=${b}`;toast("Opening your email app…")};

/* nav */
$("#burger").onclick=()=>$("#links").classList.toggle("on");$("#links").onclick=()=>$("#links").classList.remove("on");

/* typing */
const roles=["Front-End Developer","React Learner","UI/UX Enthusiast","Problem Solver"];let ri=0,ci=0,del=false;
(function ty(){const w=roles[ri],el=$("#typed");el.textContent=w.slice(0,ci);
 if(!del&&ci===w.length){del=true;return setTimeout(ty,1400)}
 if(del&&ci===0){del=false;ri=(ri+1)%roles.length}
 ci+=del?-1:1;setTimeout(ty,del?40:85)})();

/* reveal + counters */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");e.target.querySelectorAll("[data-n]").forEach(c=>{const n=+c.dataset.n;let v=0;const t=setInterval(()=>{c.textContent=++v;if(v>=n)clearInterval(t)},120)});if(e.target.dataset.n){const c=e.target,n=+c.dataset.n;let v=0;const t=setInterval(()=>{c.textContent=++v;if(v>=n)clearInterval(t)},120)}io.unobserve(e.target)}}),{threshold:.15});
document.querySelectorAll(".rv").forEach(e=>io.observe(e));
document.querySelectorAll("[data-n]").forEach(e=>{if(!e.closest(".rv"))io.observe(e)});

/* scroll-linked morph blob */
const mb=$("#morph"),shapes=[[62,38,55,45,48,58,42,52],[38,62,40,60,60,40,60,40],[50,50,30,70,40,60,50,50],[70,30,60,40,35,65,55,45]],hues=[0,60,-50,25];
const L=(a,b,t)=>a+(b-a)*t;
function sc(){const mx=document.documentElement.scrollHeight-innerHeight,p=mx>0?scrollY/mx:0;$("#bar").style.width=p*100+"%";
 const f=p*(shapes.length-1),i=Math.min(Math.floor(f),shapes.length-2),t=f-i,s=shapes[i].map((v,k)=>L(v,shapes[i+1][k],t));
 mb.style.borderRadius=`${s[0]}% ${s[1]}% ${s[2]}% ${s[3]}%/${s[4]}% ${s[5]}% ${s[6]}% ${s[7]}%`;
 mb.style.transform=`translate(${L(55,-10,p)}vw,${L(5,55,Math.sin(p*Math.PI))}vh) rotate(${p*360}deg) scale(${1+Math.sin(p*Math.PI)*.4})`;
 mb.style.filter=`blur(70px) hue-rotate(${L(hues[i],hues[i+1],t)}deg)`;
 let cur="home";document.querySelectorAll("main section").forEach(s=>{if(s.getBoundingClientRect().top<innerHeight*.4)cur=s.id});
 document.querySelectorAll(".links a").forEach(a=>a.classList.toggle("on",a.getAttribute("href")==="#"+cur))}
addEventListener("scroll",sc,{passive:true});addEventListener("resize",sc);sc();

/* tilt */
document.querySelectorAll(".proj").forEach(c=>{c.onmousemove=e=>{const r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;c.style.transition="transform .1s";c.style.transform=`perspective(800px) rotateY(${x*10}deg) rotateX(${-y*10}deg) translateY(-4px)`};
 c.onmouseleave=()=>{c.style.transition="transform .4s";c.style.transform=""}});

/* GitHub API (falls back silently if blocked) */
try{fetch("https://api.github.com/users/juliusmariot-oss").then(r=>r.json()).then(u=>{if(u.public_repos!=null){$("#sRepos").textContent=u.public_repos;$("#sFol").textContent=u.followers;$("#sFollowing").textContent=u.following}}).catch(()=>{})}catch(_){}
