const display = document.querySelector('input#nvalue')
let operators = document.querySelectorAll('.operator')

operators = [...operators]
operators = operators.map(op => op.outerText == '*' ? 'x' : op.outerText)

let lastPressedKey = '';
function add(valor) {
    // display.value = display.value + valor
    if (display.value == '0' && (valor == 'x' || valor == '/' || valor == '+' || valor == '^')) {
        return;
    }
    if (lastPressedKey == '=') {
        if (!operators.includes(valor)) {
            display.value = '';
        }
    }
    if (operators.includes(lastPressedKey))  {
        if (operators.includes(valor)) {
            lastPressedKey = valor;
            return
        }
    }
    if (display.value == '0') {
        display.value = valor
        return
    }
    let newValue = valor
    newValue = newValue.replace('pa','(')
    newValue = newValue.replace('pf',')')
    lastPressedKey = valor;
    display.value += newValue
    display.value = display.value.substring(0, 16)
}
function apagar() {
    display.value = '0'
    lastPressedKey = 'apagar'
}

function backspace() {
    display.value = display.value.substring(0, display.value.length-1);
    lastPressedKey = 'back'
    if (display.value.length == 0) {
        display.value = '0'
    }
}

function resultado() {
    let newValue = display.value.replace('x','*')
    newValue = newValue.replace('^','**')
    newValue = newValue.replace('pa','(')
    newValue = newValue.replace('pf',')')
    display.value = eval(newValue)
    display.value = display.value.substring(0, 16)

    console.log(eval(display.value))
    lastPressedKey = '='
}

