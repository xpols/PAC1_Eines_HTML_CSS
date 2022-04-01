export const footer = () => {
    const wrapper = document.createElement("footer");
    wrapper.classList = "footer";
    wrapper.setAttribute('id','footer')
    const p = document.createElement("p");
    p.innerText = "PAC realizada por : Xavier Pol Sevilla";
    wrapper.appendChild(p);
    return wrapper;
}
