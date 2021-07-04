const dropdownButton = document.querySelector('#menu-button');
const dropdown = document.querySelector('#dropdown-navbar');
let hidden = true;
dropdownButton.addEventListener('click', e=>{
    if (hidden === true){
        dropdownButton.style.WebkitTransitionDuration='0.5s';
        dropdownButton.style.WebkitTransform = 'rotate(90deg)';
        dropdown.style.opacity = '1';
        dropdown.style.animation = "drop 0.3s ease";
        hidden = false;
    } else{
        dropdownButton.style.WebkitTransitionDuration='0.5s';
        dropdownButton.style.WebkitTransform = 'rotate(0deg)';   
        dropdown.style.animation = "fold 0.3s ease";
        dropdown.style.opacity = '0';
        hidden = true;     
    }
})