
// évènement ajouté au chargement de la page avec ajout direct d'html dans le DOM (navbar + menu burger sur toutes les pages)
window.addEventListener('load', () => {
    document.querySelector('header').innerHTML += `
        <nav>
            <a href="/index.html">Accueil</a>
            <a href="/pages/histoire.html">Histoire</a>
            <a href="/pages/pokedex.html">Pokedex</a>
            <a href="/pages/collections.html">Collections</a>
            <a href="/pages/contact.html">Contact</a>
        </nav>

        <div id="burger-menu">
            <span></span>
        </div>
    
        <div id="menu">
            <ul>
              <li><a href="/index.html">Accueil</a></li>
              <li><a href="/pages/histoire.html">Histoire</a></li>
              <li><a href="/pages/pokedex.html">Pokedex</a></li>
              <li><a href="/pages/collections.html">Collections</a></li>
              <li><a href="/pages/contact.html">Contact</a></li>
            </ul>
        </div>`
})

// évènement ajouté au chargement de la page avec ajout direct d'html dans le DOM (footer logo réseaux sociaux)
window.addEventListener('load', () => {
    document.querySelector('footer').innerHTML += `
    <section class="footer">
        <div class="reseau">
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-youtube"></i>
        </div>
        <div id="site-by">
        </div>
    </section>`;
});

// setTimeOut pour que mon code puisse être lu après le chargement de la page
setTimeout(() => {
    // récupère les éléments injectés du DOM
    let burgerMenu = document.getElementById('burger-menu');
    let overlay = document.getElementById('menu');
    
    // évènement sur le menu burger pour qu'au clic il ouvre la liste du menu (voir css media queries)
    burgerMenu.addEventListener('click', function() {
        // this = ma div burgermenu
        this.classList.toggle("close");
        overlay.classList.toggle("overlay");
    });
}, 2000);


// Page Contact
// récupère button, div popup et span avec icone pour closepopup
let showPopup = document.querySelector(".showPopup");
let popup = document.getElementById('popup');
let closePopup = document.getElementById("closePopup");


// ####### CAROUSEL ########

let items = document.querySelectorAll('.slider .item');
    let next = document.getElementById('next');
    let prev = document.getElementById('prev');
    
    let active = 3;
    function loadShow(){
        let stt = 0;
        items[active].style.transform = `none`;
        items[active].style.zIndex = 1;
        items[active].style.filter = 'none';
        items[active].style.opacity = 1;
        for(var i = active + 1; i < items.length; i++){
            stt++;
            items[i].style.transform = `translateX(${120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(-1deg)`;
            items[i].style.zIndex = -stt;
            items[i].style.filter = 'blur(5px)';
            items[i].style.opacity = stt > 2 ? 0 : 0.6;
        }
        stt = 0;
        for(var i = active - 1; i >= 0; i--){
            stt++;
            items[i].style.transform = `translateX(${-120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(1deg)`;
            items[i].style.zIndex = -stt;
            items[i].style.filter = 'blur(5px)';
            items[i].style.opacity = stt > 2 ? 0 : 0.6;
        }
    }
    loadShow();
    next.onclick = function(){
        active = active + 1 < items.length ? active + 1 : active;
        loadShow();
    }
    prev.onclick = function(){
        active = active - 1 >= 0 ? active - 1 : active;
        loadShow();
    }
    

// ajout event, au clic la popup s'affiche et le formulaire se vide
showPopup.addEventListener("click", function() {
    popup.style.display = "block";
    resetForm();
})

// ajout event sur icone X, au clic popup disparaît
closePopup.addEventListener('click', function() {
    popup.style.display = "none";
})

// au clic n'importe où sur l'écran, la popup disparaît
window.addEventListener('click', function(event) {
    if(event.target == popup){
        popup.style.display = "none";
    }
})

// function qui récupère le formulaire et le vide
const resetForm = function() {
    document.getElementById('form').reset();
}
