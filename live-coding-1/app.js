// Escribe tu código aquí.

// Función para encontrar las palabras más largas que un string dado
function palabrasLargas(string) {

    let plargo = string[0];
    let palabralarga='Ornitorrinco';
    
    for (let i = 0; i<string.length; i++){

    if (string[i].length>plargo.length) {

        palabralarga=string[i];

      }

    }
}