import {View, Text, StyleSheet, ScrollView} from "react-native";
import {useLocalSearchParams} from "expo-router";
import {useWeather} from "../../src/hooks/useWeather";
import {useEffect} from "react";
import { getKeyTimesPerDay, isToday, getTimeLabel } from '../../src/utils/dateUtils';

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
        if (city) {
            fetchWeatherData(city, countryCode);
        }
    }, [city, countryCode, fetchWeatherData]);

    const keyTimesForecast = forecast ? getKeyTimesPerDay(forecast.list) : [];

    // Separate today and tomorrow
    const todayForecast = keyTimesForecast.filter(item => isToday(item.dt));
    const tomorrowForecast = keyTimesForecast.filter(item => !isToday(item.dt));

    const renderForecastItems = (items: typeof keyTimesForecast) => (
        items.map((item, index) => (
            <View key={index} style={styles.forecastItem}>
                <View>
                    <Text style={styles.timeLabel}>{getTimeLabel(item.dt)}</Text>
                    <Text style={styles.forecastDescription}>
                        {item.weather[0].description}
                    </Text>
                </View>
                <Text style={styles.forecastTemp}>
                    {Math.round(item.main.temp)}°C
                </Text>
            </View>
        ))
    );

    if (isLoading) {
        return (
            <Text>Loading...</Text>
        )
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

    console.log('city parameter:', city);
    console.log('countryCode parameter:', countryCode);
    console.log('API response - currentWeather:', currentWeather);


    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={{ paddingBottom: 100 }}
            showsVerticalScrollIndicator={false}
        >
            <Text style={styles.title}>
                {currentWeather.name}
            </Text>

            {/* Current Weather */}
            <View >
                <Text style={styles.sectionTitle}>Current Weather</Text>
                <Text >
                    {Math.round(currentWeather.main.temp)}°C
                </Text>
                <Text style={styles.description}>
                    {currentWeather.weather[0].description}
                </Text>
                <Text>Humidity: {currentWeather.main.humidity}%</Text>
                <Text>Wind: {currentWeather.wind.speed} m/s</Text>
            </View>

            {/* Today's Forecast */}
            {todayForecast.length > 0 && (
                <View style={styles.forecastSection}>
                    <Text style={styles.sectionTitle}>Today</Text>
                    {renderForecastItems(todayForecast)}
                </View>
            )}

            {/* Tomorrow's Forecast */}
            {tomorrowForecast.length > 0 && (
                <View style={styles.forecastSection}>
                    <Text style={styles.sectionTitle}>Tomorrow</Text>
                    {renderForecastItems(tomorrowForecast)}
                </View>
            )}

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    currentWeather: {
        alignItems: 'center',
        marginBottom: 30,
        padding: 20,
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
    },
    currentTemp: {
        fontSize: 48,
        fontWeight: 'bold',
        color: '#007AFF',
    },
    description: {
        fontSize: 18,
        textTransform: 'capitalize',
        color: '#666',
    },
    forecastSection: {
        marginBottom: 25,
        padding: 15,
        backgroundColor: '#f9f9f9',
        borderRadius: 10,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 15,
        color: '#333',
    },
    forecastItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
    },
    timeLabel: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
    },
    forecastDescription: {
        fontSize: 14,
        color: '#666',
        textTransform: 'capitalize',
        marginTop: 2,
    },
    forecastTemp: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#007AFF',
    },
    error: {
        color: 'red',
        fontSize: 16,
    },
});