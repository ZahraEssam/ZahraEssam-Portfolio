// جلب العناصر
const modal = document.getElementById("trainingModal");
const modalImg = document.getElementById("modalImg");
const closeBtn = modal.querySelector(".close");

// لكل أيقونة شهادة
document.querySelectorAll(".cert-icon").forEach(icon => {
  icon.addEventListener("click", () => {
    modal.style.display = "flex";        // عرض المودال
    modalImg.src = icon.dataset.full;     // عرض الصورة الكاملة
  });
});

// غلق المودال بالـ X
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// غلق لو ضغط برا الصورة
modal.addEventListener("click", (e) => {
  if(e.target === modal) modal.style.display = "none";
});
