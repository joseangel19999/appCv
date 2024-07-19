import './css/main.css';
import { menuHeader } from './js/menuheader';
menuHeader();

document.addEventListener("DOMContentLoaded",showTarggeta);


function showTarggeta(){
    let fetchRes = fetch(
        "https://jsonplaceholder.typicode.com/todos/1");
        fetchRes.then(res =>
          res.json()).then((d) => {
            console.log("DATA: "+JSON.stringify(d));
          });
}
/* import './css/menuLateral.css'; */

/* const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".open-menu");
const closeMenuBtn = document.querySelector(".close-menu");

function abrirMenu() {
    menu.classList.toggle("menu_opened");
}
openMenuBtn.addEventListener("click", abrirMenu);
closeMenuBtn.addEventListener("click", abrirMenu); */