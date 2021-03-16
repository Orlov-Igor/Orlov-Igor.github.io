const menu = document.querySelector('.menu');
const hamburger = document.querySelector('.hamburger');
const menuItem = document.querySelectorAll('.menu_item')

hamburger.addEventListener('click', (e) => {
   menu.classList.toggle('menu_active');
   hamburger.classList.toggle('hamburger_active');
})

menuItem.forEach(item => {
	item.addEventListener('click', (e) => {
		menu.classList.remove('menu_active');
		hamburger.classList.remove('hamburger_active');
	})
})

