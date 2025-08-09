import React from "react";
import {Text, TouchableOpacity} from "react-native";

interface ButtonProps {
    city: string;
    country: string;
    onPress: () => void;
}

const CustomButton: React.FC<ButtonProps> = ({city, country, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text>{city}, {country}</Text>
        </TouchableOpacity>
    )
}

export default CustomButton;