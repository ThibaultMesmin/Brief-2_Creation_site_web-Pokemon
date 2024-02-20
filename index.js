window.addEventListener('load', () => {
    document.querySelector('header').innerHTML += `
        <nav>
            <a href="/index.html">Accueil</a>
            <a href="pages/histoire.html">Histoire</a>
            <a href="pages/pokedex.html">Pokedex</a>
            <a href="pages/collections.html">Collections</a>
            <a href="pages/contact.html">Contact</a>
        </nav>

        <div id="burger-menu">
            <span></span>
        </div>
    
        <div id="menu">
            <ul>
              <li><a href="/index.html">Accueil</a></li>
              <li><a href="pages/histoire.html">Histoire</a></li>
              <li><a href="pages/pokedex.html">Pokedex</a></li>
              <li><a href="pages/collections.html">Collections</a></li>
              <li><a href="pages/contact.html">Contact</a></li>
            </ul>
        </div>`
})

setTimeout(() => {
    let burgerMenu = document.getElementById('burger-menu');
    
    let overlay = document.getElementById('menu');
    
    burgerMenu.addEventListener('click', function() {
        console.log(this);
        this.classList.toggle("close");
        overlay.classList.toggle("overlay");
    });
}, 2000);
