import {WEATHER_CONFIG} from "./apiConfig";
import type {
    CurrentWeatherResponse,
    WeatherForecastResponse,
} from "../types/weather";

export const getCurrentWeather = async (city: string, countryCode?: string): Promise<CurrentWeatherResponse>  => {
    const location = countryCode ? `${city}, ${countryCode}` : city;

    const response = await fetch(
        `${WEATHER_CONFIG.BASE_URL}${WEATHER_CONFIG.ENDPOINTS.CURRENT}?q=${encodeURIComponent(location)}&appid=${WEATHER_CONFIG.API_KEY}&units=metric`,
    );

    if (!response.ok) {
        throw new Error('Failed to fetch the current weather data.');
    }

    return response.json();
};

export const getForecast = async (city: string, countryCode?: string): Promise<WeatherForecastResponse> => {
    const location = countryCode ? `${city}, ${countryCode}` : city;

    const response = await fetch(
        `${WEATHER_CONFIG.BASE_URL}${WEATHER_CONFIG.ENDPOINTS.FORECAST}?q=${encodeURIComponent(location)}&appid=${WEATHER_CONFIG.API_KEY}&units=metric`,
    );

    if (!response.ok) {
        throw new Error('Failed to fetch the current weather data.');
    }

    return response.json();
}