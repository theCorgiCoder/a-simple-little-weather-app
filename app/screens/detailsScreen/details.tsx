import {View, Text, ScrollView} from "react-native";
import {useEffect} from "react";
import {useLocalSearchParams} from "expo-router";
import {useWeather} from "../../../src/hooks/useWeather";
import { getKeyTimesPerDay, isToday, getTimeLabel } from '../../../src/utils/dateUtils';
import {getWeatherIconUrl} from '../../../src/services/apiConfig'

import {LoadingSpinner} from "src/components/spinner/LoadingSpinner";
import CurrentWeatherCard from "../../../src/components/cards/currentWeather/CurrentWeatherCard";
import ForecastCard from "../../../src/components/cards/forecastCard/ForecastCard";
import {detailStyles} from "./details.style";

export default function Details() {
    const {
        city,
        countryCode
    } = useLocalSearchParams<{
        city: string;
        countryCode?: string;
    }>();

    const {
        currentWeather,
        forecast,
        isLoading,
        error,
        fetchWeatherData
    } = useWeather()

    useEffect(() => {
        const loadWeatherData = async () => {
            if (city) {
                try {
                    await fetchWeatherData(city, countryCode);
                } catch (error) {
                    console.error('Failed to fetch weather data:', error);
                }
            }
        };
        loadWeatherData();
    }, [city, countryCode, fetchWeatherData]);

    const keyTimesForecast = forecast ? getKeyTimesPerDay(forecast.list) : [];

    // Separate today and tomorrow
    const todayForecast = keyTimesForecast.filter(item => isToday(item.dt));
    const tomorrowForecast = keyTimesForecast.filter(item => !isToday(item.dt));

    const renderForecastItems = (items: typeof keyTimesForecast) => (
        items.map((item, index) => (
            <View key={index}>
                <ForecastCard
                    icon={getWeatherIconUrl(item.weather[0].icon)}
                    temp={item.main.temp}
                    time={getTimeLabel(item.dt)}
                    description={item.weather[0].description}
                />
                {/* Add separator line (except for last item) */}
                {index < items.length - 1 && (
                    <View style={detailStyles.separator} />
                )}
            </View>
        ))
    );

    if (isLoading) {
        return <LoadingSpinner />;
    }


    if (error) {
        return (
            <Text>Error: {error}</Text>
        )
    }

    if (!currentWeather) {
        return (
            <Text>No weather data available.</Text>
        )
    }

    return (
        <ScrollView
            style={detailStyles.container}
            contentContainerStyle={{ paddingBottom: 100 }}
            showsVerticalScrollIndicator={false}
        >


            {/* Current Weather */}
            <CurrentWeatherCard
                name={currentWeather.name}
                icon={getWeatherIconUrl(currentWeather.weather[0].icon)}
                temp={currentWeather.main.temp}
                windSpeed={currentWeather.wind.speed}
                humidity={currentWeather.main.humidity}
                description={currentWeather.weather[0].description}
            />

            {/* Today's Forecast */}
            {todayForecast.length > 0 && (
                <View style={detailStyles.forecastSection}>
                    <Text style={detailStyles.sectionTitle}>Today</Text>
                    <View style={detailStyles.forecastContainer}>
                        {renderForecastItems(todayForecast)}
                    </View>
                </View>
            )}

            {/* Tomorrow's Forecast */}
            {tomorrowForecast.length > 0 && (
                <View style={detailStyles.forecastSection}>
                    <Text style={detailStyles.sectionTitle}>Tomorrow</Text>
                    <View style={detailStyles.forecastContainer}>
                        {renderForecastItems(tomorrowForecast)}
                    </View>
                </View>
            )}

        </ScrollView>
    );
}