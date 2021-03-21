// Récupération des données en JS
const form = document.querySelector('.form-quizz');
let tableauResults = [];

form.addEventListener('submit', (e) => {
    e.preventDefault(); //,e pas actualiser la page

    //fait tournée la boucle fore 5 fois pour récupérer les données des 5 block
    for(i = 1; i < 6; i++) {

        tableauResults.push(document.querySelector(`input[name="q£{1}"]:checked`).value)
    }
    tableauResults = [];
})