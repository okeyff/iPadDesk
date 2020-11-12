function calcActivate() {
    document.querySelector('.calc').style.display = 'block';
}

function insert(num) {
    document.form.textView.value =
        document.form.textView.value + num;
}

function clean() {
    document.form.textView.value = '';
    document.form.calcResult.value = ''
}

function equal() {
    let exp = document.form.textView.value;
    if (exp) {
        document.form.calcResult.value = eval(exp);
    }
}