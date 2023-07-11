import {Text, View} from "react-native";
import {auth, Authentication} from "../../firebase/firebaseConfig";
import Constants from "expo-constants";
import {Button} from "react-native-paper";
import {useRouter} from "expo-router";
const Homepage = () => {
    const router = useRouter();
    return(
      <View style={{alignItems:'center',marginTop:Constants.statusBarHeight}}>
          <Text>
              Welcome {auth.currentUser.email}
          </Text>
          <Button buttonColor="#2F80ED" textColor="white" style={{width:"80%", alignSelf:"center", marginTop:"5%"}}
                  onPress={async() => {
                      await Authentication.signOut(router, "Authentication/Login")
                  }}>Sign Out</Button>
      </View>
    );
}

export default Homepage;