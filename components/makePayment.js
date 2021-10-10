import React, { Component } from "react";
import { StyleSheet, View, ScrollView, Text,Picker,TouchableOpacity,Alert } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

    
function MakePayment(navigation) {
  const createTwoButtonAlert = () =>{
        Alert.alert(
            "Thank you",
            "Your Payment made sucussfully",
            [
                {
                    text: "Back To Page",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
            ]
        )};
  return (
    <View style={styles.container}>
      {/*<View style={styles.scrollArea1}>*/}
      {/*  <ScrollView*/}
      {/*    horizontal={false}*/}
      {/*    contentContainerStyle={styles.scrollArea1_contentContainerStyle}*/}
      {/*  >*/}
      {/*    <Text style={styles.makePayment}>MAKE PAYMENT</Text>*/}
      {/*  </ScrollView>*/}
      {/*</View>*/}
      <Text style={styles.accountNumber}>ACCOUNT NUMBER</Text>
      <View style={styles.rect1}>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Enter Account  Num (can be seen in your bill invoice)"
           placeholderTextColor="black"
        />
      </View>
      <Text style={styles.amount}>AMOUNT</Text>
      <View style={styles.rect2}>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Enter Amount"
           placeholderTextColor="black"
        />
      </View>
      <Text style={styles.selectCard}>SELECT CARD</Text>
       <Picker  style={styles.rec21}>
                                    <Picker label="4562  ****54" value="java" />
                                    <Picker label="4562  ****22" value="js" />
                                    <Picker label="4562  ****14" value="js" />
                                </Picker>
    
      <Text style={styles.mobileNumber}>MOBILE NUMBER</Text>
      <View style={styles.rect4}>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
           placeholder="Enter Mobile Num Ex(+94 767 309 605)"
            placeholderTextColor="black"
        />
      </View>
      <View style={styles.rect5Row}>
       <TouchableOpacity onPress={createTwoButtonAlert}> 
        <View style={styles.rect5}>
          <Text style={styles.confirm2}>CONFIRM</Text>
        </View>
        </TouchableOpacity>
        <View style={styles.rect6}>
          <Text style={styles.exit}>EXIT</Text>
        </View>
      </View>
      <View style={styles.rect7}>
        <Text style={styles.cardlessPayment}>CARDLESS PAYMENT</Text>
      </View>
      <View style={styles.rect8}>
        <Text style={styles.loremIpsum1}>
          PLEASE ENTER VALID NUMBER {"\n"}TO GET BILL CONFIRMATION
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(248,234,234,1)",
    marginLeft:-25
  },
  scrollArea1: {
    width: 414,
    height: 35,
    backgroundColor: "rgba(129,41,83,1)",
    borderRadius: 7,
    marginTop: 2
  },
  scrollArea1_contentContainerStyle: {
    height: 35,
    width: 360
  },
  makePayment: {
    fontFamily: "roboto-500",
    color: "rgba(251,248,248,1)",
    fontSize: 18,
    marginTop: 5,
    marginLeft: 150
  },
  accountNumber: {
    fontFamily: "roboto-700",
    color: "rgba(0,0,0,1)",
    fontSize: 20,
    marginTop: 25,
    marginLeft: 32
  },
  rect1: {
    width: 340,
    height: 41,
    backgroundColor: "rgba(196,196,196,1)",
    borderRadius: 10,
    marginLeft: 32
  },
  amount: {
    fontFamily: "roboto-700",
    color: "rgba(0,0,0,1)",
    fontSize: 20,
    marginTop: 15,
    marginLeft: 32
  },
  rect2: {
    width: 340,
    height: 41,
    backgroundColor: "rgba(196,196,196,1)",
    borderRadius: 10,
    marginLeft: 32
  },

   rect21: {
    width: 100,
    height: 41,
   
    borderRadius: 10,
    marginLeft:10
  },
  selectCard: {
    fontFamily: "roboto-700",
    color: "rgba(0,0,0,1)",
    fontSize: 20,
    marginTop: 15,
    marginLeft: 34
  },
  rect3: {
    width: 340,
    height: 41,
    backgroundColor: "rgba(196,196,196,1)",
    borderRadius: 10,
    marginLeft:-8,
    alignSelf: "center"
  },
  mobileNumber: {
    fontFamily: "roboto-700",
    color: "rgba(0,0,0,1)",
    fontSize: 20,
    marginTop: 15,
    marginLeft: 38
  },
  rect4: {
    width: 340,
    height: 41,
    backgroundColor: "rgba(196,196,196,1)",
    borderRadius: 10,
    marginTop: 3,
    marginLeft:32
  },
  rect5: {
    width: 120,
    height: 43,
    backgroundColor: "rgba(129,41,83,1)",
    borderRadius: 10,
    marginLeft:30
  },
  confirm2: {
    fontFamily: "roboto-500",
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    marginTop: 12,
    marginLeft: 25
  },
  rect6: {
    width: 120,
    height: 43,
    backgroundColor: "rgba(129,41,83,1)",
    borderRadius: 10,
    marginLeft: 35
  },
  exit: {
    fontFamily: "roboto-500",
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    marginTop: 12,
    marginLeft: 47
  },
  rect5Row: {
    height: 43,
    flexDirection: "row",
    marginTop: 15,
    marginLeft: 34,
    marginRight: 37
  },
  rect7: {
    width: 171,
    height: 43,
    backgroundColor: "rgba(129,41,83,1)",
    borderRadius: 10,
    marginTop: 9,
    marginLeft: 120
  },
  cardlessPayment: {
    fontFamily: "roboto-500",
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    marginTop: 12,
    marginLeft: 8
  },
  rect8: {
    width: 297,
    height: 90,

    backgroundColor: "rgba(196,196,196,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.38,
    shadowRadius: 0,
    borderRadius: 10,
    marginTop: 10,
    marginLeft: 55
  },
  loremIpsum1: {
    fontFamily: "roboto-500italic",
    color: "#121212",
    fontSize: 20,
    marginTop: 20,
    marginLeft: 7
  }
});

export default MakePayment;
