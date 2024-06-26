// app/page.tsx (or your component file)
"use client";

import getWeatherData from "../lib/weather-data";
import { useEffect, useState } from "react";

// weather-data.ts (atau file terpisah untuk interface/type)

interface Suhu {
  celsius: number;
  fahrenheit: number;
}

interface Ramalan {
  tanggal: string;
  kondisi: string;
  suhu: Suhu;
}

interface Cuaca {
  kondisi: string;
  suhu: Suhu;
  kelembaban: number;
}

interface WeatherData {
  kota: string;
  tanggal: string;
  cuaca: Cuaca;
  ramalan: Ramalan[];
}

const Weather: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherData[]>([]); // Inisialisasi sebagai array kosong
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

    const fetchData = async () => {
      setLoading(true);
    try {
      const data = await getWeatherData();
      setWeatherData(data);
      console.log(data);
    } catch (err) {
      setError(err as Error); // Tangkap error dan simpan di state
    } finally {
      setLoading(false);
    }
  };

  //   fetchData();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Weather Data</h1>

          <button onClick={() => fetchData()}>Get Weather</button>
          
          {loading ? <p>Loading...</p> : (
              <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {weatherData.map((weather, index) => (
                  <li key={index} className="bg-white rounded-lg shadow-md p-4">
                    <h2 className="text-xl font-semibold mb-2">{weather.kota}</h2>
                    <p className="text-gray-600">Tanggal: {weather.tanggal}</p>
                    <p className="text-lg font-medium mb-1">{weather.cuaca.kondisi}</p>
                    <p className="text-gray-600">
                      Suhu: {weather.cuaca.suhu.celsius}°C /{" "}
                      {weather.cuaca.suhu.fahrenheit}°F
                    </p>
                    <p className="text-gray-600">
                      Kelembaban: {weather.cuaca.kelembaban}%
                    </p>
        
                    <h3 className="text-lg font-semibold mt-4 mb-2">Ramalan:</h3>
                    <ul className="list-disc list-inside pl-4">
                      {weather.ramalan.map((ramalan: Ramalan, idx) => (
                        <li key={idx} className="mb-1">
                          <p className="text-gray-600">Tanggal: {ramalan.tanggal}</p>
                          <p>{ramalan.kondisi}</p>
                          <p className="text-gray-600">
                            Suhu: {ramalan.suhu.celsius}°C / {ramalan.suhu.fahrenheit}°F
                          </p>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
          )}
    </div>
  );
};

export default Weather;
