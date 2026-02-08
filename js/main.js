const faders=document.querySelectorAll('.fade');

const reveal=()=>{
  faders.forEach(el=>{
    const top=el.getBoundingClientRect().top;
    if(top<window.innerHeight-80){
      el.classList.add('show');
    }
  });
};

window.addEventListener('scroll',reveal);
window.addEventListener('load',reveal);
document.querySelectorAll(".skill").forEach(skill=>{
const value=skill.dataset.level;
skill.querySelector(".progress").style.width=value+"%";
});

// عرض أو إخفاء الأسهم حسب الصورة الحالية
function updateButtons(gallery){
  const images = gallery.querySelectorAll('.gallery-img');
  const prevBtn = gallery.querySelector('.prev');
  const nextBtn = gallery.querySelector('.next');
  const currentIndex = Array.from(images).findIndex(img => img.classList.contains('active'));

  prevBtn.style.display = currentIndex > 0 ? 'block' : 'none';
  nextBtn.style.display = currentIndex < images.length - 1 ? 'block' : 'none';
}

// تهيئة المعارض عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.image-gallery').forEach(gallery => updateButtons(gallery));
});

// التبديل لليمين
function nextImage(button){
  const gallery = button.closest('.image-gallery');
  const images = gallery.querySelectorAll('.gallery-img');
  const currentIndex = Array.from(images).findIndex(img => img.classList.contains('active'));

  if(currentIndex < images.length - 1){
    images[currentIndex].classList.remove('active');
    images[currentIndex + 1].classList.add('active');
  }

  updateButtons(gallery);
}

// التبديل لليسار
function prevImage(button){
  const gallery = button.closest('.image-gallery');
  const images = gallery.querySelectorAll('.gallery-img');
  const currentIndex = Array.from(images).findIndex(img => img.classList.contains('active'));

  if(currentIndex > 0){
    images[currentIndex].classList.remove('active');
    images[currentIndex - 1].classList.add('active');
  }

  updateButtons(gallery);
}

function toggleProjects(){
const more=document.getElementById("moreProjects");

if(more.style.display==="none"){
more.style.display="grid";
}else{
more.style.display="none";
}
}


