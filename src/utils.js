//Métodos Utilitarios para proyectos de Js

//Obtener datos de un API o de un json
export async function getData (url) {	
	const resp = await fetch (url);
	const json = await resp.json();
	return json;
	
}

//Enviar datos en formato JSON a través de un API
export async function sendData (url, data) {
  const resp = await fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    }
  });
  let json= await resp.json();
    return json;
};

//función asíncrona de Esperar (equivalente a wait, en C3)
export function sleep (ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

//Desacomodar arreglos de objetos
export function shuffle (array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

//Obtiene un númeor entero de forma aleatoria de un rango de números (min - max)
export function getRandom (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};