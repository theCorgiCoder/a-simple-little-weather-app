import { StyleSheet } from 'react-native';

export const detailStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#78B3CE",
    },
    forecastSection: {
        marginVertical: 20,
        padding: 15,
        backgroundColor: '#C9E6F0',
        borderRadius: 10,
    },
    forecastContainer: {
        gap: 5,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#213448',
    },
    separator: {
        height: 1,
        backgroundColor: '#3A6D8C',
        marginVertical: 8,
    },
    error: {
        color: 'red',
        fontSize: 16,
    },
});