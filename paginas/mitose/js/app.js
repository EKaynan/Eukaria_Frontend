const tx1= document.querySelector('.explicacao_1');
const tx2= document.querySelector('.explicacao_2');
const tx3= document.querySelector('.explicacao_3');
const tx4= document.querySelector('.explicacao_4');
const tx5= document.querySelector('.explicacao_5');
const tx6= document.querySelector('.explicacao_6');
const tx7= document.querySelector('.explicacao_7');

var status=1;
function texto_profase(){
	tx1.innerHTML= 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
	tx2.innerHTML= '';
	tx3.innerHTML= '';
	tx4.innerHTML= '';
	tx5.innerHTML= '';
	tx6.innerHTML= '';
	tx7.innerHTML= '';

}
function texto_prometafase(){
	tx1.innerHTML= 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
	tx2.innerHTML= '';
	tx3.innerHTML= '';
	tx4.innerHTML= '';
	tx5.innerHTML= '';
	tx6.innerHTML= '';
	tx7.innerHTML= '';

}
function texto_metafase(){
	tx1.innerHTML= 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
	tx2.innerHTML= '';
	tx3.innerHTML= '';
	tx4.innerHTML= '';
	tx5.innerHTML= '';
	tx6.innerHTML= '';
	tx7.innerHTML= '';

}
function texto_anafase(){
	tx1.innerHTML= 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
	tx2.innerHTML= '';
	tx3.innerHTML= '';
	tx4.innerHTML= '';
	tx5.innerHTML= '';
	tx6.innerHTML= '';
	tx7.innerHTML= '';

}
function texto_telofase(){
	tx1.innerHTML= 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
	tx2.innerHTML= '';
	tx3.innerHTML= '';
	tx4.innerHTML= '';
	tx5.innerHTML= '';
	tx6.innerHTML= '';
	tx7.innerHTML= '';

}



function profase(){
	condensar.play();
	condensar2.play();
	condensar3.play();
	cromossomos.play();
	desaparece.play();
	setTimeout(function(){ document.querySelector('.avan').onclick= prometafase;}, 1500);
	texto_profase();
	status=2;
}
function prometafase(){
	nucleo.play();
	centr1.play();
	centr2.play();
	mito_1.play();
	mito_2.play();
	setTimeout(function(){document.querySelector('.avan').onclick= metafase;}, 5500);
	texto_prometafase();
	status=3;
}
function metafase(){
	centralizar_1.play();
	centralizar_2.play();
	centralizar_3.play();
	cent_desp_1.play();
	cent_desp_2.play();
	deform_1.play();
	deform_2.play();
	setTimeout(function(){document.querySelector('.avan').onclick= anafase;}, 2500);
	texto_metafase();
	status=4;
}
function anafase(){
	mover_esq.play();
	mover_dir.play();
	separacao(true);
	setTimeout(function(){document.querySelector('.avan').onclick= formacao_filho;}, 5000);
	texto_anafase();
	status=5;
}
function formacao_filho(){
	novo_nucleo_esquerdo_1.play();
	novo_nucleo_esquerdo_2.play();
	novo_nucleo_esquerdo_3.play();
	novo_nucleo_direito_1.play();
	novo_nucleo_direito_2.play();
	desfazer_centriolo1.play();
	desfazer_centriolo2.play();
	desfazer_deform.play();
	formacao.play();
	texto_telofase();
	status=6;
}
document.querySelector('.avan').onclick= profase;

