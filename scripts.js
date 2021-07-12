const dropdown = {
    button: document.querySelector('#menu-button'),
    menu: document.querySelector('#dropdown-navbar'),
    hidden: true,
}

dropdown.button.addEventListener('click', e=>{
    if (dropdown.hidden){
        dropdown.button.style.transitionDuration = '0.5s';
        dropdown.button.style.transform = 'rotate(90deg)';
        dropdown.menu.style.opacity = '1';
        dropdown.menu.style.animation = 'drop 0.3s ease';
        dropdown.hidden = false;
    } else {
        dropdown.button.style.transform = 'rotate(0deg)';
        dropdown.menu.style.animation = 'fold 0.3s ease';
        setTimeout(() => {dropdown.menu.style.opacity = '0';}, 300);
        dropdown.hidden = true;
    }
})

const tiles = document.getElementsByClassName('project-tile');
for (i=0; i<tiles.length; i++){
    tiles[i].style.transitionDuration = '0.5s';
}