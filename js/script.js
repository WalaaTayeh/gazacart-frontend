function openModal() {
  const modal = document.getElementById("authModal");
  if (modal) {
    modal.style.display = "flex";
  } else {
    console.error("المودال مش محمّل!");
  }
}

// إغلاق عند الضغط على الخلفية
window.onclick = function(event) {
  const modal = document.getElementById("authModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
