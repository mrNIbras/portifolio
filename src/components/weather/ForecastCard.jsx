import { Card, CardContent } from "@/components/ui/card";
import { format } from "date-fns";

const ForecastCard = ({ forecast }) => {
  const date = new Date(forecast.dt * 1000);

  return (
    <Card className="text-center bg-card/50 backdrop-blur-sm border-border/50">
      <CardContent className="p-4 text-center">
        <p className="font-semibold mb-2">
          {date.toLocaleDateString("en-US", { weekday: "short" })}
        </p>
        <p className="text-sm text-muted-foreground mb-3">
          {date.toLocaleDateString("en-US", { month: "short", day: "numeric" })}
        </p>
        <img
          src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}
          alt={forecast.weather[0].description}
          className="w-16 h-16 mx-auto"
        />
        <p className="font-semibold text-lg">{Math.round(forecast.main.temp)}°C</p>
        <p className="text-sm text-muted-foreground capitalize mt-1">
          {forecast.weather[0].description}
        </p>
        <p className="text-xs text-muted-foreground mt-2">
          Humidity: {forecast.main.humidity}%
        </p>
      </CardContent>
    </Card>
  );
};

export default ForecastCard;
