import { StyleSheet } from 'react-native';

export const forecastStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    iconContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    description: {
        fontSize: 18,
        fontWeight: 'bold',
        textTransform: 'capitalize',
        color: '#3A6D8C',
    },
    descriptionContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    forecastSection: {
        padding: 15,
        backgroundColor: '#f9f9f9',
        borderRadius: 10,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#3A6D8C',
    },
    forecastItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    timeLabel: {
        fontSize: 14,
        fontWeight: '600',
        color: '#3A6D8C',
    },
    forecastDescription: {
        fontSize: 16,
        color: '#3A6D8C',
        textTransform: 'capitalize',
        marginTop: 2,
    },
    forecastTemp: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#007AFF',
    },
    error: {
        color: 'red',
        fontSize: 16,
    },
    weatherIcon: {
        width: 80,
        height: 80,
    },
});