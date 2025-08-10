import type { WeatherForecastItem } from '../types/weather';

export const getAllTodayAndTomorrowForecast = (forecastList: WeatherForecastItem[]) => {
    if (!forecastList) return [];

    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const dayAfterTomorrow = new Date(today);
    dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 2);

    return forecastList.filter(item => {
        const itemDate = new Date(item.dt * 1000);
        return itemDate >= today && itemDate < dayAfterTomorrow;
    });
};

export const isToday = (timestamp: number): boolean => {
    const date = new Date(timestamp * 1000);
    const today = new Date();
    return date.toDateString() === today.toDateString();
};

export const getActualTimeLabel = (timestamp: number): string => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    });
};