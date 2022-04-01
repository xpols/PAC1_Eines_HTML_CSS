export const presentation = () => {
    const wrapper = document.createElement("section");
    wrapper.classList = "presentation";
    const p = document.createElement("p");
    p.innerText = "test presentation";
    

    wrapper.appendChild(p);

    return wrapper;
}