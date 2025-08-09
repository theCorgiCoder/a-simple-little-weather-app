import { View, Text } from 'react-native';
import CustomButton from "./components/CustomButton";
import {router} from "expo-router";

export default function Index() {

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <CustomButton cityName={'Stockholm'} onPress={() => router.push('/screens/details')} />
        </View>
    );
}