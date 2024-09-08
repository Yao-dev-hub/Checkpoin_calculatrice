// DOM

const touches = [...document.querySelectorAll('.bouton')];
const listesKeycode = touches.map(touche => touche.dataset.key);
const ecran = document.querySelector('.ecran')

document.addEventListener('keydown', (e) => {
    const valeur = e.keyCode.toString();
    // console.log(valeur, typeof valeur);
    calculer(valeur)
});

document.addEventListener('click', (e) => {
    const valeur = e.target.dataset.key;
    calculer(valeur)
});

const calculer = (valeur) => {
    if (listesKeycode.includes(valeur)) {
        switch(valeur) {
            case '8':
                ecran.textContent = "";
                break;
            case '13':
                const calcul = eval(ecran.textContent);
                ecran.textContent = calcul;
                break;
            default:
                const indexKeycode = listesKeycode.indexOf(valeur);
                const touche = touches[indexKeycode];
                ecran.textContent += touche.innerHTML;
        }
    }
} 

window.addEventListener('error', (e) => {
    alert('Erreur de syntaxe :'+ e.message);
})