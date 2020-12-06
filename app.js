const menu = document.querySelector('.memu-nav');
const prise = document.querySelector('.nav-pris');
const img = document.querySelector('#price');

console.log(prise);

menu.addEventListener('click', function () {
	prise.classList.toggle('pris-none');
	img.classList.toggle('btnRotete');
});