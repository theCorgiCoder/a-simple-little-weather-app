import { StyleSheet } from 'react-native';

export const cardStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20,
    },
    iconContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        color: '#133E87',
    },
    currentTemp: {
        fontSize: 48,
        fontWeight: 'bold',
        color: '#fff',
    },
    description: {
        fontSize: 20,
        fontWeight: 'bold',
        textTransform: 'capitalize',
        color: '#001F3F',
        marginBottom: 10,
    },
    weatherIcon: {
        width: 100,
        height: 100,
    },
    text:{
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'left',
        color: '#001F3F',
    }
});