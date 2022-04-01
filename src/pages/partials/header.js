import { home } from "../home";
import { category } from "../categoy";
import { detaill } from "../detaill";

import '../../styles/style.css';

export const header = () => {
    const wrapper = document.createElement("section");
    wrapper.classList = "home";
    const p = document.createElement("p");
    p.innerText = "Header";

    const ul = document.createElement("ul");
    const liHome = document.createElement("li");
    liHome.innerText = "home";
    ul.appendChild(liHome);
    const liCat = document.createElement("li");
    liCat.innerText = "category";
    ul.appendChild(liCat);
    const liDetaill = document.createElement("li");
    liDetaill.innerText = "detaill";
    ul.appendChild(liDetaill);
    
    

    wrapper.appendChild(p);
    wrapper.appendChild(ul);

    initListener(liHome, home());
    initListener(liCat, category());
    initListener(liDetaill, detaill());

    return wrapper;
}

function initListener(el, page) {
    el.addEventListener("click", function() {
        let app = document.getElementById("app");
        app.innerHTML = "";
        app.appendChild(page);
    }, false);
}