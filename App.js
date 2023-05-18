import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Constants from "expo-constants";
import Svg, {Rect, Defs, LinearGradient as SVGGradient, Stop} from "react-native-svg";
import { LinearGradient } from 'expo-linear-gradient';
import * as ScreenOrientation from 'expo-screen-orientation';
import {useCallback, useEffect, useState} from "react";
import {BlurView} from "expo-blur";
import { useFonts } from 'expo-font';
import { TextInput } from "react-native-paper";
import * as SplashScreen from 'expo-splash-screen';
import {transparent} from "react-native-paper/src/styles/themes/v2/colors";

export default function App() {
    const [fontsLoaded] = useFonts({
        'AveriaLibre-Regular': require('./assets/Fonts/AveriaLibre-Regular.ttf')
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={{height: "100%", width: "100%", flex: 1}}>
                <LinearGradient
                    colors={['#80ffff', '#00cccc']}
                    start={[0, 0]} // Gradient start point (top left corner)
                    end={[1, 1]} // Gradient end point (bottom right corner)
                    style={StyleSheet.absoluteFill} // Fill the entire screen
                >
                    <BlurView style={{flex:1}} intensity={20} tint="dark"/>
                </LinearGradient>
            <View style={{flex: 1, alignItems: "center", marginTop: Constants.statusBarHeight+10}}>
                <Card/>
            </View>
            <View style={{position: "absolute",marginTop: Constants.statusBarHeight+10}}>
                <Text style={{textAlign:"left", marginLeft: Dimensions.get('window').width/10, marginTop:"15%", fontSize: 24, color: "#f2f2f2", fontFamily: "AveriaLibre-Regular"}}>Welcome to</Text>
                <Text style={{textAlign:"left", marginLeft:Dimensions.get('window').width/100*15, fontSize: 42, color: "#f2f2f2", fontFamily: "AveriaLibre-Regular"}}>Cirro Check</Text>
            </View>
            <InputForm/>
        </View>
    );
}

const Card = () => {
    const [windowWidth, setWindowWidth] = useState(Dimensions.get('window').width);
    const [windowHeight, setWindowHeight] = useState(Dimensions.get('window').height);
    const [text, setText] = useState("")

    useEffect(() => {
        Dimensions.addEventListener('change', ({window: {width, height}}) => {
            setWindowHeight(height);
            setWindowWidth(width);
        });
    });

    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' , position: "absolute"}}>
            <Svg height={windowHeight - Constants.statusBarHeight} width={windowWidth}>
                <Defs>
                    <SVGGradient id="path" x1="0" y1="1" x2="0.5" y2="0">
                        <Stop offset="0" stopColor="#99ffff" stopOpacity="0.85" />
                        <Stop offset="0.65" stopColor="#00e6e6" stopOpacity="0.85" />
                    </SVGGradient>
                </Defs>
                <Rect
                    y="0.5"
                    x="5%"
                    width="90%"
                    height="97%"
                    rx={50}
                    ry={50}
                    fill="url(#path)"
                />
            </Svg>
        </View>
    );
};

const InputForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View style={{position: "absolute", marginTop: Dimensions.get('window').height/100*18, width: "100%", flex: 1}}>
            <TextInput
                label="Email"
                value={email}
                onChangeText={email => setEmail(email)}
                editable={true}
                mode="outlined"
                outlineColor="black"
                style={{backgroundColor: transparent, borderColor: "black", marginLeft: "10%", marginTop: "20%", width: "80%"}}
            />
            <TextInput
                label="Password"
                value={password}
                onChangeText={password => setPassword(password)}
                mode="outlined"
                outlineColor="black"
                style={{backgroundColor: transparent, color: "white", marginLeft: "10%", marginTop:"5%", width: "80%"}}
            />
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
