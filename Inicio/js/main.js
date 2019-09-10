const seta_1=document.querySelector('.s1');
const seta_2=document.querySelector('.s2');
const seta_3=document.querySelector('.s3');

anime({
	targets: '.s1',
	opacity: 0.4,
	direction: 'alternate',
	duration: 500,
	delay: 200,
	endDelay: 300,
	loop: true
});

anime({
	targets: '.s2',
	opacity: 0.7,
	direction: 'alternate',
	duration: 500,
	delay: 250,
	endDelay: 250,
	loop: true
});

anime({
	targets: '.s3',
	opacity: 1,
	direction: 'alternate',
	duration: 500,
	delay: 300,
	endDelay: 200,
	loop: true
});

$(".scroll").click(function(){

$('html, body').animate({
        scrollTop: $(".apresentacao").offset().top
    }, 500);
});

function ir_CA(){
	window.location.href= 'Eukaria/paginas/celula_animal/index.html'; 
	// alert('a');
}

function ir_CV(){
	window.location.href= 'Eukaria/paginas/celula_vegetal/index.html'; 
}

document.querySelector('.animal').onclick= ir_CA;
document.querySelector('.vegetal').onclick= ir_CV;