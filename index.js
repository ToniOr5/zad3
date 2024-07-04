
const apiUrl = "https://api.chucknorris.io/jokes/random";

fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    const joke = data.value;
    // Display the joke on your website or app
    document.write(joke);
    console.log(joke);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
