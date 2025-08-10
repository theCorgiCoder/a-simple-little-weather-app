export const WEATHER_CONFIG = {
    BASE_URL: 'https://api.openweathermap.org/data/2.5',
    API_KEY: process.env.EXPO_PUBLIC_OPEN_WEATHER_API_KEY,
    ROUTE_URL: '/screens/detailsScreen/details',
    ENDPOINTS: {
        CURRENT: '/weather',
        FORECAST: '/forecast',
    },
}

export const getWeatherIconUrl = (iconCode: string) => {
    return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
};

