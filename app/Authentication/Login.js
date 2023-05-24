import {View, Text} from "react-native";
import React, {useEffect} from "react";
import {useNavigation,Link} from "expo-router";
import {BackgroundWithCard} from "../Design/BackgroundCard";
import {windowForm} from "../Design/WindowForm";

const Login = () => {
    // Navigation
    const navigation = useNavigation();

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
                <Text>
                    Login
                </Text>
                <Text>
                    No Account?
                </Text>
                <Link href={"/Authentication/Registration"}>Register</Link>
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