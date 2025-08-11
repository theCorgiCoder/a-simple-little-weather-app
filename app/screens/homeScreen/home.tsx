import {useState} from "react";
import {View, Text, FlatList} from "react-native";
import {router} from "expo-router";
import {FEATURED_CITIES} from "../../../src/utils/constants";
import CustomButton from "../../../src/components/buttons/CustomButton";
import {homeStyles} from "./home.style";
import {WEATHER_CONFIG} from "../../../src/services/apiConfig";
import LoadingSpinner from "../../../src/components/spinner/LoadingSpinner";
import {WeatherErrorItem} from "../../../src/types/error";
import ErrorMessage from "../../../src/components/errorMessage/ErrorMessage";


const Home = () => {
    const [error, setError] = useState<WeatherErrorItem | null>(null);
    const [isNavigating, setIsNavigating] = useState(false);

    const handleCityPress = async (city: { name: string; country: string }) => {
        const url = `${WEATHER_CONFIG.ROUTE_URL}?city=${encodeURIComponent(city.name)}&countryCode=${city.country}`

        try {
            setIsNavigating(true);
            setError(null);


            router.push(url);
        } catch (error) {
            setError({
                type: 'NAVIGATION_ERROR' as any,
                cod: 'NAV_ERROR',
                message: 'Navigation failed',
                userMessage: 'Unable to navigate to the selected city.'
            });
        } finally {
            setIsNavigating(false);
        }
    };

    const renderCityData = ({ item }: { item: { name: string; country: string } }) => (
        <CustomButton city={item.name} country={item.country} onPress={() => handleCityPress(item)} />
    )


    return (
      <>
          {isNavigating ? (
              <LoadingSpinner />
          ) :  error? (
              <ErrorMessage error={error}/>
              ) : (
        <View style={homeStyles.container}>
            <Text style={homeStyles.title}>Choose a City:</Text>
            <FlatList
                data={FEATURED_CITIES}
                renderItem={renderCityData}
                keyExtractor={(item) => `${item.name}-${item.country}`}
                showsVerticalScrollIndicator={false}
            />
        )
        </View>
          )}
      </>
    );
}


export default Home;