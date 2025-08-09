import React from "react";
import {Text, TouchableOpacity} from "react-native";

interface ButtonProps {
    cityName: string;
    onPress: () => void;
}

const CustomButton: React.FC<ButtonProps> = ({cityName, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text>{cityName}</Text>
        </TouchableOpacity>
    )
}

export default CustomButton;