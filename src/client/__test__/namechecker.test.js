import { checkForName } from "./js/nameChecker";

describe("Testing name checker functionality", () => {
  global.alert = jest.fn();
  test("Testing the checkForName() function", () => {
    const input = "Picard";
    global.alert.mockClear();
    checkForName(input);
    expect(global.alert).toEqual("Welcome, Captain");
  });
  test("Testing the checkFornName() function when invalid name", () => {
    const input = "NotValidName";
    global.alert.mockClear();
    checkForName(input);
    expect(global.alert).not.toEqual();
  });
});
