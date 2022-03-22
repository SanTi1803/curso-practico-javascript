// Perímetro del cuadrado
function perimetroCuadrado(lado){
    return lado * 4;
}

//Area del cuadrado
function areaCuadrado(lado){
    return lado * lado;
}

//Código Triángulo

//Perimetro del triangulo
function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}

//Area del triangulo
function areaTriangulo(base, altura){
    return (base * altura) / 2;
} 


//Código del circulo

//Diámetro
function diametroCirculo(radio){
    return radio * 2;
}

//PI
const PI = Math.PI;

//Circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
} 


//Área
function areaCirculo(radio){
    return (radio * radio) * PI;
} 


//Aqui nos conectamos con el HTML:

function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}


function calcularPerimetroTriangulo(){
    const inputLado1 = document.getElementById("inputTriangulo1");
    const inputLado2 = document.getElementById("inputTriangulo2");
    const inputBase = document.getElementById("inputTriangulo3");
    
    const valueLado1 = Number(inputLado1.value);
    const valueLado2 = Number(inputLado2.value);
    const valueBase = Number(inputBase.value);

    const perimetro = perimetroTriangulo(valueLado1, valueLado2, valueBase);
    alert(perimetro)
}

function calcularAreaTriangulo(){
    const inputBase = document.getElementById("inputTriangulo3");
    const inputAltura = document.getElementById("inputTriangulo4");

    const valueBase = Number(inputBase.value);
    const valueAltura = Number(inputAltura.value);

    const area = areaTriangulo(valueBase, valueAltura)
    alert(area)
}

function calcularPerimetroCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}

function calcularAreaCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const area = areaCirculo(value);
    alert(area);
}

