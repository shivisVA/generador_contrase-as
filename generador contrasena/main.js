let cantidad=document.getElementById('cantidad');
let boton=document.getElementById('generar');
let contrasena =document.getElementById('contrasena');
const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'


function generar() {
	
	let numeroDigitado = parseInt(cantidad.value);
	

	if(numeroDigitado<8){

		alert('La cantidad de caracteres debe ser igual o mayor a ocho');
	}


	let password='';

	for (let i=0; i<numeroDigitado;i++){

		let caracterAleatorio= cadenaCaracteres [Math.floor ( Math.random() * cadenaCaracteres.length)];
		password += caracterAleatorio;

	}

	contrasena.value =password;
}









