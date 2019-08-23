const botao_pausa= document.querySelector('.pausa_avancar');
var check=true;

function mudar_botao(){
	if(check){
		botao_pausa.src ="../../imgs/play_symbol.png";
		check=false;
	} else{
		botao_pausa.src="../../imgs/pausa_symbol.png";
		check=true;
	}
}

const membrana_caminho= "M373.921,253.041c-1.883-40.581,0.316-85.042-25.049-118.206 c-19.392-49.809-46.84-86.799-81.579-109.941c-15.543-13.395-44.256-22.113-68.5-24.324c-26.206-2.389-51.071,2.772-71.914,14.925 c-9.544,5.565-17.711,12.2-25.609,18.617c-4.673,3.797-4.228-0.363-13.61,10.611c-4.693,3.35-9.705,6.459-15.012,9.75 c-7.32,4.539-14.888,9.233-22.174,14.939h-0.001C18.347,71.499,3.5,134.999,0.87,165.077 c-3.587,35.538,22.117,106.359,20.862,104.138c8.092,14.72,18.854,27.072,28.35,37.972c15.286,17.542,8.418,31.812,56.836,56.471 c34.293,26.029,79.14,33.732,115.223,40.071c2.086,0.366,6.559-0.093,9.83-0.28c46.806-2.665,99.529-15.95,117.887-60.857 c24.379-20.093,13.5-20.49,17.309-30.966C374.612,291.153,374.687,269.564,373.921,253.041z";
const citoplasma_caminho= "M61.79,83.864c11.506-9.01,24.64-15.711,36.534-24.201c12.823-9.154,6.343-16.664,37.8-28.312 c36.818-21.469,85.522-14.811,120.992,8.818s46.884,29.83,74.65,101.324c13.956,35.846,27.234,57.506,23.818,112.398 c0.805,17.355,0.269,35.134-5.668,51.461c-3.425,9.417,5.961,16.314-14.658,26.113c-24.457,32.089-47.591,64.201-104.331,53.657 c-40.281,2.294-80.775-11.693-112.913-36.087c-28.68-5.702-37.339-34.681-54.094-53.909c-9.537-10.946-19.11-22.031-26.104-34.754 C7.879,205.909,0.526,109.999,61.79,83.864z";

const membrana_animacao= anime({
  targets: '.membrana',
  d: membrana_caminho,
  easing: 'linear',
  duration: 1300,
  direction: 'alternate',
  loop: true,
  autoplay: true
});
const citoplasma_animacao= anime({
  targets: '.citoplasma',
  d: citoplasma_caminho,
  width: '10%',
  easing: 'linear',
  duration: 1300,
  direction: 'alternate',
  loop: true,
  autoplay: true
});

function start(){
  mudar_botao();
  membrana_animacao.play();
  citoplasma_animacao.play();
  botao_pausa.onclick= stop;
}

function stop(){
  mudar_botao();
  membrana_animacao.pause();
  citoplasma_animacao.pause();
  botao_pausa.onclick= start;
}

botao_pausa.onclick= start;

// anime({
//   targets: '.mitocondria_1',
//   translateX: path('x'),
//   translateY: path('y'),
//   // rotate: path('angle'),
//   easing: 'easeInOutQuad',
//   duration: 5000,
//   direction: 'alternate',
//   loop: true
// })