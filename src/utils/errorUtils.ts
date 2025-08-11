import {WeatherErrorItem, WeatherErrorType} from "../types/error";

export function mapWeatherErrorResponse(error: WeatherErrorItem, statusCode?: number) {
    switch (statusCode) {
        case 401:
            return {
                type: WeatherErrorType.MISSING_API_KEY,
                cod: statusCode,
                message: "Unauthorized",
                userMessage: "Your API key is missing or not valid for this service. Make sure you’ve added the correct API key to your request, and that the key has access to the weather data you’re trying to use."
            };

        case 404:
            return {
                type: WeatherErrorType.NO_DATA_FOUND,
                cod: statusCode,
                message: "Data not found.",
                userMessage: "We couldn’t find what you were looking for. This could be a typo in the city name or location, or the data might not exist.",
            };

        case 429:
            return {
                type: WeatherErrorType.API_LIMIT_REACHED,
                cod: statusCode,
                message: "Request limit reached for OpenWeather API.",
                userMessage: "Too many requests have been made! Open Weather API is kindly telling us to slow down and try again later."
            };

        case 500:
            return {
                type: WeatherErrorType.UNKNOWN_ERROR,
                cod: statusCode,
                message: "Unknown error occurred.",
                userMessage: "The weather service is having some issues right now. It’s not you — it’s them. Try again later.",
            }

        default:
            if (!statusCode) {
                return {
                    type: WeatherErrorType.NETWORK_ERROR,
                    cod: "NETWORK_ERROR",
                    message: "Network connection error.",
                    userMessage: "There appears to be an issue with your Network connection. Please try again later.",
                };
            }
            return {
                type: WeatherErrorType.UNKNOWN_ERROR,
                cod: statusCode ?? "UNKNOWN",
                message: error?.message || "Unexpected error from API.",
                userMessage: "Something unexpected happened. Please try again."
            };
    }
}