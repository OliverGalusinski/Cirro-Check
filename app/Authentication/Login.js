import {View, Text} from "react-native";
import React, {useEffect} from "react";
import {Link, useNavigation, useRouter} from "expo-router";
import {BackgroundWithCard} from "../Design/BackgroundCard";
import {windowForm} from "../Design/WindowForm";
import {Button, TextInput} from "react-native-paper";
import {auth, Authentication} from "../../firebase/firebaseConfig";
import {transparent} from "react-native-paper/src/styles/themes/v2/colors";
import Svg, {Line} from "react-native-svg";
import Styles from "../Design/styles";
import {useState} from "react";
const Login = () => {
    // Navigation
    const navigation = useNavigation();
    const router = useRouter();

    // Effect
    useEffect(() => {
        navigation.addListener('beforeRemove', (e) => {
            e.preventDefault();
            console.log('onback');
            // Do your stuff here
        });
    }, []);

    return(
        <View style={{height: "100%", width: "100%", flex: 1}}>
            <BackgroundWithCard/>
            <View style={{alignItems: "center", justifyContent:"center", position: "absolute", marginTop: windowForm().at(1)/100*38, width: "100%", flex: 1}}>
                <LoginForm></LoginForm>
            </View>
        </View>
    )
}

async function handleLoginPress(email, password, router) {
    try {
        await Authentication.signInWithEmailAndPassword(email, password, router);
    } catch (error) {
        console.error(error);
    }
}

export const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
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
            <Button buttonColor="#2F80ED" textColor="white" style={{width:"80%", alignSelf:"center", marginTop:"5%"}}
                    onPress={async() => handleLoginPress(email,password,router)}>Login</Button>
            <View style={{justifyContent:"center", alignItems:"center", marginTop: "1%"}}>
                <Text style={{position:"absolute"}}>or</Text>
                <Svg style={{position:"absolute"}} height="3%" width={windowForm().at(0)/100*90}>
                    <Line x1="5%" y1="0" x2="45%" y2="0" stroke="white" strokeWidth="3" />
                    <Line x1="55%" y1="0" x2="95%" y2="0" stroke="white" strokeWidth="3" />
                </Svg>
                <Text style={{marginTop: "10%", fontSize:12}}>
                    No Account?
                    <Link style={Styles.linkText} href={"/Authentication/Registration"}> Sign up!</Link>
                </Text>
            </View>
        </View>
    );
}

export default Login