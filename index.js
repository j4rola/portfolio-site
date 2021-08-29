let ham = document.getElementById('ham');
let menu = document.getElementById('menu');
let closebtn = document.getElementById('closemenu'); 
let topbtn = document.getElementById('topbtn'); 
let projects = document.getElementById('proj'); 

let setUp = () => {menu.style.left= '-500vw'}

window.addEventListener('load', toggleMenu);

function toggleMenu (){
    if (menu.style.left === '-500vw') {menu.style.left = '1.5vw'}
    else {menu.style.left= '-500vw'}
}



//function scrollTop (){
//    window.scrollTo(0,0)
//}

let scrollTop = () => {
    window.scrollTo(0,0)
}

let hamevent = ham.addEventListener('click', toggleMenu); 


let topbtnevent = topbtn.addEventListener('click', scrollTop);

let skills = document.getElementById('skills');

let home = document.getElementById('home');

let portfolio = document.getElementById('port');

function scrollskills () {
    window.scrollTo(0, window.innerHeight);
}

function scrollabout () {
    window.scrollTo(0, window.innerHeight * 2); 
}

function scrollPort () {
    window.scrollTo(0, window.innerHeight * 3); 
}

let projEvent = projects.addEventListener('click', scrollskills)

let portEvent = portfolio.addEventListener('click', scrollPort);

let skillsevent = skills.addEventListener('click', scrollskills);

let homeevent = home.addEventListener('click', scrollTop);

let menuEvent = ham.addEventListener('page-load', toggleMenu); 

document.addEventListener('click', function(e) {
    let ham = document.getElementById('ham');
    let menu = document.getElementById('menu');
    if (event.target != menu && event.target != ham) {
        menu.style.left='-500vw'; 
    }
}) ;
