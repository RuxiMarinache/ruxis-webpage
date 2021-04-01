import React, { useState } from "react";
import "./Weather.css";

const api = {
    key: "86c3da6a4d46688ccc28f76d7cf093b3",
    base: "https://api.openweathermap.org/data/2.5/"
};

function Weather() {
    const [searchBox, setSearchBox] = useState("");
    const [city, setCity] = useState("Bucharest, RO");
    const [date, setDate] = useState("2021");
    const [temp, setTemp] = useState(20);
    const [theWeather, setTheWeather] = useState("Sunny");

    function setQuery(event) {
        if (event.key === "Enter") {
            getResults(searchBox);
        }
    }

    function getResults(query) {
        fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
            .then(weather => {
                return weather.json();
            })
            .then(displayResults);
    }

    function displayResults(weather) {
        console.log(weather);
        let cityName = `${weather.name}, ${weather.sys.country}`;
        setCity(cityName);

        let now = new Date();
        let ourDate = dateBuilder(now);
        setDate(ourDate);

        let ourTemp = `${Math.round(weather.main.temp)}`;
        setTemp(ourTemp);

        let ourWeather = weather.weather[0].main;
        setTheWeather(ourWeather);
    }

    function dateBuilder(d) {
        let months = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ];
        let days = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
        ];

        let day = days[d.getDay()];
        let anotherDate = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return `${day} ${anotherDate} ${month} ${year}`;
    }

    return (
        <div className="weather-app">
            <input
                type="text"
                value={searchBox}
                placeholder="Search city..."
                onChange={event => setSearchBox(event.target.value)}
                onKeyPress={setQuery}
                className="search-box"
            />
            <main>
                <section className="location">
                    <div className="city">{city}</div>
                    <div className="date">{date}</div>
                </section>
                <div className="current">
                    <div className="temp">
                        {temp}
                        <span>°C</span>
                    </div>
                    <div className="weather">{theWeather}</div>
                </div>
            </main>
        </div>
    );
}

export default Weather;
