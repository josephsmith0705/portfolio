const dropdownButton = document.querySelector('#menu-button');
const dropdown = document.querySelector('#dropdown-navbar');
let hidden = true;
dropdownButton.addEventListener('click', e=>{
    if (hidden === true){
        dropdownButton.style.WebkitTransitionDuration='0.5s';
        dropdownButton.style.WebkitTransform = 'rotate(90deg)';
        dropdown.style.display = 'block';
        hidden = false;
    } else{
        dropdownButton.style.WebkitTransitionDuration='0.5s';
        dropdownButton.style.WebkitTransform = 'rotate(0deg)';   
        dropdown.style.display = 'none';
        hidden = true;     
    }
})