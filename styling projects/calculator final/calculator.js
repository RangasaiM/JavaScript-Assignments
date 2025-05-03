let calculator = JSON.parse(localStorage.getItem("calculator")) || "";
document.querySelector(".result").innerHTML = calculator;
function calculation(value) {
  calculator += value;
  localStorage.setItem("calculator", JSON.stringify(calculator));
  document.querySelector(".result").innerHTML = calculator;
}
