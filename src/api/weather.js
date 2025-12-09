// src/api/weather.js
import { getMockWeatherData, getAvailableCities } from "@/data/mockWeatherData";

export const fetchWeatherData = async (city) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  const data = getMockWeatherData(city);
  
  if (!data) {
    const availableCities = getAvailableCities();
    throw new Error(`City "${city}" not found. Try ${availableCities.slice(0, 3).join(", ")}`);
  }
  
  return data;
};
