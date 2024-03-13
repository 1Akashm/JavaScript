let output = document.getElementsByName("display_result")[0];

document.addEventListener("keydown", function (e) {
  let key = e.key;
  switch (key) {
    case "0":
      single_zero();
      break;

    case "1":
      one();
      break;

    case "2":
      two();
      break;

    case "3":
      three();
      break;

    case "4":
      four();
      break;

    case "5":
      five();
      break;

    case "6":
      six();
      break;

    case "7":
      seven();
      break;

    case "8":
      eight();
      break;

    case "9":
      nine();
      break;

    case "+":
      add();
      break;

    case "-":
      sub();
      break;

    case "/":
      divide();
      break;

    case "*":
      mul();
      break;

    case "Enter":
      totaling();
      break;

    case "Backspace":
      delet();
      break;

    case ".":
      dot();
      break;
  }
});

function clean() {
  output.value = "";
}

function delet() {
  output.value = output.value.toString().slice(0, -1);
}

function one() {
  output.value += 1;
}

function two() {
  output.value += 2;
}

function three() {
  output.value += 3;
}

function four() {
  output.value += 4;
}

function five() {
  output.value += 5;
}

function six() {
  output.value += 6;
}

function seven() {
  output.value += 7;
}

function eight() {
  output.value += 8;
}

function nine() {
  output.value += 9;
}

function totaling() {
  output.value = eval(output.value);
}

function double_zero() {
  output.value += "00";
}

function single_zero() {
  output.value += "0";
}

// operator
function add() {
  output.value += "+";
}

function sub() {
  output.value += "-";
}

function divide() {
  output.value += "/";
}

function dot() {
  output.value += ".";
}

function mul() {
  output.value += "*";
}
