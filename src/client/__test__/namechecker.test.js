import { handleSubmit } from "./src/js/nameChecker.js";

describe("Testing name checker functionality", () => {
  test("Testing the checkForName() function", () => {
    const input = [];

    const output = [];

    expect(handleSubmit(input, "input")).toEqual(output);
  });
});
