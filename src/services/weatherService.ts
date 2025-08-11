import {WEATHER_CONFIG} from "./apiConfig";
import type {
    CurrentWeatherResponse,
    WeatherForecastResponse,
} from "../types/weather";

export const weatherAPIRequest = async <T> (endpoint: string, city: string, countryCode?: string): Promise<T>  => {

    const location = countryCode ? `${city}, ${countryCode}` : city;
    const url =  `${WEATHER_CONFIG.BASE_URL}${endpoint}?q=${encodeURIComponent(location)}&appid=${WEATHER_CONFIG.API_KEY}&units=metric`

   try {
        const response = await fetch(url);
        const statusCode = response.status

        if (!response.ok) {
           const errorData = await response.json().catch(() => ({}));

            throw {
                ...errorData,
                status: {statusCode: statusCode, message: errorData.message}
            };
        }

        return await response.json();

   } catch (error) {
        throw error;
    }
};

export const getCurrentWeather = async (city: string, countryCode?: string): Promise<CurrentWeatherResponse> => {
    return weatherAPIRequest<CurrentWeatherResponse>(
        WEATHER_CONFIG.ENDPOINTS.CURRENT,
        city,
        countryCode
    );
};

export const getForecast = async (city: string, countryCode?: string): Promise<WeatherForecastResponse> => {
    return weatherAPIRequest<WeatherForecastResponse>(
        WEATHER_CONFIG.ENDPOINTS.FORECAST,
        city,
        countryCode
    );
};