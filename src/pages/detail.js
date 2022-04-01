export const detail = () => {
    const wrapper = document.createElement("section");
    wrapper.classList = "detail";
    const p = document.createElement("p");
    p.innerText = "test detail";
    

    wrapper.appendChild(p);

    return wrapper;
}