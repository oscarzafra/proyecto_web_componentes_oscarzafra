import "./Navbar.css";
import data from "../../data/data";

const Navbar = () => {
    `
    <a href="#"><p>${data.name}</p></a>
    <button class="open"><i class="bi bi-arrow-down-left-square"></i></button>
    <nav class="navBar">
    <button class="close"><i class="bi bi-box-arrow-left"></i></button>

<ul>
    <li>
        <a href="#" class="btnNavbar">Experiencia</a>
    </li>
    <li>
        <a href="#" class="btnNavbar">Formación Académica</a>
    </li>
    <li>
        <a href="#" class="btnNavbar">Licencias</a>   
    </li>
     <li>
        <a href="#" class="btnNavbar">Proyectos</a>   
    </li>
      <li>
        <a href="#" class="btnNavbar">Contacto</a>   
    </li>
    <li>
        <button id="themeBtn">☀️</button>
    </li>
    
</ul>
    
</nav>
    `
    
};

export const changeText = () => {
    const selectTheme = document.getElementById("themeBtn");

    if(selectTheme.innerText === "☀️"){
        selectTheme.innerText = "🌙";

    } else {
        selectTheme.innerText = "☀️"
    }
}

export const changeTheme = () => {
    
    document.getElementById("themeBtn").addEventListener("click", () =>{
        document.body.classList.toggle("light");
        changeText();
    })
}

export default Navbar;