
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
