export function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  if (!nums.length) return nums;
  return nums.map((number) => number * number);
}

export function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  return words.reduce((result, word, index) => {
    if (index === 0) {
      return result + word.toLowerCase();
    } else {
      return result + word.charAt(0).toUpperCase() + word.slice(1);
    }
  }, "");
}

export function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  let count = 0;
  for (let i = 0; i <= people.length - 1; i++) {
    count = count + people[i].subjects.length;
  }
  return count;
}

export function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  for (let i = 0; i <= menu.length - 1; i++) {
    if (menu[i].ingredients.indexOf(ingredient) !== -1) return true;
  }
  return false;
}

export function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  let duplicates = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i]) && !duplicates.includes(arr1[i])) {
      duplicates.push(arr1[i]);
    }
  }
  return duplicates.sort((a, b) => a - b);
}
