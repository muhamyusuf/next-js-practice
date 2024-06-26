// lib/weather-data.ts
export default async function getWeatherData() {
    try {
      const response = await fetch("https://6b5f1d2f13724369ae29f8273a2c617b.api.mockbin.io/");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error; // Melempar error untuk ditangani di komponen
    }
  }
  