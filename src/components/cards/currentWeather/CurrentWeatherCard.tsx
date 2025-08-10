import {Image, Text, View} from "react-native";
import {cardStyles} from "./CurrentWeatherCard.style";

interface CurrentWeatherProps {
    name: string;
    icon: string;
    temp: number;
    windSpeed: number;
    humidity: number;
    description: string;
}

const CurrentWeatherCard: React.FC<CurrentWeatherProps> = ({name, icon, temp, windSpeed, humidity, description}) => {
    return (
        <View style={cardStyles.container}>
            <Text style={cardStyles.subtitle}>Current Weather In:</Text>
            <Text style={cardStyles.title}>
                {name}
            </Text>
            <View style={cardStyles.iconContainer}>
                <Image
                    source={{ uri: icon }}
                    style={cardStyles.weatherIcon}
                    resizeMode="contain"
                />
                <Text style={cardStyles.currentTemp}>
                    {Math.round(temp)}°C
                </Text>
            </View>
            <Text style={cardStyles.description}>
                {description}
            </Text>
            <Text style={cardStyles.text}>Humidity: {humidity}%</Text>
            <Text style={cardStyles.text}>Wind: {windSpeed} m/s</Text>
        </View>
    )
}

export default CurrentWeatherCard;