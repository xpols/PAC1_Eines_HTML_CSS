export const home = () => {
    const wrapper = document.createElement("section");
    wrapper.classList = "home";
    const p = document.createElement("p");
    p.innerText = "test home";
    

    wrapper.appendChild(p);

    return wrapper;
}