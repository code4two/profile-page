const data1 = document.querySelector(".data1");
const data2 = document.querySelector(".data2");
const submitButton = document.querySelector(".action");
const dataEntered = document.querySelector(".dataEntered");

submitButton.addEventListener("click", () => {
  console.log("Submit Button Clicked!!🤗");
  console.log(`${data1.value} \n ${data2.value}`);

  if (data2.value.includes(" ") || !data2.value.includes("@")) {
    dataEntered.innerHTML = `**Enter email properly: avoid spacing and include @`;
    dataEntered.style.color = "red";
    data2.style.outline = "red";
  } else {
    submitButton.innerHTML = "Following ✅";
    submitButton.style.backgroundColor = "green";
    dataEntered.innerHTML = `Name: ${data1.value} \ Email: ${data2.value}`;
  }
});
