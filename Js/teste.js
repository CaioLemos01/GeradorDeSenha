let functions = [fn1, fn2, fn3, fn4];

function fn1() {
    return fn2();
}

function fn2() {
    return 'Olá 2';
}

function fn3() {
    return 'Olá 3';
}

function fn4() {
    return 'Olá 4';
}

console.log(functions[0]());