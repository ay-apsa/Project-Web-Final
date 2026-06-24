document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const nama = document.getElementById("nama").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const konfirmasi = document.getElementById("konfirmasi").value.trim();

  if (!nama || !email || !password || !konfirmasi) {
    alert("Semua field wajib diisi!");
    return;
  }

  if (password.length < 6) {
    alert("Password minimal 6 karakter!");
    return;
  }

  if (password !== konfirmasi) {
    alert("Konfirmasi password tidak cocok!");
    return;
  }

  alert("Registrasi berhasil! Silakan login, " + nama + " 🎉");
  window.location.href = "login.html";
});