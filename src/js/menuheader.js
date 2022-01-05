import '../css/menuLateral.css';
import '../css/profile.css';
import '../css/skills.css';
import '../css/experiences.css'

export const menuHeader = () => {
    const menu = document.querySelector(".menu");
    const openMenuBtn = document.querySelector(".open-menu");
    const closeMenuBtn = document.querySelector(".close-menu");

    function abrirMenu() {
        menu.classList.toggle("menu_opened");
    }
    openMenuBtn.addEventListener("click", abrirMenu);
    closeMenuBtn.addEventListener("click", abrirMenu);
}