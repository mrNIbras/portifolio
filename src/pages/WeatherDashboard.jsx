import { useState } from "react";
import SearchBar from "@/components/weather/SearchBar";
import WeatherCard from "@/components/weather/WeatherCard";
import ForecastCard from "@/components/weather/ForecastCard";
import { Button } from "@/components/ui/button.jsx";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { getMockWeatherData, getAvailableCities } from "@/data/mockWeatherData";

const WeatherDashboard = () => {
  const [weather, setWeather] = useState(null); // Removed type annotation
  const [forecast, setForecast] = useState(null); // Removed type annotation
  
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const availableCities = getAvailableCities();

  const fetchWeather = async (city) => {
    setLoading(true);
    
    // Simulate API delay for realistic feel
    await new Promise(resolve => setTimeout(resolve, 500));
    
    try {
      const data = getMockWeatherData(city);
      
      if (!data) {
        throw new Error(`City "${city}" not found. Try ${availableCities.slice(0, 3).join(", ")}`);
        
      }
      
      setWeather(data.current);
      setForecast(data.forecast);

      toast({
        title: "Success",
        description: `Weather data loaded for ${data.current.name}`
      });
    } catch (error) {
      toast({
        title: "Error",
        description: error.message || "Failed to fetch weather data",
        variant: "destructive"
      });
       setWeather(null);
      setForecast(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Button variant="ghost" asChild className="mb-4">
            <Link to="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Portfolio
            </Link>
          </Button>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Weather Dashboard
          </h1>
          <p className="text-muted-foreground text-lg mb-4">
            Search for any city to see current weather and 5-day forecast (Demo using mock data)
          </p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-sm text-muted-foreground">Try these cities</span>
            {availableCities.map((city) => (
              <Badge 
                key={city}
                variant="outline" 
                className="cursor-pointer hover:bg-primary/10 transition-colors"
                onClick={() => fetchWeather(city)}
              >
                {city}
              </Badge>
            ))}
          </div>
        </div>

        <SearchBar onSearch={fetchWeather} loading={loading} />

        {weather && (
          <div className="mt-8">
            <WeatherCard weather={weather} />
          </div>
        )}

        {forecast && (
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">5-Day Forecast</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {forecast.list.map((item) => (
                <ForecastCard key={item.dt} forecast={item} />
              ))}
            </div>
          </div>
        )}

        {!weather && !loading && (
          <div className="mt-16 text-center">
            <p className="text-muted-foreground text-lg">
              Click on a city badge or search to get started
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherDashboard;
