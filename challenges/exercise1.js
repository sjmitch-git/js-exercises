export function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  return sandwich.fillings;
}

export function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  return person.city === "Manchester";
}

export function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  // A bus can hold 40 people. This function should return how many buses are required for the number of people
  return Math.ceil(people / 40);
}

export function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  let count = 0;
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] == "sheep") count++;
  }
  return count;
}

export function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  return (
    person.address.postCode.charAt(0) === "M" &&
    person.address.city === "Manchester"
  );
}
