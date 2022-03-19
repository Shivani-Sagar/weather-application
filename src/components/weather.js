import React, { useEffect, useState } from "react";

const api = {
  key: "adf4db1b86609231e294dcd96a7fd862",
  base: "https://api.openweathermap.org/data/2.5/",
};
export default function Weather() {
  const [date, setDate] = useState("");
  const getCurrentDate = () => {
    var getDate = new Date().toDateString();
    setDate(getDate);
  };
  useEffect(() => {
    getCurrentDate();
  }, []);
  return (
    <div>
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="search..."
          ></input>
        </div>
        <div className="location-box">
          <div className="location">India, NewDelhi</div>
          <div className="date">{date}</div>
        </div>
        <div className="weather-box">
          <div className="temp">30°🤗 </div>
        </div>
      </main>
    </div>
  );
}
