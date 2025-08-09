import {View, Text, StyleSheet, ScrollView} from "react-native";
import {useLocalSearchParams} from "expo-router";
import {useWeather} from "../hooks/useWeather";
import {useEffect} from "react";



const Details = () => {
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

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>
                {currentWeather.name}, {currentWeather.sys.country}
            </Text>

            {/* Current Weather */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Current Weather</Text>
                <Text style={styles.temperature}>
                    {Math.round(currentWeather.main.temp)}°C
                </Text>
                <Text style={styles.description}>
                    {currentWeather.weather[0].description}
                </Text>
                <Text>Humidity: {currentWeather.main.humidity}%</Text>
                <Text>Wind: {currentWeather.wind.speed} m/s</Text>
            </View>

            {/* Forecast */}
            {forecast && (
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>5-Day Forecast</Text>
                    {forecast.list.slice(0, 5).map((item, index) => (
                        <View key={index} style={styles.forecastItem}>
                            <Text>{new Date(item.dt * 1000).toLocaleDateString()}</Text>
                            <Text>{Math.round(item.main.temp)}°C</Text>
                            <Text>{item.weather[0].description}</Text>
                        </View>
                    ))}
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
    section: {
        marginBottom: 30,
        padding: 15,
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    temperature: {
        fontSize: 48,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#007AFF',
    },
    description: {
        fontSize: 18,
        textAlign: 'center',
        textTransform: 'capitalize',
        marginBottom: 10,
    },
    forecastItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    error: {
        color: 'red',
        fontSize: 16,
    },
});

export default Details;