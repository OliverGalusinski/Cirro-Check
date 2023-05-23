import {StyleSheet, Text, View} from 'react-native';
import {Authentication} from "../../firebase/firebaseConfig";
import {BackgroundWithCard} from "../Design/BackgroundCard";
import {Button, TextInput} from "react-native-paper";
import {transparent} from "react-native-paper/src/styles/themes/v2/colors";
import {useState} from "react";
import {useFonts} from 'expo-font';
import {windowForm} from "../Design/WindowForm";
import {Link} from "expo-router";

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
            <Text>
                Already have an account?
            </Text>
            <Link href={"/Authentication/Login"}>Login</Link>
        </View>
    );
}

const InputForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <View style={{position: "absolute", marginTop: windowForm().at(1)/100*18, width: "100%", flex: 1}}>
            <TextInput
                label="Email"
                value={email}
                onChangeText={value => {setEmail(value)
                    console.log("new: " + value)}}
                editable={true}
                mode="outlined"
                outlineColor="black"
                style={{backgroundColor: transparent, borderColor: "black", marginLeft: "10%", marginTop: "20%", width: "80%"}}
            />
            <TextInput
                label="Password"
                value={password}
                onChangeText={value => {setPassword(value)
                    console.log("new: " + password)}}
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
            <Button
                onPress={async () => {
                    try {
                        await Authentication.registerWithEmailAndPassword(email,password);
                    } catch (error) {
                        console.error(error);
                    }}}>Register</Button>
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

export default Registration;