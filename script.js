const cards=document.querySelectorAll('.card');
const girls=document.querySelectorAll('.girl');

window.addEventListener('scroll',()=>{

cards.forEach(card=>{
if(card.getBoundingClientRect().top < window.innerHeight-100){
card.classList.add('show');
}
});

girls.forEach(girl=>{
if(window.scrollY>50){
girl.classList.add("show");
}
});

});

