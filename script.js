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
    let linksNavbar = document.getElementsByClassName("nav-link");
    let linkFormacion = document.querySelector(".link-formacion");
    let menuFormacion = document.querySelector('.menu-formacion');
    let navbarImg = document.querySelector(".logo > img");

    function cerrarNavbar() {
        navbar.style.display = "none";
    }

    function abrirNavbar() {
        navbar.style.display = "block";
    }

    function eventosBotonesMobile() {
        for (const item of linksNavbar) {
            item.onclick = cerrarNavbar;
        }
        linkFormacion.onclick = toggleMenuFormacion;
    }

    function eventosBotonesDesktop() {
        for (const item of linksNavbar) {
            item.onclick = "javascript:void(0)";
        }
        linkFormacion.onclick = "javascript:void(0)";
    }

    function toggleMenuFormacion() {
        menuFormacion.style.display = menuFormacion.style.display === 'block' ? 'none' : 'block';
    }

    function isScrolled(){
        return window.scrollY > 5;
    }

    function onscrollStyles(){
        header.className = isScrolled() ? "header header-on-scroll" : "header header-on-top";
        navbarImg.style.maxHeight = isScrolled() ? "66px" : "170px";
    }

    function responsiveStyles() {
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

    responsiveStyles();
    window.onresize = responsiveStyles;

    onscrollStyles();
    window.onscroll = onscrollStyles;

    iconoMenu.onclick = abrirNavbar;

    cerrarMenu.onclick = cerrarNavbar;
}