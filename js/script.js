document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.view-all').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();

      const targetId = link.getAttribute('data-target');
      const track = document.getElementById(targetId);

      console.log("🔎 الضغط على الزر:", link.textContent, " | targetId:", targetId, " | track:", track);

      if (!track) {
        console.error("❌ لم يتم العثور على العنصر:", targetId);
        return;
      }

      const maxScroll = track.scrollWidth - track.clientWidth;
      console.log("📏 maxScroll:", maxScroll, " | scrollLeft قبل:", track.scrollLeft);

      if (track.scrollLeft < 5) {
        track.scrollTo({ left: maxScroll, behavior: 'smooth' });
        link.textContent = '← رجوع';
        console.log("➡️ تم التمرير للنهاية");
      } else {
        track.scrollTo({ left: 0, behavior: 'smooth' });
        link.textContent = '← عرض الكل';
        console.log("⬅️ تم الرجوع للبداية");
      }
    });
  });
});
