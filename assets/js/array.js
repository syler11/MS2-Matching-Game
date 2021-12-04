/* Animal card array */

const animalCards = [
    { name: 'dog', img: './assets/images/dog.png', },
    { name: 'dog', img: './assets/images/dog.png', },
    { name: 'cat', img: './assets/images/cat.png', },
    { name: 'cat', img: './assets/images/cat.png', },
    { name: 'turtle', img: './assets/images/turtle.png', },
    { name: 'turtle', img: './assets/images/turtle.png', },
    { name: 'lion', img: './assets/images/lion.png', },
    { name: 'lion', img: './assets/images/lion.png', },
    { name: 'elephant', img: './assets/images/elephant.png', },
    { name: 'elephant', img: './assets/images/elephant.png', },
    { name: 'giraffe', img: './assets/images/giraffe.png', },
    { name: 'giraffe', img: './assets/images/giraffe.png', },
    { name: 'kangaroo', img: './assets/images/kangaroo.png', },
    { name: 'kangaroo', img: './assets/images/kangaroo.png', },
    { name: 'frog', img: './assets/images/frog.png', },
    { name: 'frog', img: './assets/images/frog.png', },
    { name: 'monkey', img: './assets/images/monkey.png', },
    { name: 'monkey', img: './assets/images/monkey.png', },

];

/* function added to avoid two a href link on the same page - Credit to www.stackoverflow.com */
document.getElementById("contactPage").addEventListener("click", gotoContactPage);
    
function gotoContactPage() {
       window.location.assign("https://syler11.github.io/MS2-Matching-Game/contact.html");
    }