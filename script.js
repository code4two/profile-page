const data1 = document.querySelector(".data1");
const data2 = document.querySelector(".data2");
const submitButton = document.querySelector(".action");
const dataEntered = document.querySelector(".dataEntered");
const formSubmit = document.querySelector(".formSubmit");

submitButton.addEventListener("click", () => {
  console.log("Submit Button Clicked!!🤗");
  console.log(`${data1.value} \n${data2.value}`);

  if (data2.value.includes(" ") || !data2.value.includes("@" && ".com")) {
    data2.style.outline = "2px solid red";
    dataEntered.innerHTML = "Enter a valid email address (example@gmail.com)";
  } else if (data1.value === "") {
    data1.style.outline = "2px solid red";
    dataEntered.innerHTML = "Name field should not be empty";
  } else {
    submitButton.innerHTML = "Following ✅";
    submitButton.style.backgroundColor = "green";
    dataEntered.innerHTML = `Name: ${data1.value} \n Email: ${data2.value}`;

    data1.style.outline = "none";
    data2.style.outline = "none";

    function getItDone() {
      formSubmit.addEventListener("submit", (bolt) => {
        bolt.preventDefault();
      });
    }
    getItDone();
  }
});
