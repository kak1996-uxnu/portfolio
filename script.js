// ===============================
// 🌙 ダークモード
// ===============================

const themeToggle = document.getElementById("themeToggle");

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    themeToggle.textContent = "☀️";
}

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    const isDark = document.body.classList.contains("dark");

    themeToggle.textContent = isDark ? "☀️" : "🌙";

    localStorage.setItem("theme", isDark ? "dark" : "light");
});


// ===============================
// ☰ サイドバー開閉
// ===============================

const sidebar = document.getElementById("sidebar");
const menuBtn = document.getElementById("toggleBtn");

menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
});