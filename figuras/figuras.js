// Código del cuadrado
console.group("Cuadrado");

// Perimetro
function perimetroCuadrado(lado) {
  return lado * 4;
}

// Área
function areaCuadrado(lado) {
  return lado * lado;
}

console.groupEnd();

// Código del triángulo
console.group("Triángulo");

// Perimetro
function perimetroTriangulo(ladoA, ladoB, base) {
  return ladoA + ladoB + base;
}

// Area
function areaTriangulo(base, altura) {
  console.log(`${base} ${altura}`);
  return (base * altura) / 2;
}

function alturaTriangulo(ladoA, base) {
  return Math.sqrt((ladoA * ladoA) - (base * base) / 4);
}

console.groupEnd();

// Código del círculo
console.group("Círculos");

// Diametro
function diametroCirculo(radio) {
  return radio * 2;
}

//Circunferencia
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * Math.PI;
}

//Àrea
function areaCirculo(radio) {
  return radio * radio * Math.PI;
}

console.groupEnd();

// Interactuar con HTML
// Cuadrado
function calcularPerimetroCuadrado() {
  const input = document.getElementById("inputLadoCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}

function calcularAreaCuadrado() {
  const input = document.getElementById("inputLadoCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}

// Triangulo
function calcularPerimetroTriangulo() {
  const inputA = document.getElementById("inputLadoATrinagulo");
  const inputB = document.getElementById("inputLadoBTrinagulo");
  const inputBase = document.getElementById("inputBaseTrinagulo");

  const value = parseInt(inputA.value);
  const value2 = parseInt(inputB.value);
  const value3 = parseInt(inputBase.value);

  const perimetro = perimetroTriangulo(value, value2, value3);
  alert(perimetro);
}

function calcularAlturaTriangulo() {
  const inputA = document.getElementById("inputLadoATrinagulo");
  const inputB = document.getElementById("inputLadoBTrinagulo");
  const inputBase = document.getElementById("inputBaseTrinagulo");

  const value = parseInt(inputA.value);
  const value2 = parseInt(inputB.value);
  const value3 = parseInt(inputBase.value);

  if (value === value2) {
    const altura = alturaTriangulo(value, value3);
    alert(altura);
  } else {
    alert("Esto no es un triángulo isosceles");
  }
}

function calcularAreaTriangulo() {
  const base = document.getElementById("inputBaseTrinagulo");
  const altura = document.getElementById("inputAlturaTrinagulo");

  const value = base.value;
  const value2 = altura.value;

  const area = areaTriangulo(value, value2);
  alert(area);
}

// Circulo
function calcularPerimetroCirculo() {
  const input = document.getElementById("inputRadio");
  const value = input.value;

  const perimetro = perimetroCirculo(value);
  alert(perimetro);
}

function calcularAreaCirculo() {
  const input = document.getElementById("inputRadio");
  const value = input.value;

  const area = areaCirculo(value);
  alert(area);
}
