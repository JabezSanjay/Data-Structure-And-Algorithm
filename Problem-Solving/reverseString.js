//Method-1

const reverseStringOne = (string) => {
  reversedString = string.split("").reverse().join("");
  console.log(reversedString);
};

//Mehtod-2
const reverseStringTwo = (string) => {
  let reversedString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i];
  }
  console.log(reversedString);
};
reverseStringOne("Hello");
reverseStringTwo("Hello");
