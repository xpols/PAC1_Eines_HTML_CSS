export const category = () => {
    const wrapper = document.createElement("section");
    wrapper.classList = "category";
    const p = document.createElement("p");
    p.innerText = "test categori";
    

    wrapper.appendChild(p);

    return wrapper;
}
