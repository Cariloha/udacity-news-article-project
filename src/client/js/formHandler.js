function handleSubmit() {
  // check what text was put into the form field
  const form = document.querySelector(".form");
  let tagName = "";

  // Client.checkForName(formText);

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    let formText = document.getElementById("text").value;

    if (!formText) {
      document.getElementById("errorMessage").textContent =
        "Input cannot be blank!";
    } else {
      const formdata = new FormData();

      formdata.append("key", "cf5798ac92305cdb8fc957a895af304f");
      formdata.append("txt", formText);
      formdata.append("lang", "en"); // 2-letter code, like en es fr ...

      const requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow",
      };

      fetchData(requestOptions);
    }
  });

  async function fetchData(requestOptions) {
    try {
      const response = await fetch(
        "https://api.meaningcloud.com/sentiment-2.1",
        requestOptions
      );
      const data = await response.json();
      let tag = data.score_tag;
      let subjectivity = data.subjectivity;
      let text = data.sentence_list[0].text;
      let property = tag;
      switchF(property);
      requestResponse(tagName, subjectivity, text);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  function switchF(property) {
    switch (property) {
      case "P+":
        tagName = "Strong Positive";
        break;
      case "P":
        tagName = "Positive";
        break;
      case "NEU":
        tagName = "Neutral";
        break;
      case "N":
        tagName = "Negative";
        break;
      case "N+":
        tagName = "Strong Negative";
        break;
      case "NONE":
        tagName = "Without Polarity";
        break;
      default:
        tagName = "Unknown value";
    }
  }

  function requestResponse(tagName, subjectivity, text) {
    const results = document.getElementById("results");
    results.innerHTML = `<p> ${tagName} </p><p class="lower">${subjectivity}</p><p>${text}</p>`;
  }
}

export { handleSubmit };
