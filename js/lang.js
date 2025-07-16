// Dil tercihini tarayıcıda saklamak için:
const getLang = () => localStorage.getItem("lang") || "tr";

// Global değişken:
let currentLangData = {};

// JSON'dan ilgili dil dosyasını yükle ve sayfayı güncelle:
function loadLanguage(lang, callback) {
  fetch(`lang/${lang}.json`)
    .then(res => res.json())
    .then(data => {
      currentLangData = data;  // Burada global değişkene ata

      document.querySelectorAll("[data-lang]").forEach(el => {
        const keys = el.getAttribute("data-lang").split(".");
        let text = data;
        keys.forEach(key => {
          if(text) text = text[key];
        });
        if (text) {
          // Eğer metin içinde {{username}} varsa değiştir
          const username = localStorage.getItem("username") || "";
          text = text.replace("{{username}}", username);
          el.innerHTML = text;
        }
      });
      if (callback) callback();
    });
}

// Sayfa yüklendiğinde seçili dili uygula
document.addEventListener("DOMContentLoaded", () => {
  const lang = getLang();
  loadLanguage(lang);
});

// Kullanıcı dil değiştirdiğinde çağrılır, dil seçimi kaydedilir ve sayfa yenilenir
function setLanguage(lang) {
  localStorage.setItem("lang", lang);
  location.reload();
}
