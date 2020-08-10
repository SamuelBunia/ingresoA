/*
1)De 5  personas que ingresan al hospital se deben tomar y
validar los siguientes datos.
nombre , temperatura, sexo y edad.
a)informar la cantidad de personas de cada sexo.
b)la edad promedio en total
c)la mujer con más temperatura(si la hay)
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar()
{
	//variables
	let nombre;
	let temperatura;
	let sexo;
	let edad;
	let edadPromedio;
	let personasTotal;
	let mujerMasTemperaura;
	let edadM = 0;
	let edadF = 0;
	let temperaturaMayorF = 0;
	let cantidadM = 0;
	let cantidadF = 0;
	let flagMujerMasTemperatura = 0; 

	//----------pedir datos----------

	for (let i = 1; i <= 5; i++) {
		//nombre
		nombre = prompt(i + " Ingrese el nombre de la persona: ").toLowerCase();
			while (!(isNaN(nombre))) {
			nombre = prompt(i + " Invalido!! Ingrese el nombre de la persona (solo letras): ").toLowerCase();
			}
		
		//temperatura
		temperatura = parseFloat(prompt(i + " Ingrese su temperatura corporal en °C: "));
			while (isNaN(temperatura)) {
			temperatura = parseFloat(prompt(i + " Incorrecto!!. Ingrese su temperatura corporal en °C: "));
			}
		
		//sexo
		sexo = prompt(i + " Ingrese sexo (m o f): ").toLowerCase();
			while (sexo != 'm' && sexo != 'f') {
			sexo = prompt(i + " Sexo incorrecto!!. Ingrese sexo (m o f): ").toLowerCase();
			}

		//edad
		edad = parseInt(prompt("Ingrese su edad (0-110): ")); 
			while (isNaN(edad) || edad < 0 || edad > 110) {
			edad = parseInt(prompt("Edad incorrecta. Ingrese su edad (0-100): "));
			}
	//---------Termino los datos--------
		//devido entre hombre y mujeres, acumulo cuantos son depende del sexo	
			if (sexo == 'f') {
				edadF = edadF + edad;
				cantidadF++;
			}else{
				edadM = edadM + edad;
				cantidadM++;
			}
		//si el sexo es femenino, si es la primera es la de mas temperatura, 
		//o si la primera es menor a la segunda cambio nombres
			if (sexo == 'f') {
				if (flagMujerMasTemperatura = 0 || temperaturaMayorF < temperatura) {
					temperaturaMayorF = temperatura;
					mujerMasTemperaura = nombre;
					flagMujerMasTemperatura = 1;
				}
			}

	}

	edad = edadF + edadM;
	personasTotal = cantidadF + cantidadM;
	edadPromedio = edad / personasTotal;

	//a)informar la cantidad de personas de cada sexo.
	console.log("A.-La cantidad de personas Masculinas son: " + cantidadM + 
	" -Y la cantidad de personas Femeninas son: " + cantidadF);
	
	//b)la edad promedio en total
	console.log("B.-La edad promedio en total es: " + edadPromedio);

	//c)la mujer con más temperatura(si la hay)
	if (flagMujerMasTemperatura == 1) {
		console.log("C.-La mujer con mas temperatura es: " + mujerMasTemperaura + " y su temperatura es " 
		+ temperaturaMayorF);
	}else{
		console.log("C.-No ingreso ninguna mujer");
	}


}
