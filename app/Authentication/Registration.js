import {Text, View} from 'react-native';
import {auth, Authentication} from "../../firebase/firebaseConfig";
import {BackgroundWithCard} from "../Design/BackgroundCard";
import {Button, TextInput} from "react-native-paper";
import {transparent} from "react-native-paper/src/styles/themes/v2/colors";
import {useState} from "react";
import {useFonts} from 'expo-font';
import {windowForm} from "../Design/WindowForm";
import {Link, useRouter} from "expo-router";
import Styles from "../Design/styles";
import Svg, {Line} from "react-native-svg";

const Registration = () => {
    const [fontsLoaded] = useFonts({
        'AveriaLibre-Regular': require('../../assets/Fonts/AveriaLibre-Regular.ttf')
    });
    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={{height: "100%", width: "100%", flex: 1}}>
            <BackgroundWithCard/>
            <InputForm/>
        </View>
    );
}
const InputForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const router = useRouter();

    return (
        <View style={{position: "absolute", marginTop: windowForm().at(1)/100*18, width: "100%", flex: 1}}>
            <TextInput
                label="Email"
                value={email}
                onChangeText={value => setEmail(value)}
                editable={true}
                mode="outlined"
                outlineColor="black"
                style={{backgroundColor: transparent, borderColor: "black", marginLeft: "10%", marginTop: "20%", width: "80%"}}
            />
            <TextInput
                label="Password"
                value={password}
                onChangeText={value => setPassword(value)}
                mode="outlined"
                outlineColor="black"
                text='white'
                direction ='rtl'
                underlineColor='transparent'
                editable= {true}
                secureTextEntry={true}
                underlineColorAndroid={'rgba(0,0,0,0)'}
                style={{backgroundColor: transparent, color: "white", marginLeft: "10%", marginTop:"5%", width: "80%"}}
            />
            <TextInput
                label="Confirm password"
                value={confirmPassword}
                onChangeText={value => setConfirmPassword(value)}
                mode="outlined"
                outlineColor="black"
                text='white'
                direction ='rtl'
                underlineColor='transparent'
                editable= {true}
                secureTextEntry={true}
                underlineColorAndroid={'rgba(0,0,0,0)'}
                style={{backgroundColor: transparent, color: "white", marginLeft: "10%", marginTop:"5%", width: "80%"}}
            />
            <Button buttonColor="#2F80ED" textColor="white" style={{width:"80%", alignSelf:"center", marginTop:"5%"}}
                    onPress={async() => {
                        if(confirmPassword === password)
                            await handleRegisterPress(email, password, router)
                        else
                            alert('Passwords have to be equal!')
                    }}>Register</Button>
            <View style={{justifyContent:"center", alignItems:"center", marginTop: "1%"}}>
                <Text style={{position:"absolute"}}>or</Text>
                <Svg style={{position:"absolute"}} height="3%" width={windowForm().at(0)/100*90}>
                    <Line x1="5%" y1="0" x2="45%" y2="0" stroke="white" strokeWidth="3" />
                    <Line x1="55%" y1="0" x2="95%" y2="0" stroke="white" strokeWidth="3" />
                </Svg>
                <Text style={{marginTop: "10%", fontSize:12}}>
                    Already have an account?
                    <Link style={Styles.linkText} href={"/Authentication/Login"}> Sign in</Link>
                </Text>
            </View>
        </View>
    );
};

async function handleRegisterPress(email, password, router) {
    try {
        await Authentication.registerWithEmailAndPassword(email, password);
        if (auth.currentUser != null) {
            router.push("/Authentication/VerificateEmail");
        }
    } catch (error) {
        console.error(error);
    }
}

export default Registration;