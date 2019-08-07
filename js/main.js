anime({
	targets: '.botao',
	duration: 2000,
    easing: 'easeInOutSine',
	rotate: 360
});

anime({
	targets: '.botao',
	delay: 3000,
	width: '200px',
	height: '50px'
});

function abrir() {
	window.location.href = 'Inicio/pagina_inicial.html';
}