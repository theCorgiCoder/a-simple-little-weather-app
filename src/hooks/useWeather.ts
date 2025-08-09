import {useState, useCallback} from "react";
import {getCurrentWeather, getForecast} from "../services/weatherService";
import type { CurrentWeatherResponse, WeatherForecastResponse } from '../types/weather'

interface UseWeatherProps {
    currentWeather: CurrentWeatherResponse | null;
    forecast: WeatherForecastResponse | null;
    isLoading: boolean;
    error: string | null;
    fetchWeatherData: (city: string, countryCode?: string) =>  Promise<void>;
    clearError: () => void;
}

export const useWeather = (): UseWeatherProps => {
    const [currentWeather, setCurrentWeather] = useState<CurrentWeatherResponse | null>(null);
    const [forecast, setForecast] = useState<WeatherForecastResponse | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchWeatherData = useCallback(async (city: string, countryCode?: string) => {
        setIsLoading(true);
        setError(null);

        try {
            const [currentWeatherData, forecastData] = await Promise.all([
                getCurrentWeather(city, countryCode),
                getForecast(city, countryCode),
            ]);

            setCurrentWeather(currentWeatherData);
            setForecast(forecastData);
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Something went wrong fetching data';
            setError(errorMessage);
        } finally {
            setIsLoading(false);
        }
    }, []);

    const clearError = useCallback(() => {
        setError(null);
    }, []);

    return  {
        currentWeather,
        forecast,
        isLoading,
        error,
        fetchWeatherData,
        clearError,
    };
};

export default useWeather;