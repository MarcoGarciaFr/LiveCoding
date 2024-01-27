/*

	Desarrollador: Marco Antonio Garcia Franco
	
	Entrevistador: Rodrigo Macedo Valencia
	
	Comentarios: Me comento que explico los procedimientos de buena manera, pero que me relaje más ya que se me notan los nervios, que pregunte mas acerca de los requerimentos ya que hice un arreglo de animales y en las instrucciones dice arreglo de palabras. Que no deje pausas largas, que mi lenguaje es formal y es bueno.
	
*/


// Escribe tu código aquí.


let palabraAnimales = ["gato", "perro", "cocodrilo", "pato", "canario"];

const panimal = "babuino";

const resultadoPalabras = [];

function impAnimales(panimal, palabrasAnimales) {

    resultadoPalabras.push(panimal);

    palabrasAnimales.forEach(a => {

        if (panimal.length < a.length) {

            resultadoPalabras.push(a);

        }

    });

    imprimirPalabras(resultadoPalabras);

}

impAnimales(panimal, palabraAnimales);

