// Initial theme based on user preference
const userPrefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
const theme = userPrefersDark ? "dark" : "light";
document.documentElement.classList.add(`${theme}-theme`);

const themeText = document.querySelector(".theme-text");

// Toggle theme function
function toggleTheme() {
  if (document.documentElement.classList.contains("dark-theme")) {
    document.documentElement.classList.remove("dark-theme");
    document.documentElement.classList.add("light-theme");
    themeText.innerText = "Light Theme";
  } 
  else {
    document.documentElement.classList.remove("light-theme");
    document.documentElement.classList.add("dark-theme");
    themeText.innerText = "Dark Theme";
  }

    // Start spinning animation
    themeButton.classList.add("spin-animation");

    // Remove spinning animation after 500ms
    setTimeout(() => {
      themeButton.classList.remove("spin-animation");
    }, 500);
}

const themeButton = document.querySelector(".toggle-theme")
themeButton.addEventListener("click", toggleTheme);