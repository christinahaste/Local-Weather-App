let temperatureDescription = document.querySelector(".temperature-description");
let temperatureDegree = document.querySelector(".temperature-degree");
let locationLocation = document.querySelector(".location-location");
let locationCountry = document.querySelector(".country");
let temperatureSpan = document.querySelector(".degree-section span");
let secondDegree = document.querySelector(".second-degree");
let tempHigh = document.querySelector(".high");
let tempLow = document.querySelector(".low");

window.addEventListener("load", () => {
  let long;
  let lat;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      long = position.coords.longitude; //RIO DE JAN -43.182365;
      lat = position.coords.latitude; //RIO DE JAN -22.970722;

      //const proxy = 'https://cors-anywhere.herokuapp.com/'; //${proxy}  //NOT NECESSARY WITH OPEN WEATHER MAP
      const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=25bc3352d84baf186ad0f0dade079b8f`;
      //to get the information we will use fetch() to get info from the URL above
      fetch(api)
        .then((response) => {
          //after fetched api do this (response is just a word that can be any word)
          return response.json(); //return a json file
        })

        .then((base) => {
          console.log(base);

          function weatherIcon() {
            if (base.weather[0].icon === "01d") {
              document.querySelector(".icon").src = "weather-icons/daysun.png";
            } else if (base.weather[0].icon === "01n") {
              document.querySelector(".icon").src =
                "weather-icons/nightclear.png";
            } else if (base.weather[0].icon === "02d") {
              document.querySelector(".icon").src =
                "weather-icons/sunandclouds.png";
            } else if (base.weather[0].icon === "02n") {
              document.querySelector(".icon").src =
                "weather-icons/nightclouds.png";
            } else if (base.weather[0].icon === "03d") {
              document.querySelector(".icon").src =
                "weather-icons/cloudyday.png";
            } else if (base.weather[0].icon === "03n") {
              document.querySelector(".icon").src =
                "weather-icons/nightclouds.png";
            } else if (base.weather[0].icon === "04d") {
              document.querySelector(".icon").src =
                "weather-icons/cloudyday.png";
            } else if (base.weather[0].icon === "04n") {
              document.querySelector(".icon").src =
                "weather-icons/nightclouds.png";
            } else if (base.weather[0].icon === "09d") {
              document.querySelector(".icon").src =
                "weather-icons/raincloudsday.png";
            } else if (base.weather[0].icon === "09n") {
              document.querySelector(".icon").src =
                "weather-icons/raincloudsnight.png";
            } else if (base.weather[0].icon === "10d") {
              document.querySelector(".icon").src = "weather-icons/dayrain.png";
            } else if (base.weather[0].icon === "10n") {
              document.querySelector(".icon").src =
                "weather-icons/raincloudsnight.png";
            } else if (base.weather[0].icon === "11d") {
              document.querySelector(".icon").src =
                "weather-icons/thunderday.png";
            } else if (base.weather[0].icon === "11n") {
              document.querySelector(".icon").src =
                "weather-icons/thundernight.png";
            } else if (base.weather[0].icon === "13d") {
              document.querySelector(".icon").src = "weather-icons/snowday.png";
            } else if (base.weather[0].icon === "13n") {
              document.querySelector(".icon").src =
                "weather-icons/snownight.png";
            } else if (base.weather[0].icon === "50d") {
              document.querySelector(".icon").src = "weather-icons/mistday.png";
            } else if (base.weather[0].icon === "50n") {
              document.querySelector(".icon").src =
                "weather-icons/mistnight.png";
            }
          }
          weatherIcon();

          const { temp, summary, icon } = base.main; //summary actually isn't necessary because of different api
          const weather = base.weather;
          const location = base.name;
          const country = base.sys.country;
          const farenheit = Math.floor((temp - 273.15) * (9 / 5) + 32); //taken from the const variable above  /kelvin to farenheit
          const celsius = Math.floor(temp - 273.15); //kelvin to celsius
          const low = Math.floor((base.main.temp_min - 273.15) * (9 / 5) + 32);
          const high = Math.floor((base.main.temp_max - 273.15) * (9 / 5) + 32);

          temperatureDegree.textContent = farenheit;
          temperatureDescription.textContent = weather[0].main;
          locationLocation.textContent = location;

          secondDegree.addEventListener("click", () => {
            if (secondDegree.textContent === "| \u00B0C") {
              //<span>/ &#176;C</span>
              temperatureSpan.textContent = "\u00B0C";
              secondDegree.textContent = "| \u00B0F";
              temperatureDegree.textContent = celsius;
            } else {
              temperatureSpan.innerHTML = "\u00B0F";
              secondDegree.textContent = "| \u00B0C";
              temperatureDegree.textContent = farenheit;
            }
          });

          if (temp >= 296) {
            document.body.style.backgroundImage =
              "url('images/gautier-salles-uffQnKuJ-hc-unsplash.jpg')";
          } else if (temp <= 270) {
            document.body.style.backgroundImage =
              "url('images/landon-arnold-ZtOcWht8r34-unsplash.jpg')";
          } else {
            document.body.style.backgroundImage =
              "url('images/shutterstock_1895033005.jpg')";
            // "url('images/eric-chen-u5MyPfbvKww-unsplash.jpg')"
          }
        });
    });
  }
});
