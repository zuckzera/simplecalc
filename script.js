function add(char) {
    document.getElementById('display').value += char;
}

function limpar() {
    document.getElementById('display').value = '';
}

function corrigir() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calcular() {
    const expressao = document.getElementById('display').value;
    fetch('/calcular', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: 'expressao=' + encodeURIComponent(expressao)
    })
    .then(response => response.text())
    .then(result => {
        document.getElementById('display').value = result;
    });
}

document.addEventListener("keydown", function(event) {
    const key = event.key;
    if ("0123456789+-*/.".includes(key)) add(key);
    else if (key === "Enter") calcular();
    else if (key === "Backspace") corrigir();
    else if (key === "Escape") limpar();
});
