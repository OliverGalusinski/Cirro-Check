import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Constants from "expo-constants";
import Svg, {Rect, Pattern, Defs, LinearGradient, Stop, Path} from "react-native-svg";
import * as ScreenOrientation from 'expo-screen-orientation';
import {useEffect, useState} from "react";

export default function App() {
    return (
        <View style={{height: "100%", width: "100%", backgroundColor: "aqua"}}>
            <View style={{flex: 1, marginTop: Constants.statusBarHeight+10}}>
                <BackgroundCard/>
            </View>
        </View>
    );
}
const BackgroundCard = () => {
    const [windowWidth, setWindowWidth] = useState(Dimensions.get('window').width);
    const [windowHeight, setWindowHeight] = useState(Dimensions.get('window').height);

    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);

    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Svg height={windowHeight - Constants.statusBarHeight} width={windowWidth}>
                <Defs>
                    <LinearGradient id="path" x="0" y="0">
                        <Stop offset="0" stopColor="#FFD080" stopOpacity="1" />
                        <Stop offset="1" stopColor="red" stopOpacity="1" />
                    </LinearGradient>
                </Defs>
                <Rect
                    x="5%"
                    width="90%"
                    height="97%"
                    rx={10}
                    ry={10}
                    fill="url(#path)"
                />
            </Svg>
        </View>
    );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
