import 'expo-router/entry';
import { View } from 'react-native';
import Home from "./screens/home";




export default function Index() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Home />
        </View>
    );
}