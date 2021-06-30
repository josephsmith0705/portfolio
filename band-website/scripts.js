var hidden = true;
function showDropdown() {
    document.getElementById("Dropdown").classList.toggle("show");
    if (hidden) {
        hidden = false;
    }
    else if (!hidden) {
        hidden = true;
    }
}

function hideDropdown() {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.containts('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
window.onclick = function (event) {
    hideDropdown()
}
window.onresize = function (event) {
    var x = document.getElementById("Dropdown");
    if (!hidden) {
        document.getElementById("Dropdown").classList.toggle("show");
        hidden = true;
    }
    else if (hidden) {
        hidden = true;
    }
}
