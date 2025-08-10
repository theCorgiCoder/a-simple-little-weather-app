import type { WeatherForecastItem } from '../types/weather';

export const getTodayAndTomorrowForecast = (forecastList: WeatherForecastItem[]) => {
    if (!forecastList || forecastList.length === 0) return [];

    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const dayAfterTomorrow = new Date(today);
    dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 2);

    return forecastList.filter(item => {
        const itemDate = new Date(item.dt * 1000);
        return itemDate >= today && itemDate < dayAfterTomorrow;
    });
};

export const getAllTodayAndTomorrowForecast = (forecastList: WeatherForecastItem[]) => {
    if (!forecastList || forecastList.length === 0) return [];

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
    const today = new Date
};

export const formatTime = (timestamp: number): string => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};

export const getActualTimeLabel = (timestamp: number): string => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    });
};

export const getDayLabel = (timestamp: number): string => {
    return isToday(timestamp) ? 'Today' : 'Tomorrow';
};