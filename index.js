var burgerMenu = document.getElementById('burger-menu');

var overlay = document.getElementById('menu');

burgerMenu.addEventListener('click', function() {
    console.log(this);
    this.classList.toggle("close");
    overlay.classList.toggle("overlay");
});

// links = ["/", "pages/pokedex.html", "pages/collections.html", "pages/contact.html"];
// let nav = document.createElement('nav');
// let ul = document.createElement('ul');

// document.querySelector('header').innerHTML = nav.append(ul)

// window.addEventListener('load', () => {
//     document.querySelector('header').innerHTML = `
//     <img src="images/logo-pokemon2.png" alt="logo-pokemon" id="logoNavBar">
//         <nav>
//             <a href="index.html">Accueil</a>
//             <a href="pages/pokedex.html">Pokedex</a>
//             <a href="pages/collections.html">Collections</a>
//             <a href="pages/contact.html">Contact</a>
//         </nav>

//         <div id="burger-menu">
//             <span></span>
//         </div>
    
//         <div id="menu">
//             <ul>
//               <li><a href="index.html">Accueil</a></li>
//               <li><a href="pages/pokedex.html">Pokedex</a></li>
//               <li><a href="pages/collections.html">Collections</a></li>
//               <li><a href="pages/contact.html">Contact</a></li>
//             </ul>
//         </div>`
// })