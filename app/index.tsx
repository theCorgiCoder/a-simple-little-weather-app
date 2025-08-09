import { View } from 'react-native';
import {router} from "expo-router";
import CustomButton from "./components/buttons/CustomButton";



export default function Index() {

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <CustomButton cityName={"Stockholm"} onPress={() => router.push('/screens/details')}/>
        </View>
    );
}