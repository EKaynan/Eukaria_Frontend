var aberto=false;

var seq01=true;
var seq02=false;
var seq03=false;
var seq04=false;
var seq05=false;
var seq06=false;
var seq07=false;
var seq08=false;
var seq09=false;
var seq10=false;




function avancar(){
	if(seq01){
		celula_mito();
		texto_mitocondria();
		seq01=false;
		seq02=true;
	} else if(seq02) {
		mito_complex();
		texto_complex();
		seq02=false;
		seq03=true;
	} else if(seq03){
		complex_reticul();
		texto_reticul();
		seq03=false;
		seq04=true;
	} else if(seq04){
		reticul_riboss();
		texto_riboss();
		seq04=false;
		seq05=true;
	} else if(seq05){
		riboss_lissos();
		texto_lissos();
		seq05=false;
		seq06=true;
	} else if(seq06){
		lissos_peroxiss();
		texto_peroxiss();
		seq06=false;
		seq07=true;
	} else if(seq07){
		peroxiss_centri();
		texto_centri();
		seq07=false;
		seq08=true;
	} else if(seq08){
		centri_membr();
		texto_membr();
		seq08=false;
		seq09=true;
	} else if(seq09){
		membr_cito();
		texto_cito();
		seq09=false;
		seq10=true;
	} else if(seq10){
		cito_celula();
		texto_celula();
		seq10=false;
		seq01=true;
	}
}




function voltar(){
	if(seq01){
		celula_cito();
		texto_cito();
		seq01=false;
		seq10=true;
	} else if(seq10) {
		cito_membr();
		texto_membr();
		seq10=false;
		seq09=true
	} else if(seq09){
		membr_centri();
		texto_centri();
		seq09=false;
		seq08=true;
	} else if(seq08){
		centri_peroxiss();
		texto_peroxiss();
		seq08=false;
		seq07=true;
	} else if(seq07){
		peroxiss_lissos();
		texto_lissos();
		seq07=false;
		seq06=true;
	} else if(seq06){
		lissos_riboss();
		texto_riboss();
		seq06=false;
		seq05=true;
	} else if(seq05){
		riboss_reticul();
		texto_reticul();
		seq05=false;
		seq04=true;
	} else if(seq04){
		reticul_complex();
		texto_complex();
		seq04=false;
		seq03=true;
	} else if(seq03){
		complex_mito();
		texto_mitocondria();
		seq03=false;
		seq02=true;
	} else {
		mito_celula();
		texto_celula();
		seq02=false;
		seq01=true;
	}
}


function troca_1(){
	var sec1=document.querySelector('.animacao');
	var sec2=document.querySelector('.completo');
	sec1.style.display='none';
	sec2.style.display='block';
}
function troca_2(){
	var sec1=document.querySelector('.animacao');
	var sec2=document.querySelector('.completo');
	sec2.style.display='none';
	sec1.style.display='flex';
}

document.querySelector('.avan').onclick= avancar;
document.querySelector('.voltar').onclick= voltar;


function trocar(element){
	let indicador1=document.querySelector('.i1');
	let indicador2=document.querySelector('.i2');

	if(element.id=='anim'){
		let element2= document.querySelector('.op1');
		document.querySelector('.op1').setAttribute('onclick', 'trocar(this)');
		anime({
			targets: element,
			color:'#78c29c',
			duration: 300
		});
		anime({
			targets: indicador1,
			background:'#171127',
			width: '45%',
			borderRadius: 0,
			height: '3px',
			duration: 300,
			easing: 'easeInOutQuad'
		});
		anime({
			targets: element2,
			duration: 300,
			color:'#171127'
		});
		anime({
			targets: indicador2,
			background: '#78c29c',
			borderRadius: '50%',
			height: '10px',
			width: '10px',
			duration: 300,
			easing: 'easeInOutQuad'
		});
		troca_1();
	} else {
		let element2= document.querySelector('.op2');
		document.querySelector('.op2').setAttribute('onclick', 'trocar(this)');
		anime({
			targets: element,
			color:'#78c29c',
			duration: 300
		});
		anime({
			targets: indicador2,
			background:'#171127',
			width: '50%',
			borderRadius: 0,
			height: '3px',
			duration: 300,
			easing: 'easeInOutQuad'
		});
		anime({
			targets: element2,
			duration: 300,
			color:'#171127'
		});
		anime({
			targets: indicador1,
			background: '#78c29c',
			borderRadius: '50%',
			height: '10px',
			width: '10px',
			duration: 300,
			easing: 'easeInOutQuad'
		});	
		troca_2();
	}
}
document.querySelector('.op2').setAttribute('onclick', 'trocar(this)');

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
	aberto=false;
	document.querySelector('.mid').onclick=abrir;
	document.querySelector('.top').onclick=abrir;
	document.querySelector('.bottom').onclick=abrir;
};

document.querySelector('.mid').onclick=abrir;
document.querySelector('.top').onclick=abrir;
document.querySelector('.bottom').onclick=abrir;