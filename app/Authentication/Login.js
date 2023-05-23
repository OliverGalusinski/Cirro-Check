import {View, Text} from "react-native";
import React from "react";
import {Link} from "expo-router";

const Login = () => {
    return(
        <View style={{alignItems: "center", justifyContent:"center", flex:1, }}>
            <Text>
                Login
            </Text>
            <Text>
                No Account?
            </Text>
            <Link href={"/Authentication/Registration"}>Register</Link>
        </View>
    )
}

export default Login