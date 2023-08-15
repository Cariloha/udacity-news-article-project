import { handleSubmit } from "./js/formHandler";

describe("Testing the submit functionality", () => {
  test("Testing submit button prevent default", () => {
    const preventDefault = jest.fn();
    document.body.innerHTML = `<form class="form"></form>`;
    handleSubmit();
    const form = document.querySelector(".form");
    form.dispatchEvent(new Event("submit", { cancelable: true }));
    expect(preventDefault).toHaveBeenCalled();
  });
  test("Test when the input is blank", () => {
    document.body.innerHTML = `
      <form class="form"></form>
      <input id="text" value="" />
      <div id="errorMessage"></div>
    `;
    handleSubmit();
    const form = document.querySelector(".form");
    form.dispatchEvent(new Event("submit"));
    const errorMessage = document.getElementById("errorMessage");
    expect(errorMessage.textContent).toBe("Input cannot be blank!");
  });
});
