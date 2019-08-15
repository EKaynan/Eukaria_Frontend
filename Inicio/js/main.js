

var aberto=false;

function abrir() { 
	anime({
		targets: '.symbol',
		duration: 100,
		easing: 'linear',
		rotate: '180deg'
	});

	anime({
		targets: '.top',
		duration: 100,
		easing: 'linear',
		opacity: 0
	})
	anime({
		targets: '.bottom',
		easing: 'linear',
		duration: 100,
		opacity: 0
	})

	anime({
		targets: '.mid',
		easing: 'linear',
		width: '15px',
		height: '15px',
		borderRadius: '50%',
		// backgroundColor: '#27ae60',
		duration: 100
	});
	aberto=true;
};
function fechar() { 
	anime({
		targets: '.symbol',
		duration: 100,
		easing: 'linear',
		rotate: '0deg'
	});
	anime({
		targets: '.top',
		duration: 100,
		easing: 'linear',
		opacity: 1
	})
	anime({
		targets: '.bottom',
		easing: 'linear',
		duration: 100,
		opacity: 1
	})

	anime({
		targets: '.mid',
		easing: 'linear',
		width: '30px',
		height: '4px',
		borderRadius: '0%',
		// backgroundCoFlor: '#000000',
		duration: 100
	});
	aberto=false;
};
function expandir(){
	anime({
		targets:'.menu',
		easing: 'linear',
		width: '300px',
		height: '400px',
		borderRadius: '5%',
		duration:100
	});
	let links=document.getElementsByClassName('link');
	let cont= 0;
	while(cont<links.length){
		links[cont].style.color= '#FFFFFF';
		cont++
	}
}
function diminuir(){
	anime({
		targets:'.menu',
		easing: 'linear',
		height: '60px',
		width: '60px',
		borderRadius: '50%',
		duration:100
	});
	let links=document.getElementsByClassName('link');
	let cont= 0;
	while(cont<links.length){
		links[cont].style.color= '#343252';
		cont++
	}
}

function menu(){
	if(aberto){
		fechar();
		diminuir();
	} else {
		abrir();
		expandir();
	}
}

document.querySelector('.hamburguer').onclick= menu;