import React, { Component } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableOpacity
} from "react-native";

function Success(navigation) {
  return (
    <View style={styles.container}>
      {/*<View style={styles.scrollArea1}>*/}
      {/*  <ScrollView*/}
      {/*    horizontal={false}*/}
      {/*    contentContainerStyle={styles.scrollArea1_contentContainerStyle}*/}
      {/*  >*/}
      {/*    <Text style={styles.addNewConnection1}>ADD NEW CONNECTION</Text>*/}
      {/*  </ScrollView>*/}
      {/*</View>*/}
      <View style={styles.rect}>
        <Text style={styles.newAccountHasBeen}>
          New Account has been{"\n"}successfully added!
        </Text>
        <Text style={styles.loremIpsum}>
          Now you can make payments {"\n"}for this account.
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.ok}>OK</Text>
          onPress={() =>
        navigation.navigate('Home')}>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(248,234,234,1)"
  },
  scrollArea1: {
    width: 415,
    height: 40,
    backgroundColor: "rgba(129,41,83,1)",
    borderRadius: 7,
    marginTop: 2
  },
  scrollArea1_contentContainerStyle: {
    height: 35,
    width: 360
  },
  addNewConnection1: {
    fontFamily: "roboto-500",
    color: "rgba(251,248,248,1)",
    fontSize: 18,
    marginTop: 9,
    marginLeft: 100
  },
  rect: {
    width: 285,
    height: 361,
    backgroundColor: "rgba(196,196,196,1)",
    borderRadius: 10,
    marginTop: 100,
    marginLeft: 60
  },
  newAccountHasBeen: {
    fontFamily: "roboto-700italic",
    color: "#121212",
    fontSize: 16,
    marginTop: 42,
    marginLeft: 62
  },
  loremIpsum: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 16,
    marginTop: 87,
    marginLeft: 36
  },
  button: {
    width: 285,
    height: 38,
    backgroundColor: "rgba(129,41,83,1)",
    borderRadius: 10,
    marginTop: 120
  },
  ok: {
    fontFamily: "roboto-regular",
    color: "rgba(254,251,251,1)",
    fontSize: 16,
    marginTop: 9,
    marginLeft: 133
  }
});

export default Success;
