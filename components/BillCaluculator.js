import React, { Component } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity,TextInput,Alert } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

function Bill(props) {
  const createTwoButtonAlert = () =>
    Alert.alert(
      "Bill Calculation",
      "The Bill Calculation Is Successful",
      [
        {
          text: "Back To Page",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
      ]
    );
  return (
    <ScrollView style={styles.container1}>
    
      <View style={styles.container}>
        <View style={styles.rectStackStack}>
          <View style={styles.rectStack}>
            <View style={styles.rect3}>
              <Text style={styles.lastMeterReading}>Last Meter Reading</Text>
                <TextInput style={styles.text3}
                           underlineColorAndroid = "transparent"
                           placeholder = "Type Your Last Meter Reading here"
                           placeholderTextColor = "black"
                           autoCapitalize = "none">
                </TextInput>
              <Text style={styles.text}>Current Meter Reading</Text>

                <TextInput style={styles.text4}
                           underlineColorAndroid = "transparent"
                           placeholder = "Type Your Current Meter Reading here"
                           placeholderTextColor = "black"
                           autoCapitalize = "none">
                </TextInput>

              <Text style={styles.units}>Units</Text>
                <TextInput style={styles.numberOfUnits}
                      underlineColorAndroid = "transparent"
                      placeholder = "Number of Units"
                      placeholderTextColor = "black"
                      autoCapitalize = "none"></TextInput>

              <TouchableOpacity  onPress={createTwoButtonAlert} style={styles.button}>
                <Text style={styles.calculate}>Calculate</Text>
              </TouchableOpacity>
            </View>
          </View>



          <View style={styles.rect2}>
            <Image
              source={require("./images/info-removebg-preview.png")}
              resizeMode="contain"
              style={styles.image}
            ></Image>
            <Text style={styles.loremIpsum8}>
              CALCULATE YOUR ELECTRICITY {"\n"}BILL YOURSELF
            </Text>
          </View>
          <Text style={styles.loremIpsum3}></Text>
        </View>

        <View style={styles.rect7}>
          <Text style={styles.text2}>Fixed Cost For Bill Usage</Text>
            <TextInput style={styles.text7}
                       underlineColorAndroid = "transparent"
                       placeholder = "480 Lkr Is A Fixed Charge For E.Bill"
                       placeholderTextColor = "black"
                       autoCapitalize = "none">
            </TextInput>
          <Text style={styles.totalAmount}>Total Amount</Text>

            <TextInput style={styles.text8}
                       underlineColorAndroid = "transparent"
                       placeholder = "Total Amount of Electricity Bill"
                       placeholderTextColor = "black"
                       autoCapitalize = "none"></TextInput>

        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
 container1: {
    width:360,
    backgroundColor: "rgba(230, 230, 230,1)",
    marginRight:35,
    

  },
 
  container: {
    flex: 1,
    backgroundColor: "rgba(230, 230, 230,1)",
   
    

  },
  rect: {
    width: 400,
    height: 56,
    position: "absolute",
    backgroundColor: "rgba(129,41,83,1)",
    left: 0
  },
  billCalculator: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 36,
    width: 252,
    height: 43,
    marginTop: 10,
    marginLeft: 55
  },
  image: {
    top: -20,
    left: 10,
    width: 45,
    height: 96,
    position: "absolute"
  },
  rect3: {
    top: 80,
    left: 10,
    width: 370,
    height: 310,
    position: "absolute",
    backgroundColor: "rgba(196,196,196,1)",
    borderRadius: 12
  },
  lastMeterReading: {
    fontFamily: "quicksand-700",
    color: "#121212",
    fontSize: 18,
    marginTop: 8,
    marginLeft: 8
  },
  text: {
    fontFamily: "quicksand-700",
    color: "#121212",
    fontSize: 18,
    width: 220,
    height: 23,
    marginTop: 3,
    marginLeft: 8
  },
  rect5: {
    width: 329,
    height: 44,
    backgroundColor: "rgba(230,230,230,1)",
    borderRadius: 12,
    marginTop: 1,
    marginLeft: 6
  },
  text3: {
    fontFamily: "roboto-regular",
    fontSize: 16,
    width: 353,
    height: 44,
    marginTop: 13,
    marginLeft: 6,
    borderColor: '#812953',
    borderWidth: 1,
    color: 'black',
    backgroundColor: "rgba(230,230,230,1)",
    borderRadius: 12,
  },
  text4: {
    fontFamily: "roboto-regular",
    fontSize: 16,
    width: 353,
    height: 44,
    marginTop: 13,
    marginLeft: 6,
    borderWidth: 1,
    color: 'black',
    backgroundColor: "rgba(230,230,230,1)",
    borderRadius: 12,
    borderColor: '#812953',
  },
  numberOfUnits: {
    fontFamily: "roboto-regular",
    color: "black",
    fontSize: 16,
    width: 353,
    height: 44,
    marginTop: 11,
    marginLeft: 6,
    borderWidth: 1,
    backgroundColor: "rgba(230,230,230,1)",
    borderRadius: 12,
    borderColor: '#812953',
  },
  text7: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 16,
    width: 353,
    height: 44,
    marginTop: 11,
    marginLeft: 6,
    borderWidth: 1,
    backgroundColor: "rgba(230,230,230,1)",
    borderRadius: 12,
    borderColor: '#812953',
  },
  text8: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 16,
    width: 353,
    height: 44,
    marginTop: 12,
    marginLeft: 6,
    borderWidth: 1,
    backgroundColor: "rgba(230,230,230,1)",
    borderRadius: 12,
    borderColor: '#812953',
  },
  units: {
    fontFamily: "quicksand-700",
    color: "#121212",
    fontSize: 18,
    width: 170,
    height: 23,
    marginTop: 1,
    marginLeft: 8
  },
  button: {
    width: 163,
    height: 39,
    backgroundColor: "rgba(129,41,83,1)",
    borderRadius: 30,
    marginTop: 10,
    marginLeft: 98.5
  },
  calculate: {
    fontFamily: "roboto-700",
    color: "rgba(224,225,139,1)",
    fontSize: 20,
    marginTop: 5,
    marginLeft: 41
  },
  rectStack: {
    top: 0,
    left: 0,
    width: 380,
    height: 438,
    position: "absolute"
  },
  rect2: {
    top: -5,
    left: 10,
    width: 370,
    height: 61,
    position: "absolute",
    backgroundColor: "rgba(196,196,196,1)",
    borderRadius: 12
  },
  loremIpsum8: {
    fontFamily: "quicksand-700",
    color: "#121212",
    fontSize: 18,
    marginTop: 9,
    marginLeft: 57
  },
  loremIpsum3: {
    top: 295,
    left: 72,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  rectStackStack: {
    width: 370,
    height: 438,
    marginTop: 24
  },
  rect7: {
    top:-60,
    width: 370,
    height: 218,
    backgroundColor: "rgba(196,196,196,1)",
    borderRadius: 12,
    marginTop: 21,
    marginLeft: 10
  },
  text2: {
    fontFamily: "quicksand-700",
    color: "#121212",
    fontSize: 18,
    width: 230,
    height: 23,
    marginTop: 25,
    marginLeft: 8
  },
  totalAmount: {
    fontFamily: "quicksand-700",
    color: "#121212",
    fontSize: 18,
    width: 170,
    height: 23,
    marginTop: 10,
    marginLeft: 8
  },
  rect9: {
    width: 329,
    height: 44,
    backgroundColor: "rgba(230,230,230,1)",
    borderRadius: 12,
    marginTop: 8,
    marginLeft: 6
  },

});

export default Bill;
