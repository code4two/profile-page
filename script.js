const data1 = document.querySelector(".data1");
const data2 = document.querySelector(".data2");
const submitButton = document.querySelector(".action");
const dataEntered = document.querySelector(".dataEntered");
const formSubmit = document.querySelector(".formSubmit");

submitButton.addEventListener("click", () => {
  console.log("Submit Button Clicked!!🤗");
  console.log(`${data1.value} \n ${data2.value}`);

  if (data2.value.includes(" ") || !data2.value.includes("@")) {
    data2.style.outline = "2px solid red";
    data2.setCustomValidity = "Enter a valid email address (example@gmail.com)";
  } else {
    submitButton.innerHTML = "Following ✅";
    submitButton.style.backgroundColor = "green";
    dataEntered.innerHTML = `Name: ${data1.value} \n Email: ${data2.value}`;

    function getItDone() {
      formSubmit.addEventListener("submit", (bolt) => {
        bolt.preventDefault();
        console.log("form submitted with Js, no refresh");
      });
    }
    getItDone();
  }
});

//
