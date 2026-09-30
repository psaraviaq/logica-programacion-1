const numeros = [];
const cajaTexto = document.getElementById("resultado");

for (let i = 0; i < 3; i++) {
  let numero = prompt(`Ingresa el número ${i + 1}:`);
  numeros.push(Number(numero));
}

const ordenados = numeros.sort((a, b) => b - a);
cajaTexto.innerHTML += `<p>De mayor a menor: ${ordenados.join(", ")}</p>`;
cajaTexto.innerHTML += `<p>De menor a mayor: ${ordenados.reverse().join(", ")}</p>`;

if (numeros[0] === numeros[1] && numeros[1] === numeros[2]) {
  cajaTexto.innerHTML += `<p>Los tres números son iguales.</p>`;
}
