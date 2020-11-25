
var menu = document.querySelector('.pris-none');
document.querySelector('.memu-nav').onclick = function () {
	document.removeChild(menu);
};











document.querySelector('#sort-asc').onclick = function () {
	mySort('data-price'); //находим кнопку по id и вешаем событие mySort по возрастанию
}
document.querySelector('#sort-desc').onclick = function () {
	mySortDesc('data-price'); //находим кнопку по id и вешаем событие mySortDesc по убыванию
}
document.querySelector('#sort-dos').onclick = function () {
	mySort('data-god'); //если надо по убыванию, то просто нужно mySortDesc
}

function mySort(sortType) { //(параметр)
	let card = document.querySelector('.card'); //находим массив по class (родитель)
	for (let i = 0; i < card.children.length; i++) {
		for (let j = i; j < card.children.length; j++) { //цикл чтобы перебрать children элементы массива card 
			if (+card.children[i].getAttribute(sortType) > +card.children[j].getAttribute(sortType)) {
				//сравниваем по параметру sortType 
				//если сравнение прошло успешно 
				replacedNode = card.replaceChild(card.children[j], card.children[i]);
				insertAfter(replacedNode, card.children[i]);
			}
		}
	}
}
function mySortDesc(sortType) {
	let card = document.querySelector('.card');
	for (let i = 0; i < card.children.length; i++) {
		for (let j = i; j < card.children.length; j++) {
			if (+card.children[i].getAttribute(sortType) < +card.children[j].getAttribute(sortType)) {
				replacedNode = card.replaceChild(card.children[j], card.children[i]);
				insertAfter(replacedNode, card.children[i]); //(1 новый элемент, 2 старый элемент)
			}
		}
	}
}

function insertAfter(elem, refElem) {
	return refElem.parentNode.insertBefore(elem, refElem.nextSibling); //функция коротая меняет местами элементы родителя в нужной последовательности
}