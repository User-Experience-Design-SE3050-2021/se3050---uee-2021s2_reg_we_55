import React, { Component } from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import DateInput from '@maksymblank/react-native-date-input';

function AddCard(props) {
  return (
    <View style={styles.container}>
      {/*<View style={styles.scrollArea1}>*/}
      {/*  <ScrollView*/}
      {/*    horizontal={false}*/}
      {/*    contentContainerStyle={styles.scrollArea1_contentContainerStyle5}*/}
      {/*  >*/}
      {/*    <Text style={styles.myCards}>MY CARDS</Text>*/}
      {/*  </ScrollView>*/}
      {/*</View>*/}
      {/*<Text style={styles.addNewCard}>ADD NEW CARD</Text>*/}
      <Text style={styles.cardNumber}>CARD NUMBER</Text>
      <View style={styles.rect}>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Enter Card Number"
          placeholderTextColor="black"
        />
      </View>
      <Text style={styles.cardHolderName}>CARD HOLDER NAME</Text>
      <View style={styles.rect1}>
        <TextInput
          style={styles.input}
          keyboardType="text"
          placeholder="Enter Card Holder Name"
          placeholderTextColor="black"
        />
      </View>
      <View style={styles.expiryDateRow}>
        <Text style={styles.expiryDate}>EXPIRY DATE</Text>
        <Text style={styles.cvv}>CVV</Text>
      </View>
      <View style={styles.rect2Row}>
        <View style={styles.rect2}>
        

          <DateInput
         
    mask={'MM/YY'}
    onChange={date => console.log(date)}
    validate={true} // true by default
    activeColor={'red'} // #7368FF by default
/>
        </View>
        <View style={styles.rect3}>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Enter CVV "
          placeholderTextColor="black"
          />
        </View>
      </View>
      <View style={styles.rect4Row}>
        <View style={styles.rect4}>
          <Text style={styles.exit}>EXIT</Text>
        </View>
        <View style={styles.rect5}>
          <Text style={styles.confirm}>CONFIRM</Text>
        </View>
      </View>
      <View style={styles.rect6}>
        <Text style={styles.loremIpsum}>
          YOUR CARD DETAILS {"\n"}WILL BE PROTECTED.
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
    width: 413,
    height: 40,
    backgroundColor: "rgba(129,41,83,1)",
    borderRadius: 7,
    marginTop: 1
  },
  scrollArea1_contentContainerStyle5: {
    height: 49,
    width: 400
  },
  myCards: {
    fontFamily: "roboto-500",
    color: "rgba(251,248,248,1)",
    fontSize: 18,
    marginTop: 6,
    marginLeft: 150
  },
  addNewCard: {
    fontFamily: "roboto-700",
    color: "rgba(124,117,117,1)",
    fontSize: 20,
    marginTop: 15,
    marginLeft: 108
  },
  cardNumber: {
    fontFamily: "roboto-700",
    color: "rgba(0,0,0,1)",
    fontSize: 20,
    marginTop: 55,
    marginLeft: 50
  },
  rect: {
    width: 307,
    height: 41,
    backgroundColor: "rgba(196,196,196,1)",
    borderRadius: 10,
    marginTop: 2,
    marginLeft: 50
  },
  cardHolderName: {
    fontFamily: "roboto-700",
    color: "rgba(0,0,0,1)",
    fontSize: 20,
    marginTop: 21,
    marginLeft: 50
  },
  rect1: {
    width: 307,
    height: 41,
    backgroundColor: "rgba(196,196,196,1)",
    borderRadius: 10,
    marginLeft: 50
  },
  expiryDate: {
    fontFamily: "roboto-700",
    color: "rgba(0,0,0,1)",
    fontSize: 20,
    marginTop:-15,
    marginLeft:20
  },
  cvv: {
    fontFamily: "roboto-700",
    color: "rgba(0,0,0,1)",
    fontSize: 20,
    marginLeft: 75,
    marginTop:-15
  },
  expiryDateRow: {
    height: 24,
    flexDirection: "row",
    marginTop: 30,
    marginLeft: 32,
    marginRight: 70
  },
  rect2: {
    width: 139,
    height: 41,
    backgroundColor: "rgba(196,196,196,1)",
    borderRadius: 10,
    marginTop:-15,
    marginLeft:20
  },
  rect3: {
    width: 139,
    height: 41,
    backgroundColor: "rgba(196,196,196,1)",
    borderRadius: 10,
    marginLeft: 25,
    marginTop:-15
  },
  rect2Row: {
    height: 41,
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 32,
    marginRight: 32
  },
  rect4: {
    width: 110,
    height: 43,
    backgroundColor: "rgba(129,41,83,1)",
    borderRadius: 10,
    marginTop:-1,

    marginLeft:35
  },
  exit: {
    fontFamily: "roboto-500",
    color: "rgba(250,247,247,1)",
    fontSize: 16,
    marginTop: 12,
    marginLeft: 40
  },
  rect5: {
    width: 110,
    height: 43,
    backgroundColor: "rgba(129,41,83,1)",
    borderRadius: 10,
    marginLeft: 35
  },
  confirm: {
    fontFamily: "roboto-500",
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    marginTop: 12,
    marginLeft: 20
  },
  rect4Row: {
    height: 43,
    flexDirection: "row",
    marginTop: 15,
    marginLeft: 41,
    marginRight: 51
  },
  rect6: {
    width: 307,
    height: 103,

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
    marginTop: 30,
    marginLeft: 50
  },
  loremIpsum: {
    fontFamily: "roboto-500italic",
    color: "#121212",
    fontSize: 18,
    marginTop: 30,
    marginLeft: 62
  }
});

export default AddCard;
