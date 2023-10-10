import {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered,
} from "../challenges/exercise5";

describe("sumMultiples", () => {
  test("returns the sum of any numbers which are a multiple of 3 or 5", () => {
    expect(sumMultiples([3, 5])).toBe(8);
  });
  test("returns zero if the numbers are not multiples of 3 or 5", () => {
    expect(sumMultiples([7, 11])).toBe(0);
  });
});

describe("isValidDNA", () => {
  test("return true/false depending on whether it is a valid DNA string. A valid DNA string may contain characters C, G, T or A only", () => {
    expect(isValidDNA("CGTACGTAGTA")).toBe(true);
    expect(isValidDNA("ABC")).toBe(false);
    expect(isValidDNA("CGTACXGTAGTA")).toBe(false);
    expect(isValidDNA("CGTACX123AGTA")).toBe(false);
    expect(isValidDNA("CTA")).toBe(false);
  });
  test("is case sensitive", () => {
    expect(isValidDNA("ctag")).toBe(false);
  });
});

describe("getComplementaryDNA", () => {
  test("return a string of the complementary base pairs. In DNA, T always pairs with A, and C always pairs with G.", () => {
    expect(getComplementaryDNA("ACTG")).toBe("TGAC");
    expect(getComplementaryDNA("TGAC")).toBe("ACTG");
  });
});

describe("isItPrime", () => {
  test("return true/false depending on whether number is prime number or not", () => {
    expect(isItPrime(7)).toBe(true);
    expect(isItPrime(12)).toBe(false);
    expect(isItPrime(1)).toBe(false);
    expect(isItPrime(0)).toBe(false);
  });
});

describe("createMatrix", () => {
  test("return an array of n arrays, each filled with n items. The parameter 'fill' should be used as the filler of the arrays.", () => {
    expect(createMatrix(3, "foo")).toEqual([
      ["foo", "foo", "foo"],
      ["foo", "foo", "foo"],
      ["foo", "foo", "foo"],
    ]);
  });
});

describe("areWeCovered", () => {
  test("return true/false depending on whether there are enough staff scheduled for the given day - at least 3 staff members are required per day.", () => {
    const staff = [
      { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
      { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
      { name: "Jimmy", rota: ["Monday", "Tuesday", "Friday"] },
      { name: "Jonny", rota: ["Saturday", "Sunday", "Tuesday"] },
      { name: "Sarah", rota: ["Monday", "Tuesday", "Friday"] },
      { name: "Alex", rota: ["Saturday", "Sunday", "Tuesday"] },
      { name: "Jack", rota: ["Monday", "Tuesday", "Friday"] },
      { name: "Jill", rota: ["Saturday", "Sunday", "Tuesday", "Thursday"] },
    ];
    expect(areWeCovered(staff, "Monday")).toBe(true);
    expect(areWeCovered(staff, "Tuesday")).toBe(true);
    expect(areWeCovered(staff, "Wednesday")).toBe(false);
    expect(areWeCovered(staff, "Thursday")).toBe(false);
    expect(areWeCovered(staff, "Friday")).toBe(true);
    expect(areWeCovered(staff, "Saturday")).toBe(true);
    expect(areWeCovered(staff, "Sunday")).toBe(true);
  });
});
