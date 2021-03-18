const input = document.getElementById("input");
const ouput = document.getElementById("output");
const textInput = document.getElementById("input").value;

input.addEventListener('input', onInput);

function onInput() {
    clearTimeout(input._timer);
    input._timer = setTimeout(()=> {
        update(this.value);
    }, 1000);
}

function update() {
    charLength();
    wordLength();
}

function charLength() {
    let inputValue = input.value
    let charCount = inputValue.length
    document.getElementById("character-output").innerHTML = `${charCount} Characters`
}

function wordLength() {
    let inputValue = input.value;
    let newArr = new Array(inputValue);
    let updatedArr = (newArr.join(' ').split(' '));
    let updatedArrLength = updatedArr.length
    document.getElementById("word-output").innerHTML = `${updatedArrLength} Words`
}