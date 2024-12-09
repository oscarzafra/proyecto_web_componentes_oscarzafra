import "./Header.css";
import Navbar from "../Navbar/Navbar"
import {themeToggle} from "../Navbar/Navbar"

const Header = () => {
    const headerElement = document.createElement("header");
    headerElement.innerHTML = `${Navbar()}`;

    document.body.appendChild(headerElement);
    themeToggle();

    const open = headerElement.querySelector("#abrir");
    const close = headerElement.querySelector("#cerrar");
    const nav = headerElement.querySelector("#nav");

    open.addEventListener("click", () => {
        nav.classList.add("view");
    });

    close.addEventListener("click", () => {
        nav.classList.remove("view");
    });


}

export default Header;
