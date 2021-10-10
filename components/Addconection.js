import React, { Component } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableOpacity
} from "react-native";
import { TextInput } from "react-native-gesture-handler";

function AddNewConnection(props) {
  return (
    <View style={styles.container}>
      <View style={styles.scrollArea1RowColumn}>
        <View style={styles.scrollArea1Row}>
          <View style={styles.scrollArea1}>
            <ScrollView
              horizontal={false}
              contentContainerStyle={styles.scrollArea1_contentContainerStyle}
            ></ScrollView>
          </View>
          {/*<View style={styles.scrollArea}>*/}
          {/*  <ScrollView*/}
          {/*    horizontal={false}*/}
          {/*    contentContainerStyle={styles.scrollArea_contentContainerStyle}*/}
          {/*  >*/}
          {/*    <Text style={styles.addNewConnection}>ADD NEW CONNECTION</Text>*/}
          {/*  </ScrollView>*/}
          {/*</View>*/}
        </View>
        <Text style={styles.SubscribeElectricityAccount}>SUBSCRIBE ELECTRICITY ACCOUNT</Text>
        <View style={styles.rect}>
          <TextInput
            style={styles.input}
            placeholder="ELECTRICITY ACCOUNT NAME"
            keyboardType="text"
          />
        </View>
        <View style={styles.rect2}>
          <TextInput
            style={styles.input}
            placeholder="ELECTRICITY ACCOUNT NUMBER"
            keyboardType="numeric"
          />

        </View>
        <View style={styles.rect1}>
          <TextInput
            style={styles.input}
            placeholder="PREMISE ID"
            keyboardType="text"
          />
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.submit}>SUBMIT</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button1}>
          <View style={styles.cancelFiller}></View>
          <Text style={styles.cancel}>CANCEL</Text>
        </TouchableOpacity>
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
    width: 360,
    height: 35,
    backgroundColor: "rgba(129,41,83,1)",
    borderRadius: 7,
    marginLeft: 522,
    marginTop: 2
  },
  scrollArea1_contentContainerStyle: {
    height: 35,
    width: 360
  },
  scrollArea: {
    height: 38,
    backgroundColor: "rgba(129,41,83,1)",
    borderRadius: 7,
    flex: 1,
    marginTop:-20,
    marginRight: 522,
    marginLeft: -882
  },
  scrollArea_contentContainerStyle: {
    height: 35
  },
  addNewConnection: {
    fontFamily: "roboto-500",
    color: "rgba(251,248,248,1)",
    fontSize: 18,
    marginTop: 7,
    marginLeft: 100
  },
  scrollArea1Row: {
    height: 37,
    flexDirection: "row"
  },
  SubscribeElectricityAccount: {
    fontFamily: "roboto-700",
    color: "rgba(168,52,52,1)",
    fontSize: 18,
    marginTop: 25,
    marginLeft: 55
  },

  ElectricityAccountNameText: {
    fontFamily: "roboto-300",
    color: "rgba(33,29,29,1)",
    fontSize: 15,
    marginTop: 9,
    marginLeft: 15
  },

  premiseId: {
    fontFamily: "roboto-300",
    color: "rgba(33,29,29,1)",
    fontSize: 15,
    marginTop: 9,
    marginLeft: 15
  },
  button: {
    width: 132,
    height: 37,
    backgroundColor: "rgba(129,41,83,1)",
    borderRadius: 10,
    marginTop: 70,
    marginBottom:10,
    marginLeft: 141
  },
  submit: {
    fontFamily: "roboto-500",
    color: "rgba(255,255,255,1)",
    marginTop: 10,
    marginLeft: 41
  },
  button1: {
    width: 132,
    height: 37,
    backgroundColor: "rgba(101,84,92,1)",
    borderRadius: 10,
    marginTop: 10,
    marginLeft: 141
  },
  cancelFiller: {
    flex: 1
  },
  cancel: {
    fontFamily: "roboto-500",
    color: "rgba(255,255,255,1)",
    transform: [
      {
        rotate: "1.00deg"
      }
    ],
    marginBottom: 10,
    marginLeft: 38
  },
  scrollArea1RowColumn: {
    marginTop: 22,
    marginRight: -522
  },

  rect: {
    width: 274,
    height: 37,
    backgroundColor: "rgba(196,196,196,1)",
    borderRadius: 10,
    marginTop: 71,
    marginLeft: 60
  },

  rect2: {
    backgroundColor: "rgba(196,196,196,1)",
    borderRadius: 10,
    // flexDirection: "row",
    width: 274,
    height: 37,
    // flex: 1,
    // marginBottom: 100,
    marginTop: 50,
    marginLeft: 60,
    marginRight: 39
  },

  rect1: {
    width: 274,
    height: 37,
    backgroundColor: "rgba(196,196,196,1)",
    borderRadius: 10,
    marginTop: 50,
    marginLeft: 60,
    marginRight: 39
  },

  loremIpsum3Filler: {
    flex: 1,
    flexDirection: "row"
  },
  loremIpsum3: {
    fontFamily: "roboto-300",
    color: "rgba(33,29,29,1)",
    fontSize: 15,
    alignSelf: "flex-end",
    marginRight: 30,
    marginLeft:10,
    marginTop:7,
    marginBottom: 12
  }
});

export default AddNewConnection;
