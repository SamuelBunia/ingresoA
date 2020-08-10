/*
Nos ingresan una cantidad indeterminada de estadías de  vacaciones,
validando los datos ingresados. 
nombre del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el nombre del titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar()
{
//variables
let nombreTitular;
let lugar;
let temporada;
let acompañantes;
let personasEnTotal;
let seguir;


do{
    //nombre
	nombreTitular = prompt(" Ingrese el nombre de la persona: ").toLowerCase();
	while (!(isNaN(nombreTitular))) {
	nombreTitular = prompt(" Invalido!! Ingrese el nombre de la persona (solo letras): ").toLowerCase();
	}

    //lugar
    lugar = prompt(" Ingrese destino (bariloche, cataratas o salta): ").toLowerCase();
			while (lugar != 'bariloche' && lugar != 'cataratas' && lugar != 'salta') {
			lugar = prompt(" destino incorrecto!!. Ingrese destino (bariloche, cataratas o salta): ").toLowerCase();
			}

	//temporada
	temporada = prompt(" Ingrese temporada ('otoño','invierno', 'verano','primavera'): ").toLowerCase();
			while (temporada != 'otoño' && temporada != 'invierno' && temporada != 'verano' && temporada != 'primavera') {
			temporada = prompt(" temporada incorrecta!!. Ingrese  ('otoño','invierno', 'verano','primavera'): ").toLowerCase();
			}

    //personas que viajan
    acompañantes = parseInt(prompt("Ingrese las personas que viajaran contigo: "));
    while (isNaN(acompañantes) || acompañantes <= 0 || acompañantes > 100) {
		acompañantes = parseFloat(prompt("iNCORRECTO!! Ingrese las personas que viajaran contigo:  "));
    }




  seguir = prompt("Desea ingresar otro producto?: ");
 }while(seguir == 'si');
}
