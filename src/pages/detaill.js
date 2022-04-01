export const detaill = () => {
    const wrapper = document.createElement("section");
    wrapper.classList = "detaill";
    const p = document.createElement("p");
    p.innerText = "test detaill";
    

    wrapper.appendChild(p);

    return wrapper;
}