
// MOBILE NAVIGATION

const menuButton = document.querySelector(".menu");
const navigation = document.querySelector(".nav nav");

menuButton.addEventListener("click", () => {
  navigation.classList.toggle("active");

  menuButton.textContent =
    navigation.classList.contains("active") ? "✕" : "☰";
});

// CLOSE MENU AFTER CLICKING A LINK

document.querySelectorAll(".nav nav a").forEach(link => {
  link.addEventListener("click", () => {
    navigation.classList.remove("active");
    menuButton.textContent = "☰";
  });
});

// AUTOMATIC FOOTER YEAR

document.getElementById("year").textContent =
  new Date().getFullYear();
