import React from "react";
import {Text, TouchableOpacity, StyleSheet} from "react-native";

interface ButtonProps {
    city: string;
    country: string;
    onPress: () => void;
}

const CustomButton: React.FC<ButtonProps> = ({city, country, onPress}) => {
    return (
        <TouchableOpacity
            style={styles.button}
            activeOpacity={0.7}
            onPress={onPress}>
            <Text style={styles.buttonText}>
                {city}, {country}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        width: '100%',
        paddingVertical: 16,
        paddingHorizontal: 20,
        backgroundColor: '#f8f9fa',
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderLeftColor: '#007AFF',
        borderRightColor: '#007AFF',
        borderRadius: 8,
        marginVertical: 4,

        // Shadow for iOS
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.1,
        shadowRadius: 2,

        // Shadow for Android
        elevation: 2,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#333',
        textAlign: 'center',
    },
});

export default CustomButton;