// Usamos map cuadno tenemos un array y queremos obtener un nuevo array de otra cosa

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const dobles = numeros.map(function (numero, posicion, numeros) {
	return numero * 2;
});

console.log(dobles);

// Dentro de map no podemos ejecutar funciones asincronas ni esperar el resultado del call back dentro del map

// Todo lo que hagamos dentro del matchRoutes, tiene que ser sincrono si o si
