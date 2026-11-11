// function getFullName(firstName, surName) {
//   return firstName + " " + surName;
// }
// const fullName1 = getFullName("Alma", "Sanishad");
// const fullName2 = getFullName("Aron", "Nasiri");
// console.log(fullName1);
// console.log(fullName2);

function getFullName(firstName, surName, useFormalName) {
  if (useFormalName === true) {
    return "Lord" + " " + firstName + " " + surName;
  }
  return firstName + " " + surName;
}
const fullName1 = getFullName("Alma", "Sanishad", false);
const fullName2 = getFullName("Aron", "Nasiri", true);
console.log(fullName1);
console.log(fullName2);
