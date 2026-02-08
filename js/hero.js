const heroTitle = document.querySelector(".hero-title");
const text = "Hi, I'm Zahra Essam";
let i = 0;

function typeWriter(){
if(i < text.length){
heroTitle.innerHTML += text.charAt(i);
i++;
setTimeout(typeWriter,80);
}
}
typeWriter();

