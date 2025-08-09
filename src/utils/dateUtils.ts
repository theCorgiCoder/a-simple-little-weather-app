import type { WeatherForecastItem } from '../types/weather';

export const getTodayAndTomorrowForecast = (forecastList: WeatherForecastItem[]) => {
    if (!forecastList || forecastList.length === 0) return [];

    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dayAfterTomorrow = new Date(today);
    dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 2);

    return forecastList.filter(item => {
        const itemDate = new Date(item.dt * 1000);
        return itemDate >= today && itemDate < dayAfterTomorrow;
    });
};

export const getKeyTimesPerDay = (forecastList: WeatherForecastItem[]) => {
    const todayTomorrowData = getTodayAndTomorrowForecast(forecastList);

    return todayTomorrowData.filter(item => {
        const hour = new Date(item.dt * 1000).getHours();
        // Use hours that actually exist in your data
        return hour === 8 || hour === 14 || hour === 17; // 8am, 2pm, 5pm
    });
};

export const getTodayKeyTimes = (forecastList: WeatherForecastItem[]) => {
    if (!forecastList || forecastList.length === 0) return [];

    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    return forecastList.filter(item => {
        const itemDate = new Date(item.dt * 1000);
        const hour = itemDate.getHours();

        // Only today's forecast + key times
        return itemDate >= today && itemDate < tomorrow && (hour === 9 || hour === 15 || hour === 21);
    });
};

export const isToday = (timestamp: number): boolean => {
    const date = new Date(timestamp * 1000);
    const today = new Date();
    return date.toDateString() === today.toDateString();
};

export const formatTime = (timestamp: number): string => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};

export const getTimeLabel = (timestamp: number): string => {
    const hour = new Date(timestamp * 1000).getHours();
    switch (hour) {
        case 9: return 'Morning';
        case 15: return 'Afternoon';
        case 21: return 'Evening';
        default: return formatTime(timestamp);
    }
};

export const getDayLabel = (timestamp: number): string => {
    return isToday(timestamp) ? 'Today' : 'Tomorrow';
};