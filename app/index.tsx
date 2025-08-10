import 'expo-router/entry';
import Home from "./screens/homeScreen/home";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import {StyleSheet} from "react-native";

export default function Index() {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={style.container}>
                <Home />
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#C9E6F0",
    }
})