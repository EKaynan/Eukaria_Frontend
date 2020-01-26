
var aberto=false;

function abrir() { 
	anime({
		targets: '.hamburguer',
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
		width: '10px',
		height: '10px',
		borderRadius: '50%',
		// backgroundColor: '#27ae60',
		duration: 100
	});
	menu(aberto);
	aberto=true;
	document.querySelector('.mid').onclick=fechar;
	document.querySelector('.top').onclick=fechar;
	document.querySelector('.bottom').onclick=fechar;
};
function fechar() { 
	anime({
		targets: '.hamburguer',
		duration: 100,
		easing: 'linear',
		rotate: '-180deg'
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
		width: '27px',
		height: '3px',
		borderRadius: '0%',
		// backgroundColor: '#000000',
		duration: 100
	});
	menu(aberto);
	aberto=false;
	document.querySelector('.mid').onclick=abrir;
	document.querySelector('.top').onclick=abrir;
	document.querySelector('.bottom').onclick=abrir;
};

function menu(status){
	let menu=document.querySelector('.menu');
	if(status){
		anime({
			targets: menu,
			right: '-70%',
			easing: 'easeInOutQuad',
			duration: 500
		});
		setTimeout(function(){
			(menu.style.display='none')
		}, 500);
	} else {
		anime({
			targets: menu,
			right: '0',
			easing: 'easeInOutQuad',
			duration: 500
		});
		menu.style.display='flex';
	}
}

document.querySelector('.mid').onclick=abrir;
document.querySelector('.top').onclick=abrir;
document.querySelector('.bottom').onclick=abrir;

function menu(status){
	let menu=document.querySelector('.menu');
	if(status){
		anime({
			targets: menu,
			right: '-70%',
			easing: 'easeInOutQuad',
			duration: 500
		});
		setTimeout(function(){
			(menu.style.display='none')
		}, 500);
	} else {
		anime({
			targets: menu,
			right: '0',
			easing: 'easeInOutQuad',
			duration: 500
		});
		menu.style.display='flex';
	}
}

document.querySelector('.mid').onclick=abrir;
document.querySelector('.top').onclick=abrir;
document.querySelector('.bottom').onclick=abrir;
