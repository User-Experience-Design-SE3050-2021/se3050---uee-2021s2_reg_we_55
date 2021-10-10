import React, { Component } from "react";
import { StyleSheet, View, Image, Text, TextInput, TouchableOpacity,Alert } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

function Login(props) {
  const createTwoButtonAlert = () =>
    Alert.alert(
      "Login",
      "Your Login Is Successful",
      [
        {
          text: "Back To Page",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
      ]
    );

  return (

    <View style={styles.container}>
      <View style={styles.rectStack}>

        <View style={styles.rect}></View>
        <Image
          source={require("./images/unnamed-removebg-preview.png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
        <View style={styles.rect2}>
          <Text style={styles.loremIpsum2}>Login Into Your Account</Text>
        </View>

      </View>


      <TouchableOpacity  onPress={createTwoButtonAlert} style={styles.button}>
        <Text style={styles.login}>Login</Text>
      </TouchableOpacity>
      <View style={styles.loremIpsumRow}>
        <Text style={styles.loremIpsum}>Dont Have An Account?</Text>
        <Text style={styles.signUp}>Sign Up</Text>
      </View>

      <View style={styles.image2StackRow}>
        <View style={styles.image2Stack}>
          <Image
            source={require("./images/download-removebg-preview.png")}
            resizeMode="contain"
            style={styles.image2}
          ></Image>
          <Image
            source={require("./images/this-is-a-graphic-reation-of-a-pad-lock-username-and-password-icon-115534595184fsadfncq6-removebg-preview.png")}
            resizeMode="contain"
            style={styles.image3}
          ></Image>
        </View>

        <View style={styles.emailColumn}>
          <TextInput style={styles.email}
                     underlineColorAndroid = "transparent"
                     placeholder = "Email"
                     placeholderTextColor = "black"
                     autoCapitalize = "none"></TextInput>
          <TextInput style={styles.password}
                     underlineColorAndroid = "transparent"
                     placeholder = "Password"
                     placeholderTextColor = "black"
                     autoCapitalize = "none"></TextInput>
        </View>
      </View>


      <View style={styles.rect4Row}>
        <View style={styles.rect4}></View>
        <Text style={styles.password1}>Remember Me</Text>
      </View>

    </View>



  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(230,230,230,1)"
  },
  button: {
    width: 214,
    height: 39,
    backgroundColor: "rgba(129,41,83,1)",
    borderRadius: 30,
    marginTop: 180,
    marginLeft: 90.5
  },
  rect: {
    width: 395,
    height: 293,
    position: "absolute",
    backgroundColor: "rgba(129,41,83,1)",
    left: 0,
    top: -25
  },
  image: {
    top: 7,
    left: 57,
    width: 275,
    height: 265,
    position: "absolute"
  },
  scrollView: {
    marginHorizontal: 20,
  },
  rect2: {
    top: 250,
    left: 0,
    width: 394,
    height: 77,
    position: "absolute",
    backgroundColor: "rgba(196,196,196,1)",
    borderRadius: 20
  },
  loremIpsum2: {
    fontFamily: "quicksand-700",
    color: "rgba(129,41,83,1)",
    fontSize: 28,
    marginTop: 20,
    marginLeft: 47
  },
  rectStack: {
    width: 360,
    height: 355,
    marginTop: 24
  },
  rect3: {
    width: 213,
    height: 0,
    backgroundColor: "rgba(129,41,83,1)",
    borderRadius: 17,
    marginTop: 179,
    marginLeft: 73
  },
  login: {
    fontFamily: "roboto-700",
    color: "rgba(224,225,139,1)",
    fontSize: 24,
    marginTop: 2,
    marginLeft: 77
  },
  loremIpsum: {
    fontFamily: "quicksand-700",
    color: "#121212",
    fontSize: 18
  },
  signUp: {
    fontFamily: "quicksand-700",
    color: "rgba(32,69,202,1)",
    fontSize: 18,
    width: 204,
    height: 23,
    marginLeft: 9
  },
  loremIpsumRow: {
    height: 23,
    flexDirection: "row",
    marginTop: 31,
    marginLeft: 63,
    marginRight: -90,
    top:-15,
  },
  image2: {
    top: -30,
    left: 0,
    width: 37,
    height: 77,
    position: "absolute"
  },
  image3: {
    top: 55,
    left: 0,
    width: 32,
    height: 45,
    position: "absolute"
  },
  image2Stack: {
    width: 37,
    height: 112
  },
  email: {
    fontFamily: "roboto-700",
    fontSize: 18,
    borderColor: '#812953',
    borderWidth: 1,
    color: 'black',
    backgroundColor: "rgba(230,230,230,1)",
    borderRadius: 12,
    top: -40,
    width: 310,
    height:44,
  },
  password: {
    fontFamily: "roboto-700",
    fontSize: 18,
    width: 310,
    height: 44,
    marginTop: 32,
    borderColor: '#812953',
    borderWidth: 1,
    color: 'black',
    backgroundColor: "rgba(230,230,230,1)",
    borderRadius: 12,
    top:-55,
  },
  password1: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 18,
    width: 150,
    height: 24,
    marginLeft:18,
    marginTop:-0,
  },
  emailColumn: {
    width: 119,
    marginLeft: 4,
    marginTop: 29,
    marginBottom: 13
  },
  image2StackRow: {
    height: 112,
    flexDirection: "row",
    marginTop: -278,
    marginLeft: 6,
    marginRight: 194
  },
  rect4: {
    // backgroundColor: "",
    borderWidth: 1,
    borderColor: "#000000",
    width: 20,
    height: 20,
    top:3,
  },
  textInput: {
    fontFamily: "roboto-300",
    color: "#121212",
    fontSize: 16,
    width: 119,
    height: 19,
    marginLeft: 20
  },
  rect4Row: {
    height: 19,
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 14,
    marginRight: 194
  }
});

export default Login;

