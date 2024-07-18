"use strict";

document.addEventListener("DOMContentLoaded", function () {

    navbarResponsive();

})

function navbarResponsive() {

    let iconoMenu = document.getElementById("icono-menu");
    let navbar = document.getElementById("navbar");
    let cerrarMenu = document.getElementById("cerrar-menu");
    let wrapper = document.getElementById("wrapper");
    let header = document.getElementById("header");
    let itemsNavbar = document.getElementsByClassName("navLink")

    function cerrarNavbar(){
        navbar.style.display = "none";
    }
    function abrirNavbar(){
        navbar.style.display = "block";
    }

    function eventosBotonesMobile(){
        for (const item of itemsNavbar) {
            item.onclick = cerrarNavbar;
        }
    }

    function eventosBotonesDesktop(){
        for (const item of itemsNavbar) {
            item.onclick = (e) => {
                e.preventDefault();
            }
        }
    }
    
    function definirEstilos() {
        if (window.innerWidth > 768) {

            if (wrapper.children.length === 4) {
                wrapper.removeChild(wrapper.lastChild);
            }
    
            header.appendChild(navbar);
            navbar.style.display = "flex";
            navbar.className = "navbar-desktop";

            eventosBotonesDesktop();
        }
    
        if (window.innerWidth < 768) {
    
            if (wrapper.children.length === 3) {
                wrapper.appendChild(navbar);
            }
            navbar.style.display = "none";
            navbar.className = "navbar-mobile";

            eventosBotonesMobile();
        }
    }

    definirEstilos();

    window.onresize = definirEstilos;

    iconoMenu.onclick = abrirNavbar;

    cerrarMenu.onclick = cerrarNavbar;
}