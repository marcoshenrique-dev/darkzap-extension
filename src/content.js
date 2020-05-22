/*
    Autor: Marcos Henrique
    Refatoração: Pedro Lemos (21/05/2020)
    Links úteis: https://linktr.ee/robotica_e_desafios
    Canal: Robótica e desafios
*/

var isDark = false;

const interval = setInterval(() => {
    const header = document.querSelector("._3auIg");

    if (!!header) {
        console.log(header);
        clearInterval(interval);

        const toggleButton = document.createElement("toggleButton");
        toggleButton.innerHTML = "Dark mode";
        toggleButton.classList.add("darkMode");
        toggleButton.addEventListener("click", () => {
            isDark ? document.querySelector("body").classList.remove("dark") : document.querySelector("body").classList.add("dark");
            isDark = !isDark;
        });

        header.appendChild(toggleButton);
    }
}, 1000);