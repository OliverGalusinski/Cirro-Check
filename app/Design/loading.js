import React from "react";
import {View, Text, ActivityIndicator} from "react-native";
import Styles from "./styles";
function LoadingAnimation() {
    return (
        <View style={Styles.indicatorWrapper}>
            <ActivityIndicator size="large"/>
            <Text style={Styles.indicatorText}>Loading fruits...</Text>
        </View>
    );
}

export default LoadingAnimation