import {View, Text, StyleSheet, FlatList} from "react-native";
import CustomButton from "../components/buttons/CustomButton";
import {router} from "expo-router";
import {useWeather} from "../hooks/useWeather";
import {FEATURED_CITIES} from "../utils/constants";

const Home = () => {
    const {isLoading, currentWeather} = useWeather();

    const renderCityData = ({ item }: { item: { name: string; country: string } }) => (
        <CustomButton city={item.name} country={item.country} onPress={handleCityPress} />
    )

    const handleCityPress = (city: { name: string; country: string }) => {
        router.push(`/screens/details?city=${encodeURIComponent(city.name)}&countryCode=${city.country}`);
    };

    if (isLoading) {
        return <Text>Loading...</Text>;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Weather Cities</Text>
            <FlatList
                data={FEATURED_CITIES}
                renderItem={renderCityData}
                keyExtractor={(item) => `${item.name}-${item.country}`}
                showsVerticalScrollIndicator={false}
            />
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    cityItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        marginVertical: 4,
        backgroundColor: '#f5f5f5',
        borderRadius: 8,
    },
    cityName: {
        fontSize: 18,
        fontWeight: '600',
        color: '#007AFF',
    },
    countryCode: {
        fontSize: 14,
        color: '#666',
    },
});

export default Home;