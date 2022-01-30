const salaries = salariesMexico.map(function (person) {
  return person.salary;
});

const salariesSorted = salaries.sort((a, b) => a - b);

function esPar(numero) {
  return numero % 2 === 0;
}

function calcularMediaAritmetica(lista) {
  const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
    return valorAcumulado + nuevoElemento;
  });
  const promedioLista = sumaLista / lista.length;
  return promedioLista;
}

function medianaSalary(lista) {
  const mitad = parseInt(lista.length / 2);

  if (esPar(lista.length)) {
    const elemento1 = lista[mitad - 1];
    const elemento2 = lista[mitad];

    const mediana = calcularMediaAritmetica([elemento1, elemento2]);
    return mediana;
  } else {
    const mediana = lista[mitad];
    return mediana;
  }
}
