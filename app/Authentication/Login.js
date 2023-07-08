import {View, Text} from "react-native";
import React, {useEffect} from "react";
import {useNavigation, useRouter} from "expo-router";
import {BackgroundWithCard} from "../Design/BackgroundCard";
import {windowForm} from "../Design/WindowForm";
import {Button} from "react-native-paper";
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
                <Text>
                    No Account?
                </Text>
                <Button onPress={e => {router.push("/Authentication/Registration")}}>Register</Button>
            </View>
        </View>
    )
}

export const LoginForm = () => {
    return(
      <View>
          <Text>
              Login lol
          </Text>
      </View>
    );
}

export default Login