//const lsita1 = [100, 200, 300, 400, 500];

function calcularMediaAritmetica(lista) {
  /* let sumaLista = 0;

  for (let i = 0; i < lista.length; i++) {
    sumaLista = sumaLista1 + lista[i];
  }
 */
  const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
    return valorAcumulado + nuevoElemento;
  });

  return (promedioLista = sumaLista / lista.length);
}
