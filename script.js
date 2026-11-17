const WA_NUMBER = "94707380188";
const waLink = (message) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;

const serviceData = [
 {icon:"✦",en:"GRAPHIC DESIGN",si:"ග්‍රැෆික් නිර්මාණකරණය",desc:"ඔබේ ව්‍යාපාරයේ පණිවිඩය ආකර්ෂණීයව ඉදිරිපත් කරන නිර්මාණශීලී දෘශ්‍ය නිර්මාණ.",items:[["Social Media Post Design","සමාජ මාධ්‍ය පෝස්ට් නිර්මාණය"],["Business Promotion Designs","ව්‍යාපාර ප්‍රවර්ධන නිර්මාණ"],["Advertising Designs","වෙළඳ දැන්වීම් නිර්මාණ"],["YouTube Thumbnail Design","YouTube Thumbnail නිර්මාණය"],["Class & Tuition Post Designs","පන්ති සහ ටියුෂන් පෝස්ට් නිර්මාණය"]]},
 {icon:"◇",en:"LOGO DESIGN",si:"ලෝගෝ නිර්මාණකරණය",desc:"ඔබේ ව්‍යාපාරයට මතකයේ රැඳෙන අනන්‍ය සන්නාම පෙනුමක් ගොඩනඟමු.",items:[["Professional Logo Design","වෘත්තීය මට්ටමේ ලෝගෝ නිර්මාණය"],["Business Logo Design","ව්‍යාපාරික ලෝගෝ නිර්මාණය"],["Brand Identity Design","සන්නාම අනන්‍යතා නිර්මාණය"],["Creative Logo Concepts","නිර්මාණශීලී ලෝගෝ සංකල්ප"]]},
 {icon:"▶",en:"VIDEO EDITING",si:"වීඩියෝ සංස්කරණය",desc:"ඔබේ කතාව සහ සන්නාමය වඩාත් ආකර්ෂණීයව පෙන්වන වීඩියෝ අන්තර්ගත.",items:[["Professional Video Editing","වෘත්තීය වීඩියෝ සංස්කරණය"],["YouTube Video Editing","YouTube වීඩියෝ සංස්කරණය"],["Social Media Video Editing","සමාජ මාධ්‍ය වීඩියෝ සංස්කරණය"],["Promotional Video Editing","ප්‍රවර්ධන වීඩියෝ සංස්කරණය"],["Intro & Outro Editing","වීඩියෝ ආරම්භක සහ අවසාන කොටස් සංස්කරණය"]]},
 {icon:"⌘",en:"WEBSITE DEVELOPMENT",si:"වෙබ් අඩවි සංවර්ධනය",desc:"ඔබේ සේවාවන් ලෝකයට හඳුන්වා දෙන නවීන, වේගවත් සහ උපාංගවලට ගැළපෙන වෙබ් අඩවි.",items:[["Business Website Development","ව්‍යාපාරික වෙබ් අඩවි නිර්මාණය"],["Portfolio Website Development","Portfolio වෙබ් අඩවි නිර්මාණය"],["Landing Page Development","Landing Page නිර්මාණය"],["Modern Responsive Websites","සියලුම උපාංගවලට ගැළපෙන නවීන වෙබ් අඩවි"],["Custom Website Solutions","අවශ්‍යතාවයට ගැළපෙන විශේෂ වෙබ් අඩවි"]]},
 {icon:"▣",en:"APP DEVELOPMENT",si:"යෙදුම් සංවර්ධනය",desc:"ඔබේ ව්‍යාපාරික අදහස් පහසු ඩිජිටල් අත්දැකීම් බවට පත් කිරීමට යෙදුම් විසඳුම්.",items:[["Mobile Application Development","ජංගම යෙදුම් නිර්මාණය"],["Business App Development","ව්‍යාපාරික යෙදුම් නිර්මාණය"],["Custom App Solutions","අවශ්‍යතාවයට ගැළපෙන විශේෂ යෙදුම්"]]}
];
const serviceGrid=document.querySelector("#serviceGrid");
serviceData.forEach((s,i)=>{
 const card=document.createElement("article");card.className="service-card reveal";
 card.innerHTML=`<div class="service-head"><div class="service-icon">${s.icon}</div><div><h3>${s.en}</h3><div class="service-si">${s.si}</div><div class="service-count">SERVICE 0${i+1} / 05 · ${s.items.length} SERVICES</div></div></div><p class="service-summary">${s.desc}</p><ul class="service-list">${s.items.map(x=>`<li><b>${x[0]}</b><span>${x[1]}</span></li>`).join("")}</ul><div class="card-cta"><a class="small-cta" target="_blank" rel="noopener" href="${waLink("Hello RUSIRU CREATIVES, I am interested in "+s.en+". Please share details and a quote.")}">WhatsApp Order / Get a Quote ↗</a></div>`;
 serviceGrid.appendChild(card);
});

const portfolioCategories=[
 {id:"graphic",en:"GRAPHIC DESIGN",si:"ග්‍රැෆික් නිර්මාණ",items:[["Social Media Posts","සමාජ මාධ්‍ය පෝස්ට්"],["Business Promotion Posters","ව්‍යාපාර ප්‍රවර්ධන පෝස්ටර්"],["Advertising Designs","වෙළඳ දැන්වීම් නිර්මාණ"],["YouTube Thumbnails","YouTube Thumbnail නිර්මාණ"],["Class & Tuition Posters","පන්ති සහ ටියුෂන් පෝස්ටර්"]]},
 {id:"logo",en:"LOGO DESIGN",si:"ලෝගෝ නිර්මාණ",items:[["Business Logos","ව්‍යාපාරික ලෝගෝ"],["Modern Logo Concepts","නවීන ලෝගෝ සංකල්ප"],["Brand Identity Designs","සන්නාම අනන්‍යතා නිර්මාණ"],["Professional Logo Designs","වෘත්තීය ලෝගෝ නිර්මාණ"]]},
 {id:"video",en:"VIDEO EDITING",si:"වීඩියෝ සංස්කරණය",items:[["YouTube Videos","YouTube වීඩියෝ"],["Promotional Videos","ප්‍රවර්ධන වීඩියෝ"],["Social Media Videos","සමාජ මාධ්‍ය වීඩියෝ"],["Intro & Outro Videos","ආරම්භක සහ අවසාන වීඩියෝ"]]},
 {id:"web",en:"WEBSITE DEVELOPMENT",si:"වෙබ් අඩවි සංවර්ධනය",items:[["Business Websites","ව්‍යාපාරික වෙබ් අඩවි"],["Portfolio Websites","Portfolio වෙබ් අඩවි"],["Landing Pages","Landing Page"],["Responsive Website Designs","සියලු උපාංගවලට ගැළපෙන වෙබ් අඩවි"]]},
 {id:"app",en:"APP DEVELOPMENT",si:"යෙදුම් සංවර්ධනය",items:[["Mobile App UI Designs","ජංගම යෙදුම් UI නිර්මාණ"],["Business App Concepts","ව්‍යාපාරික යෙදුම් සංකල්ප"],["Custom App Designs","විශේෂිත යෙදුම් නිර්මාණ"]]}
];
// These are clearly labelled editable placeholders, not claimed client projects.
// Replace placeholderText and placeholderStyle, or add image: "images/your-project.jpg" to a project object.
const projects=portfolioCategories.flatMap(cat=>cat.items.map((item,i)=>({
 category:cat.id,categoryName:cat.en,title:item[0],sinhala:item[1],
 description:"Portfolio placeholder — add your own original project image and project details here.",
 mark:["RC","✦","◈","▶","⌘"][i%5],
 placeholderStyle:`hue${portfolioCategories.findIndex(c=>c.id===cat.id)%5}`
})));
const filters=document.querySelector("#portfolioFilters");
const portfolioGrid=document.querySelector("#portfolioGrid");
let activeFilter="all",showAll=false,activeProject=0;
const initialCount=9;
const filterNames=[["all","VIEW ALL"],...portfolioCategories.map(c=>[c.id,c.en])];
filterNames.forEach(([id,label],i)=>{const b=document.createElement("button");b.className="filter-btn"+(i===0?" active":"");b.textContent=label;b.dataset.filter=id;filters.appendChild(b)});
function projectMarkup(p,index){
 const cat=portfolioCategories.find(c=>c.id===p.category);
 const art=`<div class="project-art ${p.placeholderStyle}">${p.image?`<img src="${p.image}" alt="${p.title}" loading="lazy">`:`<span class="placeholder-mark">${p.mark}</span><span class="placeholder-label">YOUR IMAGE HERE · PLACEHOLDER</span>`}</div>`;
 return `<article class="project-card" data-index="${index}" tabindex="0" role="button" aria-label="Preview ${p.title}"><div class="project-art ${p.placeholderStyle}">${p.image?`<img src="${p.image}" alt="${p.title}" loading="lazy">`:`<span class="placeholder-mark">${p.mark}</span><span class="placeholder-label">EDITABLE IMAGE PLACEHOLDER</span>`}</div><div class="project-info"><div class="project-category">${p.categoryName}</div><h3>${p.title} <span class="sinhala">· ${p.sinhala}</span></h3><p class="sinhala">ඔබගේ සැබෑ නිර්මාණය මෙහි එක් කරන්න.</p><div class="project-actions"><button type="button" class="preview-project">Preview</button><a href="${waLink("Hello RUSIRU CREATIVES, I would like to inquire about "+p.title+".")}" target="_blank" rel="noopener">WhatsApp Inquiry ↗</a></div></div></article>`;
}
function renderPortfolio(){
 const filtered=projects.map((p,i)=>({...p,index:i})).filter(p=>activeFilter==="all"||p.category===activeFilter);
 const visible=showAll?filtered:filtered.slice(0,initialCount);
 portfolioGrid.innerHTML=visible.map(p=>projectMarkup(p,p.index)).join("");
 portfolioGrid.querySelectorAll(".project-card").forEach(card=>{
  const open=()=>openLightbox(Number(card.dataset.index));
  card.addEventListener("click",e=>{if(e.target.closest("a"))return;open()});
  card.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();open()}});
 });
 document.querySelector("#viewAllBtn").textContent=showAll?"Show Less ↑":"View All ↓";
}
filters.addEventListener("click",e=>{
 const b=e.target.closest("button[data-filter]");if(!b)return;
 activeFilter=b.dataset.filter;showAll=false;
 filters.querySelectorAll("button").forEach(x=>x.classList.toggle("active",x===b));renderPortfolio();
});
document.querySelector("#viewAllBtn").addEventListener("click",()=>{showAll=!showAll;renderPortfolio()});

const lightbox=document.querySelector("#lightbox");
function openLightbox(index){
 activeProject=index;const p=projects[index];
 document.querySelector("#lightboxArt").innerHTML=p.image?`<img src="${p.image}" alt="${p.title}">`:`<span>${p.mark}</span>`;
 document.querySelector("#lightboxTitle").textContent=p.title+" · "+p.sinhala;
 document.querySelector("#lightboxDesc").textContent="Editable portfolio placeholder. Add your real project image and description in script.js.";
 lightbox.classList.add("open");lightbox.setAttribute("aria-hidden","false");document.body.style.overflow="hidden";
}
function closeLightbox(){lightbox.classList.remove("open");lightbox.setAttribute("aria-hidden","true");document.body.style.overflow=""}
document.querySelector(".lightbox-close").addEventListener("click",closeLightbox);
document.querySelector(".lightbox-prev").addEventListener("click",()=>openLightbox((activeProject-1+projects.length)%projects.length));
document.querySelector(".lightbox-next").addEventListener("click",()=>openLightbox((activeProject+1)%projects.length));
lightbox.addEventListener("click",e=>{if(e.target===lightbox)closeLightbox()});
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeLightbox()});

const menuButton=document.querySelector(".menu-toggle"),nav=document.querySelector(".main-nav");
menuButton.addEventListener("click",()=>{const open=nav.classList.toggle("open");menuButton.setAttribute("aria-expanded",String(open))});
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");menuButton.setAttribute("aria-expanded","false")}));
document.querySelector("#year").textContent=new Date().getFullYear();
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("visible");observer.unobserve(entry.target)}}),{threshold:.08});
document.querySelectorAll(".reveal,.service-card").forEach(el=>observer.observe(el));
renderPortfolio();