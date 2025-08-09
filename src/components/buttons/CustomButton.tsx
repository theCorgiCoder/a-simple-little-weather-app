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
        width: '100%',                    // Spans horizontally across screen
        paddingVertical: 16,              // Vertical padding
        paddingHorizontal: 20,            // Horizontal padding
        backgroundColor: '#f8f9fa',       // Light background color
        borderLeftWidth: 2,               // Left outline stroke
        borderRightWidth: 2,              // Right outline stroke
        borderLeftColor: '#007AFF',       // Outline color
        borderRightColor: '#007AFF',      // Outline color
        borderRadius: 8,                  // Rounded corners
        marginVertical: 4,                // Space between buttons

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
        textAlign: 'center',              // City name centered
    },
});

export default CustomButton;