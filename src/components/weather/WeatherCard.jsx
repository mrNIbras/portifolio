import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cloud, Droplets, Wind, Gauge } from "lucide-react";

const WeatherCard = ({ weather }) => {
  return (
    <Card className="bg-card/50 backdrop-blur-sm border-border/50">
      <CardHeader>
        <CardTitle className="text-3xl">
          {weather.name}, {weather.sys.country}
        </CardTitle>
        <p className="text-muted-foreground">
          {new Date(weather.dt * 1000).toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
              alt={weather.weather[0].description}
              className="w-24 h-24"
            />
            <div>
              <p className="text-6xl font-bold">{Math.round(weather.main.temp)}°C</p>
              <p className="text-muted-foreground capitalize">
                {weather.weather[0].description}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex items-center gap-2 p-3 bg-background/50 rounded-lg">
            <Cloud className="w-5 h-5 text-primary" />
            <div>
              <p className="text-sm text-muted-foreground">Feels Like</p>
              <p className="text-lg font-semibold">{Math.round(weather.main.feels_like)}°C</p>
            </div>
          </div>

          <div className="flex items-center gap-2 p-3 bg-background/50 rounded-lg">
            <Droplets className="w-5 h-5 text-primary" />
            <div>
              <p className="text-sm text-muted-foreground">Humidity</p>
              <p className="text-lg font-semibold">{weather.main.humidity}%</p>
            </div>
          </div>

          <div className="flex items-center gap-2 p-3 bg-background/50 rounded-lg">
            <Wind className="w-5 h-5 text-primary" />
            <div>
              <p className="text-sm text-muted-foreground">Wind Speed</p>
              <p className="text-lg font-semibold">{weather.wind.speed} m/s</p>
            </div>
          </div>

          <div className="flex items-center gap-2 p-3 bg-background/50 rounded-lg">
            <Gauge className="w-5 h-5 text-primary" />
            <div>
              <p className="text-sm text-muted-foreground">Pressure</p>
              <p className="text-lg font-semibold">{weather.main.pressure} hPa</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
