export const WEATHER_CONFIG = {
    BASE_URL: 'https://api.openweathermap.org/data/2.5',
    API_KEY: process.env.EXPO_PUBLIC_OPEN_WEATHER_API_KEY,
    ENDPOINTS: {
        CURRENT: '/weather',
        FORECAST: '/forecast',
    },
}