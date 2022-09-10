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

let carts = document.querySelectorAll('.add-cart');

for(let i=0; i < carts.length; i++){
	carts[i].addEventListener('click', ()=> {
		cartNumbers();
	})
}

function cartNumbers(){
	localStorage.setItem('cartNumbers', 1);
}