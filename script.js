const form = document.querySelector('.form-quizz'); //Ici on selectionne le formulaire
let tableauResultats = []; 
const reponses = ['c','a','b','a','c'];
const emojis = ['✔️','✨','👀','😭','👎'];// ajout du tableau des emojis elles sont compter comme chaine de caractères elles prennent moins de place du coup
const titreResultat = document.querySelector('.resultats h2');
const noteResultat = document.querySelector('.note'); // ajout de la note de bonne réponse
const aideResultat = document.querySelector('.aide'); // pour ajouter le message de resultat
const toutesLesQuestions = document.querySelectorAll('.question-block'); //pour ajouter des couleurs et des animations
let verifTableau = [];

// on est à l'écoute d'un événement dans le formaulaire, ici
// quand on soumet le formulaire avec submit "bouton valider"
// on fait une fonction fléchée anonyme 
form.addEventListener('submit', (e) => { 
    e.preventDefault(); // on utilise la methode preventDefault qui ici va empecher l'actualisation de la page
    // console.log(document.querySelector('input[name="q1"]:checked').value);

    for(i = 1; i < 6; i++) { // ici on va itérer 5 fois, faire tournée 5 fois la boucle
        tableauResultats.push(document.querySelector(`input[name="q${i}"]:checked`).value)
    }
    // console.log(tableauResultats);
    verifFunc(tableauResultats);
    tableauResultats = [];
})

function verifFunc(tabResultats) {

    for(let a = 0; a < 5; a++){ //itération x5 la boucle tourne 5x car 5 questions

        if(tabResultats[a] === reponses[a]) {
            verifTableau.push(true);
        } else {
            verifTableau.push(false);
        }
    }
    // console.log(verifTableau);
    afficherResultats(verifTableau); //affichage du resultat 
    couleursFonction(verifTableau);
    verifTableau = []; //pour remettre à zéro quand on veux changer la réponse
}

function afficherResultats(tabCheck) { //prends un tableau à vérifier

    const nbDeFautes = tabCheck.filter(el => el !== true).length; //retourne un tableau vérifier, en filtrant les éléments strictement différents de true (tout les falses)
    // console.log(nbDeFautes);

    switch(nbDeFautes) { //pour remplacer les if

        case 0: //quand le nbr de fautes et égale à zéro
            titreResultat.innerText = `✔️ Bravo, c'est un sans faute ! ✔️`
            aideResultat.innerText = ''
            noteResultat.innerText = '5/5'
            break;
        case 1:
            titreResultat.innerText = `✨ Vous y êtes presque ! ✨`
            aideResultat.innerText = 'Retentez une autre réponse dans la case rouge, puis re-validez !'
            noteResultat.innerText = '4/5'
            break;
        case 2:
            titreResultat.innerText = `✨ Encore un effort ... 👀`
            aideResultat.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !'
            noteResultat.innerText = '3/5'
            break;
        case 3:
            titreResultat.innerText = `👀 Il reste quelques erreurs. 😭`
            aideResultat.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !'
            noteResultat.innerText = '2/5'
            break;
        case 4:
            titreResultat.innerText = `😭 Peux mieux faire ! 😭`
            aideResultat.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !'
            noteResultat.innerText = '1/5'
            break;
        case 5:
            titreResultat.innerText = `👎 Peux mieux faire ! 👎`
            aideResultat.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !'
            noteResultat.innerText = '0/5'
        break;

        default: //message en cas d'erreur/bug
            'Wops, cas innatendu.';
    }
}

function couleursFonction(tabValeurBooleen) { //

    for(let j = 0; j < tabValeurBooleen.length; j++){ //

        if(tabValeurBooleen[j] === true){ 
            toutesLesQuestions[j].style.background = 'green'; //si la réponse est bonne le block devient vert
        } else {
            toutesLesQuestions[j].style.background = 'red'; // sinon si la réponse est fausse le block devient rouge
            toutesLesQuestions[j].classList.add('echec'); // cette animation vient si un block ou l'intégralités des block sont faux.

            setTimeout(() => {
                toutesLesQuestions[j].classList.remove('echec'); // classList.add & .remove sont des Method qui fonctionnent avec l'API
            }, 500)
        }
    }
}

toutesLesQuestions.forEach(item => { // toutes les questions (block) pour chaque item ou l'on click dessus il redevient blanc
    item.addEventListener('click', () => {
        item.style.background = "black"; 
    })
})
