export const links = () => {
    const wrapper = document.createElement("section");
    wrapper.classList = "links";
    const p = document.createElement("p");
    p.innerText = "test links";
    

    wrapper.appendChild(p);

    return wrapper;
}