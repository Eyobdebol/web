const url = "https://official-joke-api.appspot.com/random_ten"; // countries api
fetch(url)
  .then((response) => response.json()) // accessing the API data as JSON
  .then((data) => {
    data.array.forEach(element => {
      
    });
  })
  .catch((error) => console.error(error)); // handling error if something wrong happens