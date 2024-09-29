let counter = 0;

function displayValue(num) {
  if (num == "*" || num == "/" || num == "-" || num == "+" || num == "%") {
    result.value += " " + num + " ";
    counter = 0;
  } else {
    if (counter == 1) {
      clearScreen();
      result.value = num;
    } else result.value += num;
  }
}

function clearScreen() {
  counter = 0;
  result.value = "";
  topresult.value = "";
}

function getResult() {
  counter++;
  topresult.value = result.value;
  result.value = eval(result.value);
}

function removeValue() {
  result.value = result.value.slice(0, -1);
}