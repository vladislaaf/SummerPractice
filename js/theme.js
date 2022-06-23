const btn = document.querySelector(".btn-toggle");
const theme = document.querySelector("#theme-link");
btn.addEventListener("click", function() {
        if (theme.getAttribute("href") == "styles/light-theme.css") {
            theme.href = "styles/dark-theme.css";
        } else {
            theme.href = "styles/light-theme.css";
        }
    });
