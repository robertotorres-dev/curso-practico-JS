function esPar(numero) {
  if (numero % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

function calcularMediana(lista) {
  const mitadLista = parseInt(lista.length / 2);

  lista.sort((a, b) => a - b);

  let mediana;

  if (esPar(lista1.length)) {
    const elemento1 = lista[mitadLista - 1];
    const elemento2 = lista[mitadLista];

    const promedio = calcularMediaAritmetica([elemento1, elemento2]);
    return (mediana = promedio);
  } else {
    return (mediana = lista1[mitadLista]);
  }
}
