import {Image, Text, View} from "react-native";
import {forecastStyles} from "./ForecastCard.style";
import {getTimeLabel} from "../../../utils/dateUtils";


interface ForecastWeatherProps {
    icon: string;
    temp: number;
    time: string;
    description: string;
}

const ForecastCard: React.FC<ForecastWeatherProps> = ({icon, temp, time, description}) => {
    return (
        <View style={forecastStyles.container}>
            <View style={forecastStyles.iconContainer}>
                <Text style={forecastStyles.timeLabel}>
                    {time}
                </Text>
                <Image
                    source={{ uri: icon }}
                    style={forecastStyles.weatherIcon}
                    resizeMode="contain"
                />
                <Text style={forecastStyles.forecastTemp}>
                    {Math.round(temp)}°C
                </Text>
            </View>
            <View style={forecastStyles.descriptionContainer}>
                <Text style={forecastStyles.forecastDescription}>
                    {description}
                </Text>
            </View>
        </View>
    )
}

export default ForecastCard;