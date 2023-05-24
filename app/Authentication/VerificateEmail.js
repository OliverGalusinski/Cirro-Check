import {useNavigation, useRouter} from "expo-router";
import React, {useEffect} from "react";
import {Dimensions, Text, View} from "react-native";
import {auth, Authentication} from "../../firebase/firebaseConfig";
import {Background, Card} from "../Design/BackgroundCard";
import Constants from "expo-constants";
import {LoginForm} from "./Login";
import {Button} from "react-native-paper";

const VerificateEmail= () => {
    const email = auth.currentUser.email
    const router = useRouter();
    // Navigation
    const navigation = useNavigation();

    // Effect
    useEffect(() => {
        navigation.addListener('beforeRemove', (e) => {
            e.preventDefault();
            console.log('onback');
            // Do your stuff here
            Authentication.signOut()
            navigation.dispatch(e.data.action);
        });
    }, []);

    return(
        <View style={{height: "100%", width: "100%", flex: 1}}>
            <Background/>
            <View style={{flex: 1, alignItems: "center", marginTop: Constants.statusBarHeight+10}}>
                <Card/>
            </View>
            <View style={{position: "absolute",marginTop: Constants.statusBarHeight+10}}>
                <Text style={{textAlign:"left", marginLeft: Dimensions.get('window').width/10, marginTop:"15%", fontSize: 20, color: "#f2f2f2", fontFamily: "AveriaLibre-Regular"}}>Please Verify your Email and Login</Text>
                <Text style={{textAlign:"left", marginLeft:Dimensions.get('window').width/100*15, fontSize: 30, color: "#f2f2f2", fontFamily: "AveriaLibre-Regular"}}>{email}</Text>
                <View style={{marginLeft:Dimensions.get('window').width/100*15}}>
                    <LoginForm/>
                </View>
                <Button onPress={() => goBack(router)}>go back</Button>
            </View>
        </View>
    );
}

async function goBack(router){
    await Authentication.signOut();
    router.push("Authentication/Login");
}

export default VerificateEmail;