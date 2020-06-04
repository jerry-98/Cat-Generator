let  newele = document.getElementById('cat-generator');
newele.addEventListener('click', generateCat);

let delele = document.getElementById('cat-clear');
delele.addEventListener('click', ()=>{

    document.getElementById('flex-cat-gen').firstElementChild.remove();
});

let delelements = document.getElementById('clear-all');

delelements.addEventListener('click', ()=>{
    // document.getElementById('flex-cat-gen').innerHTML = '';
    location.reload();
});


function generateCat()
{
    let newing = document.createElement('img');
    let div = document.getElementById('flex-cat-gen');

    newing.setAttribute('src', 'http://thecatapi.com/api/images/get?format=src&type=gif&size=small');
    div.appendChild(newing);

}