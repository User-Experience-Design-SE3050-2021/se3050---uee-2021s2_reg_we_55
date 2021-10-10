import React, { Component } from "react";
// import { Appbar } from 'react-native-paper';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableOpacity
} from "react-native";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Svg, { Ellipse } from "react-native-svg";

function ViewCard({navigation}) {
  // <Appbar.Header>
  //   <Appbar.Content title="Title" subtitle={'Subtitle'} />
  // </Appbar.Header>
  return (
    <View style={styles.container}>
      {/*<View style={styles.scrollArea1}>*/}
      {/*  <ScrollView*/}
      {/*    horizontal={false}*/}
      {/*    contentContainerStyle={styles.scrollArea1_contentContainerStyle}*/}
      {/*  >*/}
      {/*    <Text style={styles.myCard}>MY CARD</Text>*/}
      {/*  </ScrollView>*/}
      {/*</View>*/}
      <TouchableOpacity style={styles.button}   onPress={() =>
        navigation.navigate('Addcard')}>
        <Text style={styles.loremIpsum}>+</Text>
        <Text style={styles.addNewCard}
        
    
        >ADD NEW CARD</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button1}>
        <View style={styles.ellipseStackRow}>
          <View style={styles.ellipseStack}>
            {/*<Svg viewBox="0 0 74 71" style={styles.ellipse}>*/}
            {/*  <Ellipse*/}
            {/*    stroke="rgba(230, 230, 230,1)"*/}
            {/*    strokeWidth={0}*/}
            {/*    fill="rgba(72,147,238,1)"*/}
            {/*    cx={37}*/}
            {/*    cy={35}*/}
            {/*    rx={37}*/}
            {/*    ry={35}*/}
            {/*  ></Ellipse>*/}
            {/*</Svg>*/}
            {/*<Svg viewBox="0 0 74 71" style={styles.ellipse1}>*/}
            {/*  <Ellipse*/}
            {/*    stroke="rgba(230, 230, 230,1)"*/}
            {/*    strokeWidth={0}*/}
            {/*    fill="rgba(112,173,247,1)"*/}
            {/*    cx={37}*/}
            {/*    cy={35}*/}
            {/*    rx={37}*/}
            {/*    ry={35}*/}
            {/*  ></Ellipse>*/}
            {/*</Svg>*/}
          </View>
          <Text style={styles.visa}>VISA</Text>
        </View>
        <View style={styles.loremIpsum2Row}>
          <Text style={styles.loremIpsum2}>45XX</Text>
          <Text style={styles.loremIpsum3}>35XX</Text>
          <Text style={styles.loremIpsum4}>66XX</Text>
          <Text style={styles.loremIpsum5}>99XX</Text>
        </View>
        <View style={styles.ahmedRow}>
          <Text style={styles.ahmed}>Ahmed</Text>
          <Text style={styles.loremIpsum6}>11/22</Text>
        </View>
      </TouchableOpacity>
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
    width: 360,
    height: 35,
    backgroundColor: "rgba(68,140,240,1)",
    marginTop: 22
  },
  scrollArea1_contentContainerStyle: {
    height: 35,
    width: 360
  },
  myCard: {
    fontFamily: "roboto-500",
    color: "rgba(251,248,248,1)",
    fontSize: 18,
    marginTop: 7,
    marginLeft: 141
  },
  button: {
    width: 350,
    height: 198,
    backgroundColor: "rgba(196,196,196,1)",
    borderRadius: 15,
    marginTop: 46,
    marginLeft: 29
  },
  loremIpsum: {
    fontFamily: "roboto-regular",
    color: "rgba(200,46,46,1)",
    fontSize: 120,
    marginLeft:'auto',
    marginRight:'auto'
  },
  addNewCard: {
    fontFamily: "roboto-regular",
    color: "rgba(0,0,0,1)",
    fontSize: 30,
    marginTop:-15,
    marginLeft:'auto',
    marginRight:'auto'
  },
  button1: {
    width: 350,
    height: 198,
    borderRadius: 15,
    backgroundColor: "rgba(35,121,242,1)",
    marginTop: 59,
    marginLeft: 29
  },
  ellipse: {
    top: 0,
    left: 0,
    width: 78,
    height: 66,
    position: "absolute"
  },
  ellipse1: {
    top: 0,
    left: 52,
    width: 78,
    height: 66,
    position: "absolute"
  },
  ellipseStack: {
    width: 130,
    height: 66
  },
  visa: {
    fontFamily: "roboto-300italic",
    color: "#121212",
    fontSize: 35,
    marginLeft: 120,
    marginTop: 17
  },
  ellipseStackRow: {
    height: 66,
    flexDirection: "row",
    marginRight: 30
  },
  loremIpsum2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 20,
    marginLeft:40
  },
  loremIpsum3: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 20,
    marginLeft: 15
  },
  loremIpsum4: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 20,
    marginLeft: 14
  },
  loremIpsum5: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 20,
    marginLeft: 11
  },
  loremIpsum2Row: {
    height: 24,
    flexDirection: "row",
    marginTop: 35,
    marginLeft: 54,
    marginRight: 19
  },
  ahmed: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 20
  },
  loremIpsum6: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 20,
    marginLeft: 187
  },
  ahmedRow: {
    height: 24,
    flexDirection: "row",
    marginTop: 38,
    marginLeft: 19,
    marginRight: 14
  }
});

export default ViewCard;
