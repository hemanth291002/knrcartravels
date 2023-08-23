let big = document.getElementById('big');
big.addEventListener('mouseover', function () { 
let counts = setInterval(updated);
let upto = 0;
function updated() {
    let count = document.getElementById("years");
    count.innerHTML = ++upto;
    if (upto === 30) {
clearInterval(counts);
}
}
})

let bigger = document.getElementById('bigger');
bigger.addEventListener('mouseover', function () { 
let a = setInterval(updated);
let b = 0;
function updated() {
    let count = document.getElementById("total");
    count.innerHTML = ++b;
    if (b === 7) {
clearInterval(a);
}
}
})

let biggest = document.getElementById('biggest');
biggest.addEventListener('mouseover', function () { 
let c = setInterval(updated);
let d = 0;
function updated() {
    let count = document.getElementById("customers");
    count.innerHTML = ++d;
    if (d === 872) {
clearInterval(c);
}
}
})

