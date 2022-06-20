document.getElementById('submit').onclick = function () {
    
let form = document.getElementById('form');
valid(form);

    let login = document.getElementById('login').value;
    let passw = document.getElementById('passw').value;

    if (login == 'Selina' && passw == 'Vilcu') window.location = "https://feaklif.github.io/home/selina.html";
    else alert('Insert Corect Data!');
}
