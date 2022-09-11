const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if(bar){
	bar.addEventListener('click',()=>{
		nav.classList.add('active');
	})
}

if(close){
	close.addEventListener('click',()=>{
		nav.classList.remove('active')
	})
}

function PriceChange(){
	if(count.selectedIndex == 1){
		document.getElementById("price").textContent = document.getElementById("50").value;
	}
	else if(count.selectedIndex == 2){
		document.getElementById("price").textContent = document.getElementById("100").value;
	}
	else if(count.selectedIndex == 3){
		document.getElementById("price").textContent = document.getElementById("200").value;
	}
	else {
		document.getElementById("price").textContent = document.getElementById("25").value;
	}
}

let carts = document.querySelectorAll('.add-cart');

let products = [
	{
		name: 'Bánh Bột Lọc',
		tag: 'banhbotloc',
		price: document.getElementById('price').textContent,
		inCart:	0
	},
	{	
		name: 'Chả Giò',
		tag: 'chagio',
		price: document.getElementById('price').textContent,
		inCart:	0
	}
];


for(let i=0; i < carts.length; i++){
	carts[i].addEventListener('click', ()=> {
		cartNumbers(products[i]);
	})
}

function onLoadCartNumbers(){
	let productNumbers = localStorage.getItem('cartNumbers');
	
	if(productNumbers){
		document.querySelector('.basket span').textContent = productNumbers;	
	}
	else{
		document.querySelector('.basket span').textContent = 0;
	}
}

function cartNumbers(product){
	let productNumbers = localStorage.getItem('cartNumbers');
	
	productNumbers= parseInt(productNumbers);
	
	if (productNumbers){
		localStorage.setItem('cartNumbers', productNumbers + 1);
		document.querySelector('.basket span').textContent = productNumbers + 1;
	}	else {
		localStorage.setItem('cartNumbers', 1);
		document.querySelector('.basket span').textContent = 1;
	}
	
	setItems(product);
	
}

function setItems(product){
	let cartItems = localStorage.getItem('productsInCart')
	cartItems = JSON.parse(cartItems);
	
	if(cartItems != null){
		if(cartItems[product.tag] == undefined){
			cartItems = {
				...cartItems,
				[product.tag]: product
			}
		}
		cartItems[product.tag].inCart += 1;
	} else {
		product.inCart = 1;
		cartItems = {
			[product.tag]: product
		}
	}
	
	localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

onLoadCartNumbers();


const count = document.querySelector('#count');

