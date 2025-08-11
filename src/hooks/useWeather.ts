import {useState, useCallback} from "react";
import {getCurrentWeather, getForecast} from "../services/weatherService";
import type { CurrentWeatherResponse, WeatherForecastResponse } from '../types/weather'
import {mapWeatherErrorResponse} from "../utils/errorUtils";
import {WeatherErrorItem} from "../types/error";

interface UseWeatherProps {
    currentWeather: CurrentWeatherResponse | null;
    forecast: WeatherForecastResponse | null;
    isLoading: boolean;
    error: WeatherErrorItem | null;
    fetchWeatherData: (city: string, countryCode?: string) =>  Promise<void>;
    clearError: () => void;
}

export const useWeather = (): UseWeatherProps => {
    const [currentWeather, setCurrentWeather] = useState<CurrentWeatherResponse | null>(null);
    const [forecast, setForecast] = useState<WeatherForecastResponse | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<WeatherErrorItem | null>(null);

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
            const statusCode = (error as any)?.status?.statusCode || (error as any)?.cod;
            setError(mapWeatherErrorResponse(error as WeatherErrorItem, statusCode));
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