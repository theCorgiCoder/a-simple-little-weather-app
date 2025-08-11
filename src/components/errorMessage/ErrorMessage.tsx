import React from "react";
import {WeatherErrorItem} from "../../types/error";
import {View, Text, StyleSheet } from "react-native";

interface ErrorMessageProps {
    error: WeatherErrorItem;
}

export default function ErrorMessage({ error}: ErrorMessageProps) {


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Error: {error.cod}</Text>
            <Text style={styles.errorCode}>{error.message}</Text>
            <Text style={styles.message}>{error.userMessage}</Text>
        </View>
    );
}

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 40,
        },
        title: {
            fontSize: 22,
            fontWeight: 'bold',
            color: '#333',
            textAlign: 'center',
            marginBottom: 12,
        },
        message: {
            fontSize: 16,
            color: '#666',
            textAlign: 'center',
            lineHeight: 24,
            marginBottom: 32,
            maxWidth: 300,
        },
        button: {
            backgroundColor: '#007AFF',
            paddingHorizontal: 32,
            paddingVertical: 14,
            borderRadius: 8,
        },
        buttonText: {
            color: 'white',
            fontSize: 16,
            fontWeight: '600',
        },
        errorCode: {
            fontSize: 14,
            color: '#3FB4141',
            textAlign: 'center',
            marginBottom: 12,
            fontFamily: 'monospace',
        }
    });