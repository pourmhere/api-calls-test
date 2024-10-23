let lat = 25.008877;
let long = 54.986685;
const apiKey = "29ea59008d3de05217a39030c2557701"; // Use your API key here
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`;

// let zzz = document.getElementById("zzz");
// let feels_like = document.getElementById("feels_like");

// async function apiCall() {
  //   let lat = 25.008877;
  //   let long = 54.986685;
  //   const apiKey = "29ea59008d3de05217a39030c2557701"; // Use your API key here
  //   const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`;
  
  //   const response = await fetch(apiUrl);
  //   const data = await response.json();
  //   zzz.textContent = await data.main.temp;
  //   feels_like.textContent = await data.main.feels_like;
  //   namez.textContent = await JSON.stringify(data);
  
  //   console.log(data);
  // }
  
  // apiCall();
  
  // let btn = document.getElementById("btn");
  async function getData() {
  try {
    let a = "https://jsonplaceholder.typicode.com/posts/1";
    const response = await axios.get(apiUrl);
    const data = response.data;
    console.log(data);
    console.log("Sdfsdfsdf");
  } catch (error) {
    console.log(error.response);
    console.log("eeeeeeeeeeeee");
  }
}

getData()

// btn.addEventListener("click", getData);
