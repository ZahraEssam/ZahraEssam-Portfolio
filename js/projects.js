// projects.js

// Toggle project description (Info)
function toggleDescription(button) {
  const projectCard = button.closest('.project-card');
  const desc = projectCard.querySelector('.project-description');
  const tools = projectCard.querySelector('.project-tools');
  const toolsIcon = projectCard.querySelector('.tools-icon');

  // إغلاق Tools لو مفتوح
  if (tools && tools.style.display === "block") {
    tools.style.display = "none";
    if (toolsIcon) toolsIcon.style.opacity = "1";
  }

  // Toggle Info
  if (desc.style.display === "none" || desc.style.display === "") {
    desc.style.display = "block";
    button.style.opacity = "0.7";
  } else {
    desc.style.display = "none";
    button.style.opacity = "1";
  }
}

// Toggle project tools/languages
function toggleTools(button) {
  const projectCard = button.closest('.project-card');
  const tools = projectCard.querySelector('.project-tools');
  const infoDesc = projectCard.querySelector('.project-description');
  const infoIcon = projectCard.querySelector('.info-icon');

  // إغلاق Info لو مفتوح
  if (infoDesc && infoDesc.style.display === "block") {
    infoDesc.style.display = "none";
    if (infoIcon) infoIcon.style.opacity = "1";
  }

  // Toggle Tools
  if (tools.style.display === "none" || tools.style.display === "") {
    tools.style.display = "block";
    button.style.opacity = "0.7";
  } else {
    tools.style.display = "none";
    button.style.opacity = "1";
  }
}

// Fade-in animation on scroll
document.addEventListener("DOMContentLoaded", () => {
  const faders = document.querySelectorAll('.fade');
  const appearOptions = { threshold: 0.2, rootMargin: "0px 0px -50px 0px" };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  }, appearOptions);

  faders.forEach(fader => appearOnScroll.observe(fader));
});

const galleries = document.querySelectorAll('.image-gallery');

galleries.forEach(gallery => {
  updateButtons(gallery);
});

function updateButtons(gallery) {
  const images = gallery.querySelectorAll('.gallery-img');
  const prevBtn = gallery.querySelector('.prev');
  const nextBtn = gallery.querySelector('.next');
  let currentIndex = Array.from(images).findIndex(img => img.classList.contains('active'));

  prevBtn.style.display = currentIndex > 0 ? 'block' : 'none';
  nextBtn.style.display = currentIndex < images.length - 1 ? 'block' : 'none';
}

function nextImage(button){
  const gallery = button.parentElement;
  const images = gallery.querySelectorAll('.gallery-img');
  let currentIndex = Array.from(images).findIndex(img => img.classList.contains('active'));
  if (currentIndex < images.length - 1) {
    images[currentIndex].classList.remove('active');
    images[currentIndex + 1].classList.add('active');
  }
  updateButtons(gallery);
}

function prevImage(button){
  const gallery = button.parentElement;
  const images = gallery.querySelectorAll('.gallery-img');
  let currentIndex = Array.from(images).findIndex(img => img.classList.contains('active'));
  if (currentIndex > 0) {
    images[currentIndex].classList.remove('active');
    images[currentIndex - 1].classList.add('active');
  }
  updateButtons(gallery);
}

function toggleProjects(){
  const more=document.getElementById("moreProjects");
  const btn=document.querySelector("button.btn.primary");
  if(more.style.display==="none"){
    more.style.display="grid";
    btn.textContent="Show Less Projects";
  } else {
    more.style.display="none";
    btn.textContent="View All Projects";
  }
}

function filterProjects(type){
  document.querySelectorAll(".project").forEach(p=>{
    if(type==="all") p.style.display="block";
    else p.style.display=p.classList.contains(type)?"block":"none";
  });
}

function toggleInfo(el){
  const info = el.closest(".project-card").querySelector(".project-info");
  info.style.display = info.style.display === "none" ? "block" : "none";
}
// ===== Filter Projects =====
function filterProjects(type){
  document.querySelectorAll(".project").forEach(p=>{
    if(type==="all") p.style.display="block";
    else p.style.display=p.classList.contains(type)?"block":"none";
  });
}

// ===== Tooltip for Info Icon =====
const tooltip = document.getElementById("tooltip");

document.querySelectorAll(".info-icon").forEach(icon=>{
  icon.addEventListener("mouseenter", (e)=>{
    tooltip.innerText = icon.dataset.tooltip;
    tooltip.style.display = "block";

    const rect = icon.getBoundingClientRect();
    tooltip.style.top = rect.bottom + window.scrollY + 5 + "px";
    tooltip.style.left = rect.left + window.scrollX + "px";
  });

  icon.addEventListener("mouseleave", ()=>{
    tooltip.style.display = "none";
  });
});
