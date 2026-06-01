const formData = {
  email: "",
  message: ""
};

const form = document.querySelector('.feedback-form');
const STORAGE_KEY = "feedback-form-state";

const savedData = localStorage.getItem(STORAGE_KEY);
if (savedData) {
  try {
    const parsedData = JSON.parse(savedData);
    Object.assign(formData, parsedData);

    form.elements.email.value = formData.email || "";
    form.elements.message.value = formData.message || "";
  } catch (error) {
    console.error("Mistake:", error);
  }
}
form.addEventListener("input", (event) => {
  const { name, value } = event.target;
  
  if (name === "email" || name === "message") {
    formData[name] = value.trim();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const emailValue = form.elements.email.value.trim();
  const messageValue = form.elements.message.value.trim();

  if (!emailValue || !messageValue) {
    alert("Fill please all fields");
    return;
  }
console.log(formData);


  localStorage.removeItem(STORAGE_KEY);
  form.reset();
  formData.email = "";
  formData.message = "";
});