import React, { useEffect, useState } from "react";

const api = {
  key: "adf4db1b86609231e294dcd96a7fd862",
  base: "https://api.openweathermap.org/data/2.5/",
};
export default function Weather() {
  const [date, setDate] = useState("");
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState("");
  const [err, setErr] = useState("");
  const getCurrentDate = () => {
    var getDate = new Date().toDateString();
    setDate(getDate);
  };
  useEffect(() => {
    getCurrentDate();
  }, []);

  const search =async (event) => {
    if (event.key == "Enter") {
        try{
    await  fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res => {
            if (res.status >= 400) {
                throw new Error(setErr("Server responds with error!"))
            }
            return res.json()
        }))
        .then(
          (result) => (console.log(result), setWeather(result)),
          setQuery("")
        )
        }

        catch(err) {console.log(err,"ssssss")}
    }
  };
  return (
    <div className={(typeof weather != undefined) ? (weather?.main?.temp >16) ? 'app' : 'cold' : 'app'}>
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="search..."
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          ></input>
        </div>
        <div className="location-box">
          {weather ? (
            <>
              {" "}
              <div className="location">
                 {weather?.name} , {weather?.sys?.country}
              </div>
              <div className="date">{date}</div>{" "}
            </>
          ) : (<>
            <div className="location">Please Enter City </div>
            <div className="location">{err} </div>
            </>
            
          )}
          
        </div>
        <div className="weather-box">
          {weather ? (
            <>
              <div className="temp">
                {" "}
                {Math.round(weather?.main?.temp) + "°"}{" "}
              </div>
              <div className="weather">
                {" "}
                {weather?.weather[0].description}{" "}
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      </main>
    </div>
  );
}
