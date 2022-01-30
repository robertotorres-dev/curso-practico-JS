const lista1 = [
  1, 2, 3, 4, 5, 1, 1, 2, 2, 2, 3, 4, 5, 7, 9, 90, 6, 5, 3, 23, 5, 6,
];

function calcularModa(lista) {
  const listaObj = {};

  lista.map(function (elemento) {
    if (listaObj[elemento]) {
      listaObj[elemento] += 1;
    } else {
      listaObj[elemento] = 1;
    }
  });

  const listaArray = Object.entries(listaObj).sort((a, b) => a[1] - b[1]);
  return listaArray[listaArray.length - 1];
}
