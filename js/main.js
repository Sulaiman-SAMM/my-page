// Start Scroll To Top ----------------------------------------

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})


// dark mood -----------------------------------------------
let toggleBtn = document.querySelector("#toggleBtn");

      let bodyEl = document.querySelector("body");

      let darkMode = false;

      toggleBtn.addEventListener('change', (event) => {
        darkMode = event.target.checked;
        if(darkMode) {
          bodyEl.classList.add("dark");
        } else {
          bodyEl.classList.remove("dark");
        }
      })
