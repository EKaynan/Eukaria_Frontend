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

function menu(){
	if(aberto){
		fechar();
	} else {
		abrir();
	}
}

// document.querySelector('.hamburguer').onclick= menu;