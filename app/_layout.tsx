import { Stack } from 'expo-router';

export default function RootLayout() {
    return (
        <Stack>
            <Stack.Screen
                name="index"
                options={{
                    title: 'A Simple Little Weather App'
                }}
            />
            <Stack.Screen
            name={"details"}
            options={{
                title: 'Weather Details'
            }}/>
        </Stack>
    );
}