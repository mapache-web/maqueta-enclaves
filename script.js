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
    
    function definirEstilos() {
        if (window.innerWidth > 768) {

            if (wrapper.children.length === 4) {
                wrapper.removeChild(wrapper.lastChild);
            }
    
            header.appendChild(navbar);
            navbar.style.display = "flex";
            navbar.className = "navbar-desktop";
        }
    
        if (window.innerWidth < 768) {
    
            if (wrapper.children.length === 3) {
                wrapper.appendChild(navbar);
            }
            navbar.style.display = "none";
            navbar.className = "navbar-mobile";
        }
    }

    definirEstilos();

    window.onresize = definirEstilos;

    iconoMenu.onclick = function () {
        navbar.style.display = "block";
    }

    cerrarMenu.onclick = function () {
        navbar.style.display = "none";
    }
}