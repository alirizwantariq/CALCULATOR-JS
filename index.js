const clear = document.getElementById("cls");
//clear screen
function clearScreen() {
  input.value = "";
}

let input = document.getElementById("ans");

//concatination
function calc(i) {
  input.value += i.target.value;
}


let equal = document.getElementById("equ");
// Error Handling
function ans() {
  try {
    input.value = eval(input.value);
  } catch (err) {
    input.value = "Math Error";
  }
}

