import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Constants from "expo-constants";
import Svg, {Rect, Pattern, Defs} from "react-native-svg";
import * as ScreenOrientation from 'expo-screen-orientation';
import {useEffect, useState} from "react";

export default function App() {
    return (
        <View style={{flex: 1, marginTop: Constants.statusBarHeight}}>
            <BackgroundCard/>
        </View>
    );
}
const BackgroundCard = () => {
    const [windowWidth, setWindowWidth] = useState(Dimensions.get('window').width);
    const [windowHeight, setWindowHeight] = useState(Dimensions.get('window').height);

    useEffect(() => {
        Dimensions.addEventListener('change', ({window: {width, height}}) => {
            setWindowWidth(width)
            setWindowHeight(height)
        });
    });

    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Svg height={windowHeight - Constants.statusBarHeight} width={windowWidth}>
                <Defs>
                    <Pattern
                        id="pattern"
                        patternUnits="userSpaceOnUse"
                        width={windowWidth}
                        height={windowHeight}
                    >
                        <Rect x="0" y="0" width={windowWidth} height={windowHeight} fill="blue"/>
                    </Pattern>
                </Defs>
                <Rect
                    x="5%"
                    y="5%"
                    width="90%"
                    height="90%"
                    rx={10}
                    ry={10}
                    fill="url(#pattern)"
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
