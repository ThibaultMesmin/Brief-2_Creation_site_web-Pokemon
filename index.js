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