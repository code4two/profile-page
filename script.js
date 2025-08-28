const data1 = document.querySelector(".data1");
const data2 = document.querySelector(".data2");
const submitButton = document.querySelector(".action");
const dataEntered = document.querySelector(".dataEntered");

submitButton.addEventListener("click", () => {
  console.log("Submit Button Clicked!!🤗");
  console.log(`${data1.value} \n ${data2.value}`);

  if (data2.value) {
  } else {
  }

  //   IF TRUE, OUTPUT THIS

  // DEFAULT OUTPUT AFTER SUBMIT BUTTON IS CLICKED
  dataEntered.innerHTML = `Name: ${data1.value} \ Email: ${data2.value}`;

  // IF VALIDATIIN REQUIREMENTS ARE MET = OUTPUT THIS
  submitButton.innerHTML = "Following ✅";
  submitButton.style.backgroundColor = "green";

  //   //IF FALSE, OUTPUT
  //   dataEntered.innerHTML = `**In your email box: avoid spacing and include @`;
  //   dataEntered.style.color = "red";
});
