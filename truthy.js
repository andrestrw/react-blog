let meaningOfLife = true;

if (meaningOfLife) {
	console.log(
		'The meaning of life , the universe and everything is',
		meaningOfLife
	);
} else {
	console.log('I have no idea ');
}

console.log(Boolean(42));
console.log(Boolean(() => {}));
console.log(Boolean(true));

// en js solo existen 8 valores falsos

console.log(Boolean(false));
console.log(Boolean(''));
console.log(Boolean(NaN));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(0n));
console.log(Boolean(0));
console.log(Boolean(-0));

const h1 = 0;

const h2 = -0;

console.log(h1 === h2);

// En el ejemplo previo podemos comprobar que realmente que el triple igual es incorrecto ya que nos dice que son el mismo valor cuadno relamente no lo son

console.log(1 / 0);

console.log(1 / -0);
console.log(Object.is(0, -0));

// Con estas últimas comprobaciones de ejemplo podemos verificar correcatmente la igualdad corrrectamente

// Una vez hemos entendido esto, podemos ver como un objeto es igual a truthly

const obj1 = {
	type: 'hola',
};

console.log(Boolean(obj1));
