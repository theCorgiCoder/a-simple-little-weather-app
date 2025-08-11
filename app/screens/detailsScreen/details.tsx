import {View, Text, ScrollView, RefreshControl} from "react-native";
import {useEffect, useState} from "react";
import {useLocalSearchParams} from "expo-router";
import {useWeather} from "../../../src/hooks/useWeather";
import { getAllTodayAndTomorrowForecast, isToday, getActualTimeLabel } from '../../../src/utils/dateUtils';
import {getWeatherIconUrl} from '../../../src/services/apiConfig'
import CurrentWeatherCard from "../../../src/components/cards/currentWeather/CurrentWeatherCard";
import ForecastCard from "../../../src/components/cards/forecastCard/ForecastCard";
import {detailStyles} from "./details.style";
import LoadingSpinner from "../../../src/components/spinner/LoadingSpinner";
import ErrorMessage from "../../../src/components/errorMessage/ErrorMessage";

const Details = () => {
    const [isRefreshing, setIsRefreshing] = useState(false);
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
                    await fetchWeatherData(city, countryCode);
            }
        };
        loadWeatherData();
    }, [city, countryCode, fetchWeatherData]);


    const handleRefresh = async () => {
        if (!city) return;

        setIsRefreshing(true);
        await fetchWeatherData(city, countryCode);
        setIsRefreshing(false);
    };

    // Get ALL forecast times for today and tomorrow
    const allForecast = forecast ? getAllTodayAndTomorrowForecast(forecast.list) : [];

    const todayForecast = allForecast.filter(item => isToday(item.dt));
    const tomorrowForecast = allForecast.filter(item => !isToday(item.dt));

    const renderForecastItems = (items: typeof allForecast) => (
        items.map((item, index) => (
            <View key={index}>
                <ForecastCard
                    icon={getWeatherIconUrl(item.weather[0].icon)}
                    temp={item.main.temp}
                    time={getActualTimeLabel(item.dt)}
                    description={item.weather[0].description}
                />
                {/* Add separator line (except for last item) */}
                {index < items.length - 1 && (
                    <View style={detailStyles.separator} />
                )}
            </View>
        ))
    );

    const renderWeatherContent = () => (
        <>
            <CurrentWeatherCard
                name={currentWeather!.name}
                icon={getWeatherIconUrl(currentWeather!.weather[0].icon)}
                temp={currentWeather!.main.temp}
                windSpeed={currentWeather!.wind.speed}
                humidity={currentWeather!.main.humidity}
                description={currentWeather!.weather[0].description}
            />

            {todayForecast.length > 0 && (
                <View style={detailStyles.forecastSection}>
                    <Text style={detailStyles.sectionTitle}>Today</Text>
                    <View style={detailStyles.forecastContainer}>
                        {renderForecastItems(todayForecast)}
                    </View>
                </View>
            )}

            {tomorrowForecast.length > 0 && (
                <View style={detailStyles.forecastSection}>
                    <Text style={detailStyles.sectionTitle}>Tomorrow</Text>
                    <View style={detailStyles.forecastContainer}>
                        {renderForecastItems(tomorrowForecast)}
                    </View>
                </View>
            )}
        </>
    );

    return (
        <ScrollView
            style={detailStyles.container}
            contentContainerStyle={{ paddingBottom: 100 }}
            showsVerticalScrollIndicator={false}
            refreshControl={
                <RefreshControl
                    refreshing={isRefreshing}
                    onRefresh={handleRefresh}
                    colors={['#007AFF']}
                    tintColor="#007AFF"
                />
            }
        >
            {isLoading ? (
                <LoadingSpinner />
            ) : error ? (
                <ErrorMessage
                    error={error}
                />
            ) : (
                renderWeatherContent()
            )}
        </ScrollView>
    );
}


export default Details;