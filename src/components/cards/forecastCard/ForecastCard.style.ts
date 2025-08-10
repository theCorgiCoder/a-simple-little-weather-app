import { StyleSheet } from 'react-native';

export const forecastStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    iconContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    description: {
        fontSize: 18,
        textTransform: 'capitalize',
        color: '#666',
    },
    descriptionContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    forecastSection: {
        marginVertical: 20,
        padding: 15,
        backgroundColor: '#f9f9f9',
        borderRadius: 10,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 15,
        color: '#333',
    },
    forecastItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
    },
    timeLabel: {
        fontSize: 14,
        fontWeight: '600',
        color: '#333',
    },
    forecastDescription: {
        fontSize: 16,
        color: '#666',
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