function organizaCampos() {
    campos[0].value = '';
    campos[1].value = 1;
    campos[2].value = 0;

    campos[0].focus();
}

let campos = [
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor')
];

let button = document.querySelector('.btn');
let tBody = document.querySelector('table tbody');
button.addEventListener('click', function(event) {
    event.preventDefault();
    
    let tr = document.createElement('tr');

    campos.forEach(function(campo) {

        let td = document.createElement('td');
        td.textContent = campo.value;

        tr.appendChild(td);
    })    
    let tdVolume = document.createElement('td');
    tdVolume.textContent = campos[1].value * campos[2].value;
    tr.appendChild(tdVolume);

    tBody.appendChild(tr);
    organizaCampos();
});