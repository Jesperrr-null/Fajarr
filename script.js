onload = () => {
    document.body.classList.remove("container");
  };

  const wrapper = document.querySelector(".wrapper");
  const openBtn = document.getElementById("openBtn");
  const closeBtn = document.getElementById("closeBtn");
  
 openBtn.addEventListener("click", () => {
  wrapper.classList.remove("close");
  wrapper.classList.add("open");
  openBtn.style.display = "none";
  closeBtn.style.display = "inline-block";

  const tombolBaca = document.getElementById("openBtn2");
  const isiSurat = document.querySelector(".isiSurat");
  let pesan;

  if (!sudahBukaSekali) {
    pesan = pesanPertama;
    sudahBukaSekali = true;
  } else {
    if (pesanList.length > 0) {
      const index = Math.floor(Math.random() * pesanList.length);
      pesan = pesanList.splice(index, 1)[0];
    } else {
      pesan = "Pesannya habis cuy, nanti lagi yaa 😁";
    }
  }

  if (isiSurat) {
    isiSurat.textContent = pesan;
  }

  if (tombolBaca) {
    tombolBaca.disabled = false;
    tombolBaca.classList.add("active");
  }
});



  
  closeBtn.addEventListener("click", () => {
      wrapper.classList.remove("open");
      wrapper.classList.add("close");
      closeBtn.style.display = "none";
      openBtn.style.display = "inline-block";
      const tombolBaca = document.getElementById("openBtn2");
      if (tombolBaca) {
      tombolBaca.disabled = true;                // nonaktifin lagi
       tombolBaca.classList.remove("active");     // balik ke abu-abu
  }
  });
  
  const semuaPesan = [
  "Jangan lupa belajar ya! 📚",
  "Aku yakin kamu bisa jadi dokter yang hebatt 👩‍⚕️",
  "Jangan lupa istirahat dan makan! 🍽️",
  "Kamu keren banget, loh 😎",
  "Semangat ya buat hari ini!!!",
  "Aku seneng banget kamu buka surat ini "
];

const pesanPertama = "Aku seneng banget kamu buka surat ini ";
let pesanList = semuaPesan.filter(pesan => pesan !== pesanPertama);
let sudahBukaSekali = false;

const openBtn2 = document.getElementById("openBtn2");
openBtn2.addEventListener("click", () => {
  if (openBtn2.disabled) return; // tetap dicek agar aman

  const isiSurat = document.querySelector(".isiSurat");
  if (isiSurat) {
    isiSurat.textContent = "Passwordnya hewan yang sering tidur🐨💤";
  }
});
// Nonaktifkan tombol baca surat saat halaman dimuat
 openBtn2.disabled = true; // Nonaktifkan tombol baca surat saat halaman dimuat
 openBtn2.classList.remove("active"); // Pastikan tombol baca surat tidak aktif saat halaman dimuat                      

const popup = document.getElementById("popup");
const passwordInput = document.getElementById("passwordInput");

if (passwordInput) {
  const togglePassword = document.createElement("span");
  togglePassword.textContent = "😴";
  togglePassword.style.cursor = "pointer";
  togglePassword.style.marginLeft = "8px";
  togglePassword.style.userSelect = "none";

  togglePassword.addEventListener("click", () => {
    const isPassword = passwordInput.getAttribute("type") === "password";
    passwordInput.setAttribute("type", isPassword ? "text" : "password");
    togglePassword.textContent = isPassword ? "😮" : "😴";
  });

  if (!passwordInput.nextSibling || passwordInput.nextSibling.textContent !== "👁️") {
    passwordInput.parentNode.insertBefore(togglePassword, passwordInput.nextSibling);
  }
  passwordInput.setAttribute("type", "password"); // Pastikan input password adalah tipe password
} else {
  console.error("Elemen input password tidak ditemukan.");
}
// Nonaktifkan tombol baca surat saat halaman dimuat


const submitPassword = document.getElementById("submitPassword");
const cancelPopup = document.getElementById("cancelPopup");

openBtn2.addEventListener("click", () => {
  if (openBtn2.disabled) return; // tetap dicek agar aman

  popup.style.display = "flex";
  passwordInput.value = "";
  passwordInput.focus();
});

submitPassword.addEventListener("click", () => {
  const password = passwordInput.value.trim();
  if (password === "koala") {
    window.location.href = "halaman2.html";
  } else if (password === "12345678") {
    window.location.href = "halaman4.html";
  } else {
    window.location.href = "halaman3.html"; 
  }
});

cancelPopup.addEventListener("click", () => {
  popup.style.display = "none";
});



