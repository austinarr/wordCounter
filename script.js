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

function update(value) {
    charLength(value);
    wordLength(value);
}

function charLength(value) {
    let newArr = value.split("");
    let updatedArr = newArr.filter((example) => example.trim() !== "");
    document.getElementById("character-output").innerHTML = `${updatedArr.length} Characters`
}

function wordLength(value) {
    let newArr = [value.trim()];
    let updatedArr = newArr.join(' ').split(' ');
    document.getElementById("word-output").innerHTML = `${updatedArr.length} Words`
}



// let updatedArr = newArr.filter((value) => value != " " || value != "");