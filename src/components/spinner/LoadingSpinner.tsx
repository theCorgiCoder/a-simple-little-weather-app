import React from "react";
import {ActivityIndicator, StyleSheet, Text, View} from "react-native";

const LoadingSpinner = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size={"large"} style={styles.container}/>
            <Text>Loading...</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})

export default LoadingSpinner;