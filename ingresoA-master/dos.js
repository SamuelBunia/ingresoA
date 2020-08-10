/*
De una compra debes ingresar una cantidad indeterminada de productos,
validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más liviano de los sólidos
*/function mostrar()
{
  //variables
  
  let tipo;
  let pesoKg;
  let precio;
  let marca;
  let pesoTotal;
  let marcaMasCara;
  let marcaMasLiviano;
  let seguir;
  let pesoS = 0;
  let pesoL = 0;
  let liquidoMasCaro = 0;
  let solidosMasLiviano = 0;
  let flagCaroLiquido = 0;
  let flagLivianoSolido = 0;

  //bucle para pedir productos hasta que el cliente quiera
  do{
    //marca
    marca = prompt("Ingrese la marca del producto: ");

    //precio
    precio = parseFloat(prompt("Ingrese el precio del producto: "));
    while (isNaN(precio)) {
      precio = parseFloat(prompt("iNCORRECTO!! Ingrese el precio del producto(solo numeros): "));
    }

    //peso en KG
    pesoKg = parseFloat(prompt("Ingrese el peso en KG del producto: "));
    while (isNaN(pesoKg) || pesoKg <= 0 || pesoKg > 1000) {
      pesoKg = parseFloat(prompt("iNCORRECTO!! Ingrese el peso del producto(en Kilogramos): "));
    }

    //tipo solido o liquido
    tipo = prompt("Ingrese el tipo de producto(Liquido o Solido): ").toLowerCase();
    while (tipo != "liquido" && tipo != "solido") {
      tipo = prompt("INCORRECTO!! Ingrese el tipo de producto(Liquido o Solido): ").toLowerCase();
    }

  //acumular o sumar valores cada vez que pase
  switch (tipo) {
    case "liquido":
      if (flagCaroLiquido = 0 || liquidoMasCaro < precio) {
        liquidoMasCaro = precio;
        marcaMasCara = marca;
        flagCaroLiquido = 1;
      }
      pesoL = pesoL + pesoKg;      
      break;
  
    case "solido":
      if (flagLivianoSolido = 0 || solidosMasLiviano > pesoKg) {
        solidosMasLiviano = pesoKg;
        marcaMasLiviano = marca;
        flagLivianoSolido = 1;
      }
      pesoS = pesoS + pesoKg;
      break;

  }


  seguir = prompt("Desea ingresar otro producto?: ");
 }while(seguir == 'si');

//cuentas o codigo fuera de la iteracion

pesoTotal = pesoL + pesoS;


 //a)informar el peso total de la compra.
 alert("El peso total de la compra es: " + pesoTotal + "KG");

 //b)la marca del más caro de los líquidos
 if (flagCaroLiquido == 1) {
   alert("De los liquidos, la marca mas cara es: " + marcaMasCara + "\n"
   + "con un precio de " + liquidoMasCaro);
 }else{
   alert("No ingreso liquido");
 }

 //c)la marca del más liviano de los sólidos
if (flagLivianoSolido == 1) {
  alert("De los solidos la marca mas liviana es: " + marcaMasLiviano 
  + " con un peso de " + solidosMasLiviano);
  
}else{
  alert("No ingreso solido");
}





}
