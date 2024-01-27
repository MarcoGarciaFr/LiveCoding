/*

	Desarrollador: Marco Antonio Garcia Franco
	
	Entrevistador: Rodrigo Macedo Valencia
	
	Comentarios: Me dijo que me sentí comodo en este ejercicio, que los nervios no se me notaron mas que al principio. Que explique de manera adecuada lo que desarrolle PERO que implemente más los conceptos tecnicos de programación. Que hubiese sido bueno verme intentar las instrucciones extra y no solo resolver lo que me pidieron.
	
*/


// API
const API_ENDPOINT = 'https://yesno.wtf/api';

/**
 * STEPS:
 *
 * 1. Create a fetchAnswer function and call the API
 * 2. Output the API's response
 * 3. Attach fetchAnswer to an event listener
 * 4. Clear output after 3 seconds
 * 5. Optional: add loading/error states
 *
 */

const answerSpace = document.getElementById("answer");

const answerButton = document.getElementById("button");

let answer;


async function fetchAnswer() {
    
    fetch(API_ENDPOINT)
    
    .then(response => response.json())
    
    .then(data => {
        
        answer = data.answer;
        
        answerSpace.innerHTML = answer;
    
    })

    setTimeout(() => {
        
        answerSpace.innerHTML = "";
    
    }, 3000);

}

answerButton.addEventListener("click", ()=>{

    fetchAnswer();

 })
