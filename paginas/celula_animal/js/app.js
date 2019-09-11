const celula=document.querySelector('.celula');
const mito=document.querySelector('.mito');
const complex_golgi=document.querySelector('.complex_golgi');
const reticulo=document.querySelector('.reticulo');
const riboss=document.querySelector('.riboss');
const lissos=document.querySelector('.lissos');
const peroxiss=document.querySelector('.peroxiss');
const centri=document.querySelector('.centri');
const membr=document.querySelector('.membr');
const cito=document.querySelector('.cito'); 

const tx1= document.querySelector('.explicacao_1');
const tx2= document.querySelector('.explicacao_2');
const tx3= document.querySelector('.explicacao_3');
const tx4= document.querySelector('.explicacao_4');
const tx5= document.querySelector('.explicacao_5');
const tx6= document.querySelector('.explicacao_6');
const tx7= document.querySelector('.explicacao_7');

function muda(){
	// anime({
	// 	targets: celula,
	// 	// position: 'absolute',
	// 	translateX: [
	// 		{value:'-100px',
	// 		duration:300},
	// 		{value:'5%'}
	// 	],
	// 	opacity:{
	// 		value:0,
	// 		duration:200
	// 	},
	// 	easing: 'linear'
	// });
	// anime({
	// 	targets: element,
	// 	// position: 'absolute',
	// 	translateX: '-5%',
	// 	opacity:1,
	// 	duration: 300,
	// 	easing: 'linear'
	// });
	alert('a')
}
var allStates = $("svg.cell > *");

allStates.on("click", function() {
  
  alert('a')
  
});

function celula_mito(){
	anime({
		targets: celula,
		// position: 'absolute',
		translateX: [
			{value:'-100px',
			duration:300},
			{value:'5%'}
		],
		opacity:{
			value:0,
			duration:200
		},
		easing: 'linear'
	});
	anime({
		targets: mito,
		// position: 'absolute',
		translateX: '-5%',
		opacity:1,
		duration: 300,
		easing: 'linear'
	});
}
function mito_complex(){
	anime({
		targets: mito,
		// position: 'absolute',
		translateX: [
			{value:'-100px',
			duration:300},
			{value:'5%'}
		],
		opacity:{
			value:0,
			duration:200
		},
		easing: 'linear'
	});
	anime({
		targets: complex_golgi,
		// position: 'absolute',
		translateX: '-5%',
		opacity:1,
		duration: 300,
		easing: 'linear'
	});
}
function complex_reticul(){
	anime({
		targets: complex_golgi,
		// position: 'absolute',
		translateX: [
			{value:'-100px',
			duration:300},
			{value:'5%'}
		],
		opacity:{
			value:0,
			duration:200
		},
		easing: 'linear'
	});
	anime({
		targets: reticulo,
		// position: 'absolute',
		translateX: '-5%',
		opacity:1,
		duration: 300,
		easing: 'linear'
	});
}
function reticul_riboss(){
	anime({
		targets: reticulo,
		// position: 'absolute',
		translateX: [
			{value:'-100px',
			duration:300},
			{value:'5%'}
		],
		opacity:{
			value:0,
			duration:200
		},
		easing: 'linear'
	});
	anime({
		targets: riboss,
		// position: 'absolute',
		translateX: '-5%',
		opacity:1,
		duration: 300,
		easing: 'linear'
	});
}
function riboss_lissos(){
	anime({
		targets: riboss,
		// position: 'absolute',
		translateX: [
			{value:'-100px',
			duration:300},
			{value:'5%'}
		],
		opacity:{
			value:0,
			duration:200
		},
		easing: 'linear'
	});
	anime({
		targets: lissos,
		// position: 'absolute',
		translateX: '-5%',
		opacity:1,
		duration: 300,
		easing: 'linear'
	});
}
function lissos_peroxiss(){
	anime({
		targets: lissos,
		// position: 'absolute',
		translateX: [
			{value:'-100px',
			duration:300},
			{value:'5%'}
		],
		opacity:{
			value:0,
			duration:200
		},
		easing: 'linear'
	});
	anime({
		targets: peroxiss,
		// position: 'absolute',
		translateX: '-5%',
		opacity:1,
		duration: 300,
		easing: 'linear'
	});
}
function peroxiss_centri(){
	anime({
		targets: peroxiss,
		// position: 'absolute',
		translateX: [
			{value:'-100px',
			duration:300},
			{value:'5%'}
		],
		opacity:{
			value:0,
			duration:200
		},
		easing: 'linear'
	});
	anime({
		targets: centri,
		// position: 'absolute',
		translateX: '-5%',
		opacity:1,
		duration: 300,
		easing: 'linear'
	});
}
function centri_membr(){
	anime({
		targets: centri,
		// position: 'absolute',
		translateX: [
			{value:'-100px',
			duration:300},
			{value:'5%'}
		],
		opacity:{
			value:0,
			duration:200
		},
		easing: 'linear'
	});
	anime({
		targets: membr,
		// position: 'absolute',
		translateX: '-5%',
		opacity:1,
		duration: 300,
		easing: 'linear'
	});
}
function membr_cito(){
	anime({
		targets: membr,
		// position: 'absolute',
		translateX: [
			{value:'-100px',
			duration:300},
			{value:'5%'}
		],
		opacity:{
			value:0,
			duration:200
		},
		easing: 'linear'
	});
	anime({
		targets: cito,
		// position: 'absolute',
		translateX: '-5%',
		opacity:1,
		duration: 300,
		easing: 'linear'
	});
}
function cito_celula(){
	anime({
		targets: cito,
		// position: 'absolute',
		translateX: [
			{value:'-100px',
			duration:300},
			{value:'5%'}
		],
		opacity:{
			value:0,
			duration:200
		},
		easing: 'linear'
	});
	anime({
		targets: celula,
		// position: 'absolute',
		translateX: '0px',
		opacity:1,
		duration: 300,
		easing: 'linear'
	});
}

//voltar
function celula_cito(){
	anime({
		targets: celula,
		// position: 'absolute',
		translateX: [
			{value:'10%'},
			{value:'5%',
			duration: 300
			}
		],
		opacity:{
			value:0,
			duration:200
		},
		easing: 'linear'
	});
	anime({
		targets: cito,
		// position: 'absolute',
		translateX: [
			{value:'-10%',
			duration:10},
			{value:'-5%',
			duration: 300}
		],
		opacity:{
			delay:10,
			value:1,
			duration: 200
		},
		easing: 'linear'
	});
}
function mito_celula(){
	anime({
		targets: mito,
		// position: 'absolute',
		translateX: [
			{value:'100px'},
			{value:'0px',
			duration: 300
			}
		],
		opacity:{
			value:0,
			duration:200
		},
		easing: 'linear'
	});
	anime({
		targets: celula,
		// position: 'absolute',
		translateX: [
			{value:'-100px',
			duration:10},
			{value:'0px',
			duration: 300}
		],
		opacity:{
			delay:10,
			value:1,
			duration: 200
		},
		easing: 'linear'
	});
}
function complex_mito(){
	anime({
		targets: complex_golgi,
		// position: 'absolute',
		translateX: [
			{value:'100px'},
			{value:'5%',
			duration: 300
			}
		],
		opacity:{
			value:0,
			duration:200
		},
		easing: 'linear'
	});
	anime({
		targets: mito,
		// position: 'absolute',
		translateX: [
			{value:'-10%',
			duration:10},
			{value:'-5%',
			duration: 300}
		],
		opacity:{
			delay:10,
			value:1,
			duration: 200
		},
		easing: 'linear'
	});
}
function reticul_complex(){
	anime({
		targets: reticulo,
		// position: 'absolute',
		translateX: [
			{value:'10%'},
			{value:'5%',
			duration: 300
			}
		],
		opacity:{
			value:0,
			duration:200
		},
		easing: 'linear'
	});
	anime({
		targets: complex_golgi,
		// position: 'absolute',
		translateX: [
			{value:'-10%',
			duration:10},
			{value:'-5%',
			duration: 300}
		],
		opacity:{
			delay:10,
			value:1,
			duration: 200
		},
		easing: 'linear'
	});
}
function riboss_reticul(){
	anime({
		targets: riboss,
		// position: 'absolute',
		translateX: [
			{value:'10%'},
			{value:'5%',
			duration: 300
			}
		],
		opacity:{
			value:0,
			duration:200
		},
		easing: 'linear'
	});
	anime({
		targets: reticulo,
		// position: 'absolute',
		translateX: [
			{value:'-10%',
			duration:10},
			{value:'-5%',
			duration: 300}
		],
		opacity:{
			delay:10,
			value:1,
			duration: 200
		},
		easing: 'linear'
	});
}
function lissos_riboss(){
	anime({
		targets: lissos,
		// position: 'absolute',
		translateX: [
			{value:'10%'},
			{value:'5%',
			duration: 300
			}
		],
		opacity:{
			value:0,
			duration:200
		},
		easing: 'linear'
	});
	anime({
		targets: riboss,
		// position: 'absolute',
		translateX: [
			{value:'-10%',
			duration:10},
			{value:'-5%',
			duration: 300}
		],
		opacity:{
			delay:10,
			value:1,
			duration: 200
		},
		easing: 'linear'
	});
}
function peroxiss_lissos(){
	anime({
		targets: peroxiss,
		// position: 'absolute',
		translateX: [
			{value:'10%'},
			{value:'5%',
			duration: 300
			}
		],
		opacity:{
			value:0,
			duration:200
		},
		easing: 'linear'
	});
	anime({
		targets: lissos,
		// position: 'absolute',
		translateX: [
			{value:'-10%',
			duration:10},
			{value:'-5%',
			duration: 300}
		],
		opacity:{
			delay:10,
			value:1,
			duration: 200
		},
		easing: 'linear'
	});
}
function centri_peroxiss(){
	anime({
		targets: centri,
		// position: 'absolute',
		translateX: [
			{value:'10%'},
			{value:'5%',
			duration: 300
			}
		],
		opacity:{
			value:0,
			duration:200
		},
		easing: 'linear'
	});
	anime({
		targets: peroxiss,
		// position: 'absolute',
		translateX: [
			{value:'-10%',
			duration:10},
			{value:'-5%',
			duration: 300}
		],
		opacity:{
			delay:10,
			value:1,
			duration: 200
		},
		easing: 'linear'
	});
}
function membr_centri(){
	anime({
		targets: membr,
		// position: 'absolute',
		translateX: [
			{value:'10%'},
			{value:'5%',
			duration: 300
			}
		],
		opacity:{
			value:0,
			duration:200
		},
		easing: 'linear'
	});
	anime({
		targets: centri,
		// position: 'absolute',
		translateX: [
			{value:'-10%',
			duration:10},
			{value:'-5%',
			duration: 300}
		],
		opacity:{
			delay:10,
			value:1,
			duration: 200
		},
		easing: 'linear'
	});
}
function cito_membr(){
	anime({
		targets: cito,
		// position: 'absolute',
		translateX: [
			{value:'10%'},
			{value:'5%',
			duration: 300
			}
		],
		opacity:{
			value:0,
			duration:200
		},
		easing: 'linear'
	});
	anime({
		targets: membr,
		// position: 'absolute',
		translateX: [
			{value:'-10%',
			duration:10},
			{value:'-5%',
			duration: 300}
		],
		opacity:{
			delay:10,
			value:1,
			duration: 200
		},
		easing: 'linear'
	});
}

//Textos

function texto_mitocondria(){
	tx1.innerHTML= '';
	tx2.innerHTML= '';
	tx3.innerHTML= '';
	tx4.innerHTML= '';
	tx5.innerHTML= '';
	tx6.innerHTML= '';
	tx7.innerHTML= '';

	tx1.innerHTML= 'I, I wish you could swim Like the dolphins Like dolphins can swim Though nothing, nothing will keep us together We can beat them, forever and ever Oh, we can be heroes just for one day'


	tx2.innerHTML= 'I, I will be King And you, you will be Queen Though nothing will drive them away We can be heroes just for one day We can be us just for one day';
	tx3.innerHTML= ' I, I can remember (I remember) Standing by the wall (By the wall) And the guns, shot above our heads (Over our heads) And we kissed, as though nothing could fall (Nothing could fall) And the shame, was on the other side';
	tx4.innerHTML= ' Oh, we can beat them, forever and ever Then we could be heroes just for one day We can be heroes We can be heroes We can be heroes just for one day We can be heroes';
}

function texto_complex(){
	tx1.innerHTML= '';
	tx2.innerHTML= '';
	tx3.innerHTML= '';
	tx4.innerHTML= '';
	tx5.innerHTML= '';
	tx6.innerHTML= '';
	tx7.innerHTML= '';

	tx1.innerHTML= "Ground Control to Major Tom Ground Control to Major Tom Take your protein pills and put your helmet on Ground Control to Major Tom Commencing countdown, engines on Check ignition and may God's love be with you Ten, Nine, Eight, Seven, Six, Five, Four, Three, Two, One, Lift off";
	tx2.innerHTML= "This is Ground Control to Major Tom You`ve really made the grade And the papers want to know whose shirts you wear Now it's time to leave the capsule if you dare";
	tx3.innerHTML= "This is Major Tom to Ground Control I`m stepping through the door A`d I'm floating in a most peculiar way A`d the stars look very different today F`r here A` I sitting in a tin can F`r above the world P`anet Earth is blue A`d there's nothing I can do";
}

function texto_reticul(){
	tx1.innerHTML= '';
	tx2.innerHTML= '';
	tx3.innerHTML= '';
	tx4.innerHTML= '';
	tx5.innerHTML= '';
	tx6.innerHTML= '';
	tx7.innerHTML= '';

	tx1.innerHTML= "Remember when you were young? You shone like the sun Shine on, you crazy diamond Now there's a look in your eyes Like black holes in the sky Shine on, you crazy diamond";
	tx2.innerHTML= "You were caught in the crossfire Of childhood and stardom Blown on, the steel breeze Come on, you target for faraway laughter Come on, you stranger, you legend You martyr, and shine!";
	tx3.innerHTML= "You reached for the secret too soon You cried for the moon Shine on you crazy diamond Threatened by shadows at night And exposed to the light Shine on you crazy diamond Well you wore out your welcome";
	tx4.innerHTML= "With random precision Rode on the steel breeze Come on, you raver, you seer of visions Come on, you painter, you piper You prisoner, and shine!";
}

function texto_riboss(){
	tx1.innerHTML= '';
	tx2.innerHTML= '';
	tx3.innerHTML= '';
	tx4.innerHTML= '';
	tx5.innerHTML= '';
	tx6.innerHTML= '';
	tx7.innerHTML= '';

	tx1.innerHTML= "Freezin' rests his head on a pillow made of concrete again ooh yeah Oh feelin' maybe he'll see a little betters any days ooh yeah";
	tx2.innerHTML= "Oh hand out faces that he sees come again ain't that familiar Oh dark grin he can't help when he's happy he looks insane";
	tx3.innerHTML= "Even flow Thoughts arrive like butterflies Oh he don't know, so he chases them away Someday yet he'll begin his life again Life again, life again";
}

function texto_lissos(){
	tx1.innerHTML= '';
	tx2.innerHTML= '';
	tx3.innerHTML= '';
	tx4.innerHTML= '';
	tx5.innerHTML= '';
	tx6.innerHTML= '';
	tx7.innerHTML= '';

	tx1.innerHTML= "Who's in a bunker? Who's in a bunker? Women and children first And the children first And the children";
	tx2.innerHTML= "I'll laugh until my head comes off I'll swallow till I burst Until I burst Until I";
	tx3.innerHTML= "Who's in a bunker? Who's in a bunker? I have seen too much I haven't seen enough You haven't seen it";
	tx4.innerHTML= "I'll laugh until my head comes off Women and children first And children first And children";
	tx5.innerHTML= "Here I'm alive Everything all of the time Here I'm alive Everything all of the time";
}

function texto_peroxiss(){
	tx1.innerHTML= '';
	tx2.innerHTML= '';
	tx3.innerHTML= '';
	tx4.innerHTML= '';
	tx5.innerHTML= '';
	tx6.innerHTML= '';
	tx7.innerHTML= '';

	tx1.innerHTML= "We are scanning the scene in the city tonight We are looking for you to start up a fight There is an evil feeling in our brains But it is nothing new you know it drives us insane";
	tx2.innerHTML= "Running, on our way hiding You will pay dying One thousand deaths Running, on our way hiding You will pay dying One thousand deaths";
	tx3.innerHTML= "Searching, Seek and destroy Searching, Seek and destroy Searching, Seek and destroy Searching, Seek and destroy";
}

function texto_centri(){
	tx1.innerHTML= '';
	tx2.innerHTML= '';
	tx3.innerHTML= '';
	tx4.innerHTML= '';
	tx5.innerHTML= '';
	tx6.innerHTML= '';
	tx7.innerHTML= '';

	tx1.innerHTML= "Lashing out the action, returning the reaction Weak are ripped and torn away Hypnotizing power, crushing all that cower Battery is here to stay";
	tx2.innerHTML= "Smashing through the boundaries Lunacy has found me Cannot stop the battery Pounding out aggression Turns into obsession Cannot kill the battery Cannot kill the family Battery is found in me Battery Battery";
}

function texto_membr(){
	tx1.innerHTML= '';
	tx2.innerHTML= '';
	tx3.innerHTML= '';
	tx4.innerHTML= '';
	tx5.innerHTML= '';
	tx6.innerHTML= '';
	tx7.innerHTML= '';

	tx1.innerHTML= "There's a lady who's sure All that glitters is gold And she's buying a stairway to heaven";
	tx2.innerHTML= "When she gets there she knows If the stores are all closed With a word she can get what she came for Oh oh oh oh and she's buying a stairway to heaven";
	tx3.innerHTML= "There's a sign on the wall But she wants to be sure 'Cause you know sometimes words have two meanings";
	tx4.innerHTML= "In a tree by the brook There's a songbird who sings Sometimes all of our thoughts are misgiving";
	tx5.innerHTML= "Ooh, it makes me wonder Ooh, it makes me wonder";
}

function texto_cito(){
	tx1.innerHTML= '';
	tx2.innerHTML= '';
	tx3.innerHTML= '';
	tx4.innerHTML= '';
	tx5.innerHTML= '';
	tx6.innerHTML= '';
	tx7.innerHTML= '';

	tx1.innerHTML= "So, so you think you can tell Heaven from hell Blue skies from pain Can you tell a green field From a cold steel rail? A smile from a veil? Do you think you can tell?";
	tx2.innerHTML= "Did they get you to trade Your heroes for ghosts? Hot ashes for trees? Hot air for a cool breeze? Cold comfort for change? Did you exchange A walk on part in the war For a lead role in a cage?";
	tx3.innerHTML= "How I wish, how I wish you were here We're just two lost souls Swimming in a fish bowl Year after year Running over the same old ground And how we found The same old fears Wish you were here ";
}

function texto_celula(){
	tx1.innerHTML= '';
	tx2.innerHTML= '';
	tx3.innerHTML= '';
	tx4.innerHTML= '';
	tx5.innerHTML= '';
	tx6.innerHTML= '';
	tx7.innerHTML= '';

	tx1.innerHTML= "Ainda é cedo, amor Mal começaste a conhecer a vida Já anuncias a hora de partida Sem saber mesmo o rumo que irás tomar";
	tx2.innerHTML= "Preste atenção, querida Embora eu saiba que estás resolvida Em cada esquina cai um pouco a tua vida Em pouco tempo não serás mais o que és";
	tx3.innerHTML= "Ouça-me bem, amor Preste atenção, o mundo é um moinho Vai triturar teus sonhos, tão mesquinho Vai reduzir as ilusões a pó";
	tx4.innerHTML= "Preste atenção, querida De cada amor tu herdarás só o cinismo Quando notares estás à beira do abismo Abismo que cavaste com os teus pés";
}