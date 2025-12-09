const weatherDatabase = {
  london: {
    current: {
      name: "London",
      sys: { country: "GB" },
      main: {
        temp: 15,
        feels_like: 14,
        humidity: 80,
        pressure: 1012,
      },
      weather: [
        {
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      wind: { speed: 4.5 },
      dt: Date.now() / 1000,
    },
    forecast: {
      list: [
        {
          dt: Date.now() / 1000 + 86400,
          main: { temp: 12 },
          weather: [{ main: "Rain", description: "light rain", icon: "10d" }],
          dt_txt: new Date(Date.now() + 86400000).toISOString(),
        },
        {
          dt: Date.now() / 1000 + 172800,
          main: { temp: 14 },
          weather: [{ main: "Clouds", description: "broken clouds", icon: "04d" }],
          dt_txt: new Date(Date.now() + 172800000).toISOString(),
        },
        {
          dt: Date.now() / 1000 + 259200,
          main: { temp: 16 },
          weather: [{ main: "Clear", description: "clear sky", icon: "01d" }],
          dt_txt: new Date(Date.now() + 259200000).toISOString(),
        },
        {
          dt: Date.now() / 1000 + 345600,
          main: { temp: 17 },
          weather: [{ main: "Clear", description: "clear sky", icon: "01d" }],
          dt_txt: new Date(Date.now() + 345600000).toISOString(),
        },
        {
          dt: Date.now() / 1000 + 432000,
          main: { temp: 15 },
          weather: [{ main: "Clouds", description: "few clouds", icon: "02d" }],
          dt_txt: new Date(Date.now() + 432000000).toISOString(),
        },
      ],
    },
  },
  paris: {
    current: {
      name: "Paris",
      sys: { country: "FR" },
      main: {
        temp: 20,
        feels_like: 19,
        humidity: 60,
        pressure: 1015,
      },
      weather: [
        {
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      wind: { speed: 3.2 },
      dt: Date.now() / 1000,
    },
    forecast: {
      list: [
        {
          dt: Date.now() / 1000 + 86400,
          main: { temp: 22 },
          weather: [{ main: "Clear", description: "clear sky", icon: "01d" }],
          dt_txt: new Date(Date.now() + 86400000).toISOString(),
        },
        {
          dt: Date.now() / 1000 + 172800,
          main: { temp: 21 },
          weather: [{ main: "Clouds", description: "scattered clouds", icon: "03d" }],
          dt_txt: new Date(Date.now() + 172800000).toISOString(),
        },
        {
          dt: Date.now() / 1000 + 259200,
          main: { temp: 23 },
          weather: [{ main: "Clear", description: "clear sky", icon: "01d" }],
          dt_txt: new Date(Date.now() + 259200000).toISOString(),
        },
        {
          dt: Date.now() / 1000 + 345600,
          main: { temp: 20 },
          weather: [{ main: "Clear", description: "clear sky", icon: "01d" }],
          dt_txt: new Date(Date.now() + 345600000).toISOString(),
        },
        {
          dt: Date.now() / 1000 + 432000,
          main: { temp: 18 },
          weather: [{ main: "Rain", description: "light rain", icon: "10d" }],
          dt_txt: new Date(Date.now() + 432000000).toISOString(),
        },
      ],
    },
  },
  tokyo: {
    current: {
      name: "Tokyo",
      sys: { country: "JP" },
      main: {
        temp: 25,
        feels_like: 26,
        humidity: 75,
        pressure: 1008,
      },
      weather: [
        {
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      wind: { speed: 2.1 },
      dt: Date.now() / 1000,
    },
    forecast: {
      list: [
        {
          dt: Date.now() / 1000 + 86400,
          main: { temp: 26 },
          weather: [{ main: "Clear", description: "clear sky", icon: "01d" }],
          dt_txt: new Date(Date.now() + 86400000).toISOString(),
        },
        {
          dt: Date.now() / 1000 + 172800,
          main: { temp: 24 },
          weather: [{ main: "Clouds", description: "few clouds", icon: "02d" }],
          dt_txt: new Date(Date.now() + 172800000).toISOString(),
        },
        {
          dt: Date.now() / 1000 + 259200,
          main: { temp: 27 },
          weather: [{ main: "Clear", description: "clear sky", icon: "01d" }],
          dt_txt: new Date(Date.now() + 259200000).toISOString(),
        },
        {
          dt: Date.now() / 1000 + 345600,
          main: { temp: 22 },
          weather: [{ main: "Rain", description: "moderate rain", icon: "10d" }],
          dt_txt: new Date(Date.now() + 345600000).toISOString(),
        },
        {
          dt: Date.now() / 1000 + 432000,
          main: { temp: 23 },
          weather: [{ main: "Clouds", description: "broken clouds", icon: "04d" }],
          dt_txt: new Date(Date.now() + 432000000).toISOString(),
        },
      ],
    },
  },
  "new york": {
    current: {
      name: "New York",
      sys: { country: "US" },
      main: {
        temp: 18,
        feels_like: 17,
        humidity: 85,
        pressure: 1010,
      },
      weather: [
        {
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      wind: { speed: 5.3 },
      dt: Date.now() / 1000,
    },
    forecast: {
      list: [
        {
          dt: Date.now() / 1000 + 86400,
          main: { temp: 19 },
          weather: [{ main: "Rain", description: "moderate rain", icon: "10d" }],
          dt_txt: new Date(Date.now() + 86400000).toISOString(),
        },
        {
          dt: Date.now() / 1000 + 172800,
          main: { temp: 20 },
          weather: [{ main: "Clouds", description: "overcast clouds", icon: "04d" }],
          dt_txt: new Date(Date.now() + 172800000).toISOString(),
        },
        {
          dt: Date.now() / 1000 + 259200,
          main: { temp: 22 },
          weather: [{ main: "Clear", description: "clear sky", icon: "01d" }],
          dt_txt: new Date(Date.now() + 259200000).toISOString(),
        },
        {
          dt: Date.now() / 1000 + 345600,
          main: { temp: 21 },
          weather: [{ main: "Clear", description: "clear sky", icon: "01d" }],
          dt_txt: new Date(Date.now() + 345600000).toISOString(),
        },
        {
          dt: Date.now() / 1000 + 432000,
          main: { temp: 20 },
          weather: [{ main: "Clouds", description: "scattered clouds", icon: "03d" }],
          dt_txt: new Date(Date.now() + 432000000).toISOString(),
        },
      ],
    },
  },
};

export const getMockWeatherData = (city) => {
  const normalizedCity = city.toLowerCase().trim();
  return weatherDatabase[normalizedCity] || null;
};

export const getAvailableCities = () => {
  return Object.keys(weatherDatabase).map(
    (city) => city.split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" "),
  );
};
