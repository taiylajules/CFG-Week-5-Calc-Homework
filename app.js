window.onload = function () {

    // add
  
    document.getElementById("add").onclick = function calculatorAdd() {
      var one, two, answer;
      one = prompt("Enter your first number");
      if (!(isNaN(one))) {
        two = prompt("Enter your second number");
        if (!(isNaN(two))) {
          answer = Number(one) + Number(two);
        }
        else {
          alert("You did not use the calculator properly!");
          answer = "Try again!";
        }
      }
      else {
        alert("You did not use the calculator properly!");
        answer = "Try again!";
      } document.getElementById("p1").innerHTML = answer;
      return answer;
    }
  
    // minus
  
    document.getElementById("minus").onclick = function calculatorMinus() {
      var one, two, answer;
      one = prompt("Enter your first number");
      if (!(isNaN(one))) {
        two = prompt("Enter your second number");
        if (!(isNaN(two))) {
          answer = Number(one) - Number(two);
        }
        else {
          alert("You did not use the calculator properly!");
          answer = "Try again!";
        }
      }
      else {
        alert("You did not use the calculator properly!");
        answer = "Try again!";
      } document.getElementById("p1").innerHTML = answer;
      return answer;
    }
  
    // multiply
  
    document.getElementById("multiply").onclick = function calculatorMultiply() {
      var one, two, answer;
      one = prompt("Enter your first number");
      if (!(isNaN(one))) {
        two = prompt("Enter your second number");
        if (!(isNaN(two))) {
          answer = Number(one) * Number(two);
        }
        else {
            alert("You did not use the calculator properly!");
            answer = "Try again!";
        }
      }
      else {
        alert("You did not use the calculator properly!");
        answer = "Try again!";
      } document.getElementById("p1").innerHTML = answer;
      return answer;
    }
  
    // divide
  
    document.getElementById("divide").onclick = function calculatorDivide() {
      var one, two, answer;
      one = prompt("Enter your first number");
      if (!(isNaN(one))) {
        two = prompt("Enter your second number");
        if (!(isNaN(two))) {
          answer = Number(one) / Number(two);
        }
        else {
            alert("You did not use the calculator properly!");
            answer = "Try again!";
        }
      }
      else {
        alert("You did not use the calculator properly!");
        answer = "Try again!";
      } document.getElementById("p1").innerHTML = answer;
      return answer;

    }
}