export const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  const nIndex = nums.indexOf(n);
  return !nIndex || nIndex === -1 || nIndex === nums.length - 1
    ? null
    : nums[nIndex + 1];
};

export const count1sand0s = (str) => {
  if (str === undefined) throw new Error("str is required");
  return {
    0: (str.match(/0/g) || []).length,
    1: (str.match(/1/g) || []).length,
  };
};

export const reverseNumber = (n) => {
  if (n === undefined) throw new Error("n is required");
  return parseInt(n.toString().split("").reverse().join(""), 10);
};

export const sumArrays = (arrs) => {
  if (arrs === undefined) throw new Error("arrs is required");
  let total = 0;
  for (let i = 0; i < arrs.length; i++) {
    const count = arrs[i].reduce((counting, currentValue) => {
      return counting + currentValue;
    }, 0);
    total = total + count;
  }
  return total;
};

export const arrShift = (arr) => {
  if (arr === undefined) throw new Error("arr is required");
  if (arr.length < 2) return arr;
  const firstChar = arr[0];
  const lastChar = arr[arr.length - 1];
  arr[0] = lastChar;
  arr[arr.length - 1] = firstChar;
  return arr;
};

export const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  let found = false;
  for (const key in haystack) {
    const val = haystack[key];
    if (
      typeof val === "string" &&
      val.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      found = true;
    }
  }
  return found;
};

export const getWordFrequencies = (str) => {
  if (str === undefined) throw new Error("str is required");
  const lowercaseString = str.toLowerCase();
  const cleanedString = lowercaseString.replace(/[^a-z0-9\s]/g, "");
  const wordsArray = cleanedString.split(/\s+/);
  let countWords = {};
  for (let i = 0; i < wordsArray.length; i++) {
    const word = wordsArray[i];
    if (countWords[word]) countWords[word] = countWords[word] + 1;
    else countWords[word] = 1;
  }
  return countWords;
};
