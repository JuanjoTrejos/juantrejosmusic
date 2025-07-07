// Global variables
let inputFirstName;
let inputLastName;
let formattedName;

function createPipeFormat(first, last) {
  return first + "|" + last;
}

function loadName() {
  inputFirstName = prompt("Enter your first name:");
  inputLastName = prompt("Enter your last name:");
  formattedName = createPipeFormat(inputFirstName, inputLastName);
}

function displayFormattedName(name) {
  alert("Formatted name: " + name);
}

function characterCount() {
  if (formattedName) {
    alert("Character count: " + formattedName.length);
  } else {
    alert("No name loaded yet.");
  }
}

function uppercaseName() {
  if (formattedName) {
    document.getElementById("uppercaseFormattedDisplay").textContent = formattedName.toUpperCase();
  } else {
    document.getElementById("uppercaseFormattedDisplay").textContent = "No name loaded yet.";
  }
}

window.onload = function () {
  document.getElementById("button2").onclick = loadName;
  document.getElementById("button4").onclick = function () {
    displayFormattedName(formattedName);
  };
  document.getElementById("button5").onclick = characterCount;
  document.getElementById("button6").onclick = uppercaseName;

  const formattedCurrency = dollarFormat(234721.4);
  document.getElementById("currencyDisplay").textContent = "Formatted amount: " + formattedCurrency;

  const currentDay = getCurrentDayOfWeek();
  const currentMonth = getCurrentMonthName();
  const currentDate = getCurrentDate();
  const currentYear = getCurrentYear();

  document.getElementById("dateDisplay").textContent =
    `Today is: ${currentDay} ${currentMonth} ${currentDate}, ${currentYear}`;
};
