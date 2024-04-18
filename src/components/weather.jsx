import { Day } from "./formatDay";

export function Weather({ weather, location }) {
  return (
    <div>
      <h2>Weather {location}</h2>
      <ul className="weather">
        {weather.time.map((date, i) => {
          return (
            <Day
              date={date}
              max={weather.temperature_2m_max.at(i)}
              min={weather.temperature_2m_min.at(i)}
              code={weather.weathercode.at(i)}
              key={date}
              isToday={i === 0}
            />
          );
        })}
      </ul>
    </div>
  );
}
