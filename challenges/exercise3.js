export function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  let smallNumbers = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 1) smallNumbers.push(nums[i]);
  }
  return smallNumbers;
}

export function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  let filtererdNames = [];
  for (let i = 0; i < names.length; i++) {
    if (names[i].charAt(0) === char) filtererdNames.push(names[i]);
  }
  return filtererdNames;
}

export function findVerbs(words) {
  if (!words) throw new Error("words is required");
  let verbs = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].startsWith("to ")) verbs.push(words[i]);
  }
  return verbs;
}

export function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  let integers = [];
  for (let i = 0; i < nums.length; i++) {
    if (Number.isInteger(nums[i])) integers.push(nums[i]);
  }
  return integers;
}

export function getCities(users) {
  if (!users) throw new Error("users is required");
  let cities = [];
  for (let i = 0; i < users.length; i++) {
    cities.push(users[i].data.city.displayName);
  }
  return cities;
}

export function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  return nums.map((number) => Number(Math.sqrt(number).toFixed(2)));
}

export function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  let foundSentences = [];
  for (let i = 0; i < sentences.length; i++) {
    if (sentences[i].toLowerCase().includes(str.toLowerCase()))
      foundSentences.push(sentences[i]);
  }
  return foundSentences;
}

export function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  return triangles.map((triangle) => {
    const sorted = [...triangle].sort((a, b) => a - b);
    return sorted[sorted.length - 1];
  });
}
