function addMouseOver(elements){
	for (i=0; i<elements.length;i++){
		elements[i].addEventListener('mouseover', e=>{
			e.target.style.animation = 'hover 0.3s linear';
			e.target.style.color = 'var(--dark-accent)';
		})
		elements[i].addEventListener('mouseout', e=>{
			e.target.style.animation = 'unhover 0.15s linear';
			setTimeout(() => {e.target.style.color = 'var(--main-white)';}, 140);
		})
		elements[i].addEventListener('click', e=>{
			e.target.style.transform = scale(0.2);
		})
	}
}

addMouseOver(document.querySelectorAll('.navlink'));

const dropdown = {
	button: document.querySelector('#menu-button'),
	menu: document.querySelector('#dropdown-navbar'),
	hidden: true,
	show: function(){
		this.button.style.transitionDuration = '0.2s';
		this.button.style.transform = 'rotate(90deg)';
		this.menu.style.opacity = '1';
		this.menu.style.animation = 'drop 0.5s ease';
		this.hidden = false;
	},
	hide: function(){
		this.button.style.transitionDuration = '0.2s';
		this.button.style.transform = 'rotate(0deg)';
		this.menu.style.animation = 'fold 0.2s ease-in-out';
		setTimeout(() => {this.menu.style.opacity = '0';}, 190);
		this.hidden = true;
	}
};

dropdown.button.addEventListener('click', e=>{
    if (dropdown.hidden){
		dropdown.show();
    } else {
		dropdown.hide();
    }
})

window.addEventListener('resize', dropdown.hide());



