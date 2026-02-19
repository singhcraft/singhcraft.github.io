const faders=document.querySelectorAll(".fade");

const appear=new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("show");
}
});
},{threshold:0.3});

faders.forEach(el=>{
appear.observe(el);
});


/* PARALLAX EFFECT */
window.addEventListener("scroll",()=>{
document.querySelector(".hero").style.transform=
"translateY("+window.scrollY*0.2+"px)";
});
