import {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner,
} from "../challenges/exercise6-optional";

describe("sumDigits", () => {
  test("take a number and return the sum of all its digits", () => {
    expect(sumDigits(357)).toBe(15);
    expect(sumDigits(100)).toBe(1);
    expect(sumDigits(0)).toBe(0);
  });
});

describe("createRange", () => {
  test("return a range of numbers as an array, from 'start' to 'stop', with a default step of 1", () => {
    expect(createRange(2, 4)).toEqual([2, 3, 4]);
    expect(createRange(10, 40, 10)).toEqual([10, 20, 30, 40]);
  });
});

describe("getScreentimeAlertList", () => {
  const users = [
    {
      username: "beth_1234",
      name: "Beth Smith",
      screenTime: [
        {
          date: "2019-05-01",
          usage: { twitter: 34, instagram: 22, facebook: 40 },
        },
        {
          date: "2019-05-02",
          usage: { twitter: 56, instagram: 40, facebook: 31 },
        },
        {
          date: "2019-05-03",
          usage: { twitter: 12, instagram: 15, facebook: 19 },
        },
        {
          date: "2019-05-04",
          usage: { twitter: 10, instagram: 56, facebook: 61 },
        },
      ],
    },
    {
      username: "sam_j_1989",
      name: "Sam Jones",
      screenTime: [
        {
          date: "2019-06-11",
          usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 },
        },
        {
          date: "2019-06-13",
          usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 },
        },
        {
          date: "2019-06-14",
          usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 },
        },
      ],
    },
  ];
  test("return user screentime above 100 minutes of various applications", () => {
    expect(getScreentimeAlertList(users, "2019-05-04")).toEqual(["beth_1234"]);
    expect(getScreentimeAlertList(users, "2019-06-11")).toEqual([]);
  });
});

describe("hexToRGB", () => {
  const hex = "#FF1133";
  const rgb = "rgb(255,17,51)";
  test("return RGB color from a hexadecimal color", () => {
    expect(hexToRGB("#FF1133")).toEqual("rgb(255,17,51)");
    expect(hexToRGB("#FF0000")).toEqual("rgb(255,0,0)");
    expect(hexToRGB("#000000")).toEqual("rgb(0,0,0)");
  });
});

describe("findWinner", () => {
  const board1 = [
    ["X", "0", null],
    ["X", null, "0"],
    ["X", null, "0"],
  ];
  test("return 'X' if player X has won", () => {
    expect(findWinner(board1)).toEqual("X");
  });
  const board2 = [
    ["X", null, "O"],
    ["X", "O", "X"],
    ["O", null, "X"],
  ];
  test("return 'O' if player O has won", () => {
    expect(findWinner(board2)).toEqual("O");
  });
  const board3 = [
    ["X", null, null],
    ["X", "O", "X"],
    ["O", null, "X"],
  ];
  test("return 'null' if no player has won", () => {
    expect(findWinner(board3)).toEqual(null);
  });
});
