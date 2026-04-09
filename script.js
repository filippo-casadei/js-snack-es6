// Creo un array di oggetti ogni oggetti (di bici da corsa) ogni oggetto avrà 2 proprietà:
// nome e peso. Ho scelto di commentare l'unità di misura (kg) perchè mi sembrava giusto
// specificarla, ma mi è inutile scriverla non commentata, interferirebbe solo col calcolo
// in quanto non avrei un nu numero ma una stringa.

const tutteLeBici = [
{  
    "id": "Bici Rossa",
    "nome": "Rossa",
    "peso": 1 // kg

},
{  
    "id": "Bici Rosa",
    "nome": "Rosa",
    "peso": 2 // kg

},
{  
    "id": "Bici Verde",
    "nome": "Verde",
    "peso": 9 // kg

},
{  
    "id": "Bici Gialla",
    "nome": "Gialla",
    "peso": 19 // kg

},
{  
    "id": "Bici Blu",
    "nome": "Blu",
    "peso": 7 // kg

},
];

console.log(tutteLeBici);

// Creo una variabile vuota usando let perchè il valore verrà modificato.
let biciLeggera = tutteLeBici[0];

// Scorro l'array con un ciclo for.
for (let i = 1; i < tutteLeBici.length; i++) {
    if (tutteLeBici[i].peso < biciLeggera.peso) {
        biciLeggera = tutteLeBici[i];
    }
};

// Stampo in console.log
console.log(`La bici più leggera è la ${biciLeggera.nome} e pesa ${biciLeggera.peso} kg`);