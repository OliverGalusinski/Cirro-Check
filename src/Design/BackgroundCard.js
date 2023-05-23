import {Dimensions, StyleSheet, Text, View} from "react-native";
import Constants from "expo-constants";
import Svg, {Rect, Defs, LinearGradient as SVGGradient, Stop} from "react-native-svg";
import {windowForm} from "./WindowForm";
import {useState, useEffect} from "react";
import {LinearGradient} from "expo-linear-gradient";
import {BlurView} from "expo-blur";

export const BackgroundWithCard = () =>{
    return(
        <View style={{height: "100%", width: "100%", flex: 1}}>
            <Background/>
            <View style={{flex: 1, alignItems: "center", marginTop: Constants.statusBarHeight+10}}>
                <Card/>
            </View>
            <View style={{position: "absolute",marginTop: Constants.statusBarHeight+10}}>
                <Text style={{textAlign:"left", marginLeft: Dimensions.get('window').width/10, marginTop:"15%", fontSize: 24, color: "#f2f2f2", fontFamily: "AveriaLibre-Regular"}}>Welcome to</Text>
                <Text style={{textAlign:"left", marginLeft:Dimensions.get('window').width/100*15, fontSize: 42, color: "#f2f2f2", fontFamily: "AveriaLibre-Regular"}}>Cirro Check</Text>
            </View>
        </View>
    );
}
export const Background = () => {
    return(
        <LinearGradient
            colors={['#80ffff', '#00cccc']}
            start={[0, 0]} // Gradient start point (top left corner)
            end={[1, 1]} // Gradient end point (bottom right corner)
            style={StyleSheet.absoluteFill} // Fill the entire screen
        >
            <BlurView style={{flex:1}} intensity={20} tint="dark"/>
        </LinearGradient>
    );
}
export const Card = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' , position: "absolute"}}>
            <Svg height={windowForm().at(1) - Constants.statusBarHeight} width={windowForm().at(0)}>
                <Defs>
                    <SVGGradient id="path" x1="0" y1="1" x2="0.5" y2="0">
                        <Stop offset="0" stopColor="#99ffff" stopOpacity="0.85" />
                        <Stop offset="0.65" stopColor="#00e6e6" stopOpacity="0.85" />
                    </SVGGradient>
                </Defs>
                <Rect
                    y="0.5"
                    x="5%"
                    width={windowForm().at(0)/100*90}
                    height="97%"
                    rx={50}
                    ry={50}
                    fill="url(#path)"
                />
            </Svg>
        </View>
    );
};