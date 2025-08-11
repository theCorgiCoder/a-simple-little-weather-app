import {useState} from "react";
import {View, Text, FlatList, ScrollView} from "react-native";
import {router} from "expo-router";
import {FEATURED_CITIES} from "../../../src/utils/constants";
import CustomButton from "../../../src/components/buttons/CustomButton";
import {homeStyles} from "./home.style";
import {WEATHER_CONFIG} from "../../../src/services/apiConfig";
import LoadingSpinner from "../../../src/components/spinner/LoadingSpinner";
import {createNavigationError, createValidationError} from "../../../src/utils/errorUtils";
import {WeatherErrorItem} from "../../../src/types/error";
import ErrorMessage from "../../../src/components/errorMessage/ErrorMessage";


const Home = () => {
    const [error, setError] = useState<WeatherErrorItem| null>(null);
    const [isNavigating, setIsNavigating] = useState(false);


    const handleCityPress = async (city: { name: string; country: string }) => {
        const url = `${WEATHER_CONFIG.ROUTE_URL}?city=${encodeURIComponent(city.name)}&countryCode=${city.country}`

        try {
            setIsNavigating(true);
            setError(null);

            if(!city.name || !city.country) {
                throw createValidationError('Invalid city data selected.')
            }
            router.push(url);
        } catch (error) {
            setError(createNavigationError());
        } finally {
            setIsNavigating(false);
        }
    };

    const renderCityData = ({ item }: { item: { name: string; country: string } }) => (
        <CustomButton city={item.name} country={item.country} onPress={() => handleCityPress(item)} />
    )

    if (isNavigating) {
        return <LoadingSpinner />;
    }

    return (
      <ScrollView>
          {isNavigating ? (
              <LoadingSpinner />
          ) : error ? (
              <ErrorMessage
                  error={error}
              />
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
      </ScrollView>
    );
}


export default Home;