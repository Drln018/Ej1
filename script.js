let add = document.querySelector('#add');
let substract = document.querySelector('#substract');
//console.log(add, substract);

add.addEventListener("click", function () {
    let output = document.querySelector('#output');    
    let value = parseInt(output.innerText) + 1;
    if (value > 10) {
        value = 0;
        alert("Llegaste al límite, empecemos otra vez")
    }
    output.innerText = value;
    
});

substract.addEventListener("click", function () {
    let output = document.querySelector('#output');
    let value = parseInt(output.innerText) - 1;
    if (value < 0) {
        value = 0;
    }
    output.innerText = value;

});