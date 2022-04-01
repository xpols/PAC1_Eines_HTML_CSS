import { home } from "../home";
import { category } from "../categoy";
import { presentation } from "../presentation";
import { links } from "../links";

import '../../styles/style.css';

export const header = () => {
    const wrapper = document.createElement("header");
    wrapper.classList = "header";
    wrapper.setAttribute('id','header');

    const divTitle = document.createElement("div");
    const title = document.createElement("h1");
    title.innerText = "IRON MAN";

    divTitle.appendChild(title);

    const nav = document.createElement("nav");
    const ul = document.createElement("ul");
    const liHome = document.createElement("li");
    liHome.innerText = "home";
    ul.appendChild(liHome);
    const liCat = document.createElement("li");
    liCat.innerText = "category";
    ul.appendChild(liCat);
    const liPresentation = document.createElement("li");
    liPresentation.innerText = "presentation";
    ul.appendChild(liPresentation);
    const liLinks = document.createElement("li");
    liLinks.innerText = "links";
    ul.appendChild(liLinks);

    nav.appendChild(ul);
    
    
    wrapper.appendChild(divTitle);
    wrapper.appendChild(nav);

    initListener(liHome, home());
    initListener(liCat, category());
    initListener(liPresentation, presentation());
    initListener(liLinks, links());

    return wrapper;
}

function initListener(el, page) {
    el.addEventListener("click", function() {
        let app = document.getElementById("app");
        app.innerHTML = "";
        app.appendChild(page);
    }, false);
}