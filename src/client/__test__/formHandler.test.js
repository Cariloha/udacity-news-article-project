import { handleSubmit } from "./src/js/formHandler.js";

describe("Testing the submit functionality", () => {
  test("Testing the handleSubmit() function", () => {
    const input = [];

    const output = [];

    expect(handleSubmit(input, "input")).toEqual(output);
  });
});
