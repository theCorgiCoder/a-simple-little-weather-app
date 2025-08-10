import {View, Text, FlatList} from "react-native";
import {router} from "expo-router";
import {useWeather} from "../../../src/hooks/useWeather";
import {FEATURED_CITIES} from "../../../src/utils/constants";
import CustomButton from "../../../src/components/buttons/CustomButton";
import {homeStyles} from "./home.style";
import {WEATHER_CONFIG} from "../../../src/services/apiConfig";
import LoadingSpinner from "../../../src/components/spinner/LoadingSpinner";


const Home = () => {
    const {isLoading} = useWeather();

    const handleCityPress = (city: { name: string; country: string }) => {
        router.push(`${WEATHER_CONFIG.ROUTE_URL}?city=${encodeURIComponent(city.name)}&countryCode=${city.country}`);
    };

    const renderCityData = ({ item }: { item: { name: string; country: string } }) => (
        <CustomButton city={item.name} country={item.country} onPress={() => handleCityPress(item)} />
    )

    if (isLoading) {
        return <LoadingSpinner />;
    }

    return (
        <View style={homeStyles.container}>
            <Text style={homeStyles.title}>Choose a City:</Text>
            <FlatList
                data={FEATURED_CITIES}
                renderItem={renderCityData}
                keyExtractor={(item) => `${item.name}-${item.country}`}
                showsVerticalScrollIndicator={false}
            />
        </View>

    );
}


export default Home;