import {StyleSheet} from "react-native";

export const homeStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,

    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    cityItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        marginVertical: 4,
        backgroundColor: '#f5f5f5',
        borderRadius: 8,
    },
    cityName: {
        fontSize: 18,
        fontWeight: '600',
        color: '#007AFF',
    },
    countryCode: {
        fontSize: 14,
        color: '#666',
    },
});
