let cantidad=document.getElementById('cantidad');
let boton=document.getElementById('generar');
let contrasena =document.getElementById('contrasena');
let mensaje=document.getElementById('mensaje');
const CADENA_CARACTERES = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!¡¿?@#$%^&*()'

 /* const mayusculas = 
    const minusculas = /[a-z]/.test(password);
    const numeros = /\d/.test(password);
    const especiales = /[!@#$%^&*()]/.test(password);
*/
function generar() {
	
	let numeroDigitado = parseInt(cantidad.value);
	

	if(numeroDigitado<8){

		alert('La cantidad de caracteres debe ser igual o mayor a ocho');
	}

	//Crea el pasword aleatorio

	let password='';
 	
	for (let i=0; i<numeroDigitado;i++){

		let caracterAleatorio= CADENA_CARACTERES [Math.floor ( Math.random() * CADENA_CARACTERES.length)];
		password += caracterAleatorio;


	}

	//Valida la seguridad
	let mayusculas = /[A-Z]/.test(password) ? 1 : 0;
	let minusculas= /[a-z]/.test(password) ? 1 : 0;
	let caracterEsp= /[!¡¿?@#$%^&*()]/.test(password)? 1 : 0;
	let numeros = /\d/.test(password)? 1 : 0;
	let fortaleza = mayusculas + minusculas + caracterEsp + numeros;
	
	contrasena.value =password;

	if (fortaleza==4) {
        mensaje.innerHTML='Contraseña fuerte';
    }
    else if (fortaleza==3) {

        mensaje.innerHTML='Contraseña media';
    }
    else{
        mensaje.innerHTML='Contraseña debil';
    }
}

function limpiar(){

	contrasena.value='';
	cantidad.value='';
}








