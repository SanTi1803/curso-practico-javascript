//En este ejercicio debes crear una función para calcular la altura de un triángulo isósceles.

/*  La función debe recibir, como parámetros, la longitud de los 3 lados del triángulo.
    La función debe validar que la longitud de los 3 lados del triángulo corresponden a un triángulo isósceles.
    La función debe retornar la altura del triángulo. */


function alturaIsoceles(lado1, lado2, base){
    if(lado1 === lado2 && lado1 != base){
        alert("Es un triángulo Isoceles")
        const altura = Math.sqrt((lado1 **2) - (base **2 / 4))
        alert("La altura del Triángulo es: " + altura)
    }
    else {
        alert("No es un triángulo isoceles")
    }
}