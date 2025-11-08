const modeBtn = document.querySelector("#modeBtn");
const icon = document.querySelector(".icon");
const firstNameInput = document.querySelector("#firstNameInput");
const lastNameInput = document.querySelector("#lastNameInput");
const emailInput = document.querySelector("#emailInput");
const checkbox = document.querySelector("#agree");
const messageInput = document.querySelector("#messageInput");

modeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");
  icon.classList.toggle("fa-sun");
  icon.classList.toggle("fa-moon");

  localStorage.setItem(
    "mode",
    document.body.classList.contains("light") ? "light" : "dark"
  );
});

function savedData() {
  const formData = {
    firstName: firstNameInput.value,
    lastName: lastNameInput.value,
    email: emailInput.value,
    checkbox: checkbox.checked,
    message: messageInput.value,
  };

  localStorage.setItem("formData", JSON.stringify(formData));
}

firstNameInput.addEventListener("input", savedData);
lastNameInput.addEventListener("input", savedData);
emailInput.addEventListener("input", savedData);
checkbox.addEventListener("change", savedData);
messageInput.addEventListener("input", savedData);


window.addEventListener("load", () => {
  const savedMode = localStorage.getItem("mode");
  const savedFormdata = JSON.parse(localStorage.getItem("formData"));

  if (savedMode === "light") {
    document.body.classList.add("light");
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  } else {
    document.body.classList.remove("light");
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  }

  if (savedFormdata) {
    firstNameInput.value = savedFormdata.firstName;
    lastNameInput.value = savedFormdata.lastName;
    emailInput.value = savedFormdata.email;
    checkbox.checked = savedFormdata.checkbox;
    messageInput.value = savedFormdata.message;
  }
});
