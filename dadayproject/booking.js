let submits = document.getElementById('register-from')
submits.addEventListener('submit', function (event) {
    event.preventDefault();
    addColor();
})

let addColor=()=> {
    if(checkName() & checkNumber() & checkInit() & checkDestination()) {

        checkSubmit();
        alert("Successfully Submitted we will contact You with in a minutes");
    }
    else {
        alert("Oh! we lost some data.Please Try again!")
    }
}

let checkName=()=> {
    one = document.getElementById('name');
    two = document.getElementById('sidebox');
    regExp = /^[a-zA-Z0-9]{4,18}$/;
    if (regExp.test(one.value)) {
        outComes(one, two);
        return true;
    }
    else {
        outCross(one, two);
        return false;
    }
}
let checkNumber = () => {
   let one = document.getElementById('number');
   let two = document.getElementById('sideboxs');
    regExp = /[0-9]/;
    if (regExp.test(one.value)) {
        outComes(one, two);
        return true;
    }
    else {
        outCross(one, two);
        return false;
    }
}
let checkInit=()=> {
    one = document.getElementById('initial');
    two = document.getElementById('sidebox2');
    regExp = /^[a-zA-Z0-9]{3,18}$/;
    if (regExp.test(one.value)) {
        outComes(one, two);
        return true;
    }
    else {
        outCross(one, two);
        return false;
    }
}
let checkDestination=()=> {
    one = document.getElementById('destination');
    two = document.getElementById('sidebox3');
    regExp = /^[a-zA-Z0-9]{3,18}$/;
    if (regExp.test(one.value)) {
        outComes(one, two);
        return true;
    }
    else {
        outCross(one, two);
        return false;
    }
}

let outComes=(one,two)=> {
    one.classList.add('boxes');
    one.classList.remove('border-box');
    two.classList.add('text-success');
    two.classList.remove('text-danger');
    two.innerText = 'Valid User';
}

let outCross=(one,two)=> {
    one.classList.remove('boxes');
    one.classList.add('border-box');
    two.classList.remove('text-success');
    two.classList.add('text-danger');
    two.innerText = 'INValid User';
}
let user = document.getElementById("name");
user.addEventListener('keyup', function () {
    checkName();
})
let num = document.getElementById('number');
num.addEventListener('keyup', function () {
    checkNumber();
})
let mail = document.getElementById('initial');
mail.addEventListener('keyup', function () {
    checkInit();
})
let pass = document.getElementById('destination');
pass.addEventListener('keyup', function () {
    checkDestination(); 
})

let checkSubmit = () => {
    let phNo = '+916304068223';
    let name = document.getElementById('name');
    let number = document.getElementById('number');
    let start = document.getElementById('initial');
    let ending = document.getElementById('destination');

    let url = 'https://wa.me/' + phNo + '?text='
        + 'name :' + name.value + '%0a'
        + 'number :' + number.value + '%0a';
    + 'starting :' + start.value + '%0a';
    +'destination :' + ending.value + '%0a';
    +'Customer Details';

    window.open(url, 'blank').focus();

}

