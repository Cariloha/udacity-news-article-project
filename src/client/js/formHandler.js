function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  let formText = document.getElementById("name").value;

  Client.checkForName(formText);

  console.log("::: Form Submitted :::");
  // fetch("http://localhost:8081/test")
  //   .then((res) => {
  //     return res.json();
  //   })
  //   .then(function (data) {
  //     document.getElementById("results").innerHTML = data.message;
  //   });
  const formdata = new FormData();
  formdata.append("key", "cf5798ac92305cdb8fc957a895af304f");
  formdata.append("txt", "YOUR TEXT HERE");
  formdata.append("lang", "TEXT LANGUAGE HERE"); // 2-letter code, like en es fr ...

  const requestOptions = {
    method: "POST",
    body: formdata,
    redirect: "follow",
  };

  const response = fetch(
    "https://api.meaningcloud.com/sentiment-2.1",
    requestOptions
  )
    .then((response) => ({
      status: response.status,
      body: response.json(),
    }))
    .then(({ status, body }) => console.log(status, body))
    .catch((error) => console.log("error", error));
}

export { handleSubmit };
