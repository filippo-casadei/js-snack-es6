// Creo array per le squadre di calcio con le relative proprietà
const squadreDiClacio = [
    {
        "nome": "squadraDiTopolino",
        "puntiFatti": 0,
        "falliSubiti": 0
    },
    {
        "nome": "squadraDiPippo",
        "puntiFatti": 0,
        "falliSubiti": 0
    },
    {
        "nome": "squadraDiPluto",
        "puntiFatti": 0,
        "falliSubiti": 0
    },
    {
        "nome": "squadraDiMinnie",
        "puntiFatti": 0,
        "falliSubiti": 0
    },
    {
    "nome": "squadraDiPietro",
        "puntiFatti": 0,
        "falliSubiti": 0
    },
    {
    "nome": "squadraDiPaperino",
        "puntiFatti": 0,
        "falliSubiti": 0
    }
];

// Ciclo dentro ad un for le squadre di calcio per assegnare valori random a punti fatti
// e falli subiti

for ( let i = 0; i < squadreDiClacio.length; i++) {
        squadreDiClacio[i].puntiFatti = (Math.floor (Math.random() * 100 ) +1)
        squadreDiClacio[i].falliSubiti = (Math.floor (Math.random() * 100 ) +1)
    
};