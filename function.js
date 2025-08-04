document.addEventListener("DOMContentLoaded", () => {
  const name = document.getElementById("name");
  const salaryInput = document.getElementById("salary");
  const submit = document.getElementById("submit");
  const display = document.getElementById("result");

  function displayof(salary) {
      const netsalary = salary - (salary * 0.35);
      if (netsalary >= 3500) {
          return "You are eligible";
      } else {
          return "We are sorry, you are not eligible";
      }
  }

  submit.addEventListener("click", function () {
      const salary = parseFloat(salaryInput.value);
      if (!isNaN(salary)) {
          display.value = displayof(salary); // ✅ use .value for inputs
          localStorage.setItem("name1", "name" );
          localStorage.setItem("salary", "salary");
          localStorage.getItem("name");
          localStorage.getItem("salary");
      } else {
          display.value = "Please enter a valid salary.";
      }
  });
});
