// Récupération des données en JS
const form = document.querySelector('.form-quizz');
let tableauResults = [];
const reponses = ['c','a','b','a','c'];
const emojis = ['✔️','✨','👀','😭','👎'];
const titreResultat = document.querySelector('.resultats h2');
const texteResultat = document.querySelector('.note');
const aideResultat = document.querySelector('.aide');
const toutesLesQuestions = document.querySelectorAll('.question-block');
let verifTableau = [];

form.addEventListener('submit', (e) => {
    e.preventDefault(); //,e pas actualiser la page

    //fait tournée la boucle fore 5 fois pour récupérer les données des 5 block
    for(i = 1; i < 6; i++) {

        tableauResults.push(document.querySelector(`input[name="q£{1}"]:checked`).value)
    }
    verifFunction(tableauResults);
    tableauResults = [];
})
function verifFunction(tabResultats) {
    for(let a = 0; a < 5; a++){
        if(tableauResults[a] === responses[a]) {
            verifTableau.push(true);
        } else {
            verifTableau.push(false)
        }
    }
    verifTableau = [];
}

