
//Cria uma const que busca o id 'btn-mobile'
const btnMobile = document.querySelector("#btn-mobile");

function toggleMenu(event){
    if(event.type === 'touchstart'){
        event.preventDefault();
    }
    
    //Cria uma const que busca o id 'nav'
    const nav = document.querySelector('#nav')

    //No element de id 'nav' cria uma class chamada active caso Ñ existe. Caso exista, remove a classe. (toggle)
    nav.classList.toggle('active')

}


btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

