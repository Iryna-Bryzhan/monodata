const header = document.querySelector(".fixed-header");
const logo = document.querySelector(".logo-img");

window.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY;

  if (scrollPosition > 100) {
    header.classList.add("scrolled");
    logo.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
    logo.classList.remove("scrolled");
  }
});

let toggleButton = document.querySelector(".toggle-menu");
let navBar = document.querySelector(".nav-bar");
toggleButton.addEventListener("click", function () {
  navBar.classList.toggle("toggle");
});

let navItem = document.querySelector(".nav-list-item-button");
navItem.addEventListener("click", function () {
  navBar.classList.remove("toggle");
});
function isValidPhone(phone) {
  return /^\+?3?8?(0\d{9})$/.test(phone);
  // return /^\\d{2}\\s\d{3}\s\d{2}\s\d{2}$/.test(phone);
}

function validateName() {
  const nameInput = document.getElementById("name");
  const nameError = document.getElementById("name-error");
  const name = nameInput.value.trim();

  if (name === "") {
    nameError.textContent = "Будь ласка, введіть своє ім'я";
    return false;
    А;
  } else {
    nameError.textContent = "";
    return true;
  }
}

function validateSurname() {
  const surnameInput = document.getElementById("surname");
  const surnameError = document.getElementById("surname-error");
  const surname = surnameInput.value.trim();

  if (surname === "") {
    surnameError.textContent = "Будь ласка, введіть своє прізвище";
    return false;
  } else {
    surnameError.textContent = "";
    return true;
  }
}

function validatePhone() {
  const phoneInput = document.getElementById("phone");
  const phoneError = document.getElementById("phone-error");
  const phone = phoneInput.value.trim();

  if (phone === "") {
    phoneError.textContent = "Будь ласка, введіть свій номер телефону";
    return false;
  } else if (!isValidPhone(phone)) {
    phoneError.textContent = "Будь ласка, введіть коректний номер телефону";
    return false;
  } else {
    phoneError.textContent = "";
    return true;
  }
}

// Функція для збору данних
function resetFormFields() {
  document.getElementById("name").value = "";
  document.getElementById("surname").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("message").value = "";
}

function hideModalError() {
  document.querySelector(".modal-error").style.display = "none";
}

function showModalError() {
  const modalError = document.querySelector(".modal-error");
  modalError.style.display = "block";

  setTimeout(function () {
    hideModalError();
  }, 2000);
}

function hideModalSuccess() {
  document.querySelector(".modal-success").style.display = "none";
}

function showModalSuccess() {
  const modalSuccess = document.querySelector(".modal-success");
  modalSuccess.style.display = "block";

  setTimeout(function () {
    hideModalSuccess();
  }, 2000);
}

// Функція для відправки
function sendDataToServer(formData) {
  fetch("/code/form-handler.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams(formData).toString(),
  })
    .then((response) => {
      if (response.ok) {
        showModalSuccess();
      } else {
        throw new Error("Помилка при відправці заявки.");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      showModalError();
    });
}

// Функція для збора даних форми та відправки на сервер
function collectFormData() {
  const nameInput = document.getElementById("name");
  const surnameInput = document.getElementById("surname");
  const phoneInput = document.getElementById("phone");
  const messageInput = document.getElementById("message");

  const formData = {
    name: nameInput.value.trim(),
    surname: surnameInput.value.trim(),
    phone: phoneInput.value.trim(),
    message: messageInput.value.trim(),
  };

  sendDataToServer(formData);
  resetFormFields();
}

document.getElementById("name").addEventListener("blur", validateName);
document.getElementById("surname").addEventListener("blur", validateSurname);
document.getElementById("phone").addEventListener("blur", validatePhone);

document.querySelector(".form").addEventListener("submit", function (event) {
  event.preventDefault();
  if (validateName() && validateSurname() && validatePhone()) {
    collectFormData();
  }
});
