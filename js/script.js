document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.view-all').forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();

            const track = document.getElementById(this.getAttribute('data-target'));

            if (track) {
                // العرض الكلي للمحتوى (بما في ذلك المخفي)
                const scrollWidth = track.scrollWidth;
                // العرض المرئي للحاوية
                const clientWidth = track.clientWidth;
                // أقصى قيمة سكرول ممكنة (بالسالب أو الموجب، لكن نحتاج القيمة المطلقة)
                const maxScroll = scrollWidth - clientWidth;
                
                // نستخدم Math.abs للتعامل مع المتصفحات التي تعطي قيماً سالبة
                // إذا كانت القيمة المطلقة لـ scrollLeft أقل بكثير من أقصى سكرول (maxScroll)، 
                // فنحن في منطقة "البداية" (أو أقصى اليمين)
                
                // إذا كان السكرول قريب جداً من الصفر (أقصى اليمين)
                if (Math.abs(track.scrollLeft) < 5 || track.scrollLeft >= 0) { 
                    // إذا كنا في البداية (أقصى اليمين)
                    
                    // اذهب إلى أقصى اليسار (استخدم القيمة السالبة لأنك تعمل في RTL)
                    // ملاحظة: بعض المتصفحات تستخدم قيمًا سالبة لأقصى اليسار في RTL
                    track.scrollTo({ left: -maxScroll, behavior: 'smooth' }); 
                    
                    // إذا لم يعمل -maxScroll، جرب القيمة الموجبة maxScroll:
                    // track.scrollTo({ left: maxScroll, behavior: 'smooth' });
                    
                } else {
                    // إذا لم نكن في البداية، ارجع إلى الصفر (أقصى اليمين)
                    track.scrollTo({ left: 0, behavior: 'smooth' });
                }
            }
        });
    });
});

  // فتح المودال عند الضغط على زر تسجيل في الـ Hero
  document.querySelector(".hero .btn.yellow").addEventListener("click", () => {
    document.getElementById("authModal").style.display = "flex";
  });

  // إغلاق المودال عند الضغط على زر X
  document.querySelector(".modal .close").addEventListener("click", () => {
    document.getElementById("authModal").style.display = "none";
  });

  // إغلاق عند الضغط خارج المحتوى
  window.addEventListener("click", e => {
    const modal = document.getElementById("authModal");
    if (e.target === modal) modal.style.display = "none";
  });

  // التبديل بين تسجيل / تسجيل دخول
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
      document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));

      btn.classList.add("active");
      document.getElementById(btn.dataset.tab).classList.add("active");
    });
  });

  // افتح المودال
  function openCart() {
    document.getElementById('cartModal').style.display = 'flex';
  }

  // اغلاق عند الضغط خارج المودال
  window.onclick = function(event) {
    const modal = document.getElementById('cartModal');
    if (event.target === modal) {
      modal.style.display = "none";
    }
  }

  // عند الضغط على زر "تأكيد" بالكارت
document.querySelectorAll(".cart-summary .btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.getElementById("cartModal").style.display = "none"; // اغلاق الكارت
    document.getElementById("paymentModal").style.display = "flex"; // فتح الدفع
  });
});


// عند الضغط على زر "دفع كاش"
document.querySelector(".btn-cash").addEventListener("click", function() {
  // اغلاق بوب اب الدفع
  document.getElementById("paymentModal").style.display = "none";
  // فتح بوب اب الشيك آوت
  document.getElementById("checkoutModal").style.display = "flex";
});

// زر تأكيد في checkout يفتح doneModal
document.querySelector(".checkout-popup form").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("checkoutModal").style.display = "none";
  document.getElementById("doneModal").style.display = "flex";
});

// زر أكمل التسوق يرجع المستخدم للصفحة الرئيسية
document.querySelector(".btn-done").addEventListener("click", function() {
  document.getElementById("doneModal").style.display = "none";
});


// store.html
function toggleDropdown() {
  const menu = document.getElementById('dropdown-menu');
  const btn = document.querySelector('.dropdown');
  
  menu.classList.toggle('show');
  btn.classList.toggle('open');
}

// إغلاق القائمة عند الضغط خارجها
window.onclick = function(e) {
  if (!e.target.closest('.dropdown-container')) {
    document.getElementById('dropdown-menu').classList.remove('show');
    document.querySelector('.dropdown').classList.remove('open');
  }
};


function openPopup(id) {
  document.getElementById(id).style.display = "flex";
}

function closePopup(id) {
  document.getElementById(id).style.display = "none";
}

// إغلاق البوب-أب عند الضغط خارج الصندوق
window.onclick = function(e) {
  const popups = document.querySelectorAll(".popup-overlay");
  popups.forEach(p => {
    if (e.target === p) {
      p.style.display = "none";
    }
  });
};





