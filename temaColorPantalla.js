const botonTema = document.getElementById("btn-tem");
var about = document.getElementById('sobre-mi');
var formation = document.getElementById('formacion');
var contact = document.getElementById('contacto');
var rayo = document.getElementById('rayo');
var icong = document.getElementById('icong');
var iconl = document.getElementById('iconl');
var icont = document.getElementById('icont');
var iconcu = document.getElementById('iconcu');
var hamMenu = document.getElementById('mh');
var fotoP = document.getElementById('foto-perfil');
let isColorChanged = false;

botonTema.addEventListener("click", function() {
  if (isColorChanged) {
    document.body.style.backgroundColor = ""; 
    document.body.style.color = ""; 
    about.style.backgroundColor = "";
    formation.style.backgroundColor = "";
    contact.style.backgroundColor = "";
    skills.style.backgroundColor = "";
    rayo.src = "./assets/rayo-w.svg"
    icong.src = "./assets/github-icon-w.svg"
    iconl.src = "./assets/linkedin-icon-w.svg"
    icont.src = "./assets/twitter-icon-w.svg"
    iconcu.src = "./assets/curriculo-icon-w.svg"
    hamMenu.src = "./assets/menuhamburguer.svg"
    fotoP.src = "./assets/perfil-foto.png"
  } else {
    document.body.style.backgroundColor = "#FF5656"; 
    document.body.style.color = "black"; 
    about.style.backgroundColor = "#C1EEFF";
    formation.style.backgroundColor = "#C1EEFF";
    contact.style.backgroundColor = "#C1EEFF";
    rayo.src = "./assets/rayo.svg"
    icong.src = "./assets/github.svg"
    iconl.src = "./assets/linkedin.svg"
    icont.src = "./assets/twitter.svg"
    iconcu.src = "./assets/curriculo-icon.svg"
    hamMenu.src = "./assets/hamburger-menu.svg"
    fotoP.src = "./assets/perfil-foto-alt.png"
  }
  
  isColorChanged = !isColorChanged;
});