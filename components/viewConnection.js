import React, { Component } from "react";
import { StyleSheet, View, ScrollView, Text, Image } from "react-native";

function Untitled2(props) {
  return (
    <View style={styles.container}>
      {/*<View style={styles.scrollArea1}>*/}
      {/*  <ScrollView*/}
      {/*    horizontal={false}*/}
      {/*    contentContainerStyle={styles.scrollArea1_contentContainerStyle}*/}
      {/*  >*/}
      {/*    <Text style={styles.subscriptions}>SUBSCRIPTIONS</Text>*/}
      {/*  </ScrollView>*/}
      {/*</View>*/}
      <View style={styles.rectStack}>
        <View style={styles.rect}>
          <Text style={styles.loremIpsum}>
            ACC NO : 87654898{"\n"}ACC NAME : HOUSE BILL
          </Text>
          <View style={styles.rect2}>
            <Image
              source={require("./images/man.jpeg")}
              resizeMode="contain"
              style={styles.image}
            ></Image>
            <Text style={styles.loremIpsum2}>
              No.30 mosque road,{"\n"}Gorakana,{"\n"}Panadura
            </Text>
          </View>
          <View style={styles.rect4Row}>
            <View style={styles.rect4}>
              <Text style={styles.view}>VIEW</Text>
            </View>
            <View style={styles.rect6}>
              <Text style={styles.pay}>PAY</Text>
            </View>
            <View style={styles.rect5}>
              <Text style={styles.pay1}>DELETE</Text>
            </View>
          </View>
        </View>

      </View>

      <View style={styles.rect1Stack}>
        <View style={styles.rect1}>

          <Text style={styles.loremIpsum3}>
            ACC NO : 65349988{"\n"}ACC NAME : OFFICE BILL
          </Text>
          <View style={styles.rect3}>
            <Image
              source={require("./images/man.jpeg")}
              resizeMode="contain"
              style={styles.image1}
            ></Image>
            <Text style={styles.loremIpsum4}>

              No. 12/A Sea street,{"\n"}Pettah,{"\n"}Colombo
            </Text>
          </View>
          <View style={styles.rect7Row}>

            <View style={styles.rect7}>

              <Text style={styles.view1}>VIEW</Text>
            </View>
            <View style={styles.rect8}>
              <Text style={styles.pay2}>PAY</Text>
            </View>
            <View style={styles.rect9}>
              <Text style={styles.pay3}>DELETE</Text>
            </View>
          </View>
        </View>

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
    width: 414,
    height: 35,
    backgroundColor: "rgba(129,41,83,1)",
    borderRadius: 7,
    marginTop: 0
  },
  scrollArea1_contentContainerStyle: {
    height: 35,
    width: 360
  },
  subscriptions: {
    fontFamily: "roboto-500",
    color: "rgba(251,248,248,1)",
    fontSize: 18,
    marginTop: 7,
    marginLeft: 130
  },
  rect: {
    top: 9,
    left: 0,
    width: 314,
    height: 192,
    position: "absolute",
    backgroundColor: "rgba(249,248,248,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.35,
    shadowRadius: 0,
    borderRadius: 11
  },
  loremIpsum: {
    fontFamily: "roboto-700",
    color: "#121212",
    marginTop: 8,
    marginLeft: 102
  },
  rect2: {
    width: 239,
    height: 86,
    backgroundColor: "#E6E6E6",
    borderRadius: 5,
    marginTop: 18,
    marginLeft: 37
  },
  loremIpsum2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 15,
    marginTop: 17,
    marginLeft: 10
  },
  rect4: {
    width: 68,
    height: 25,
    backgroundColor: "rgba(129,41,83,1)",
    borderRadius: 10
  },
  view: {
    fontFamily: "roboto-500",
    color: "rgba(248,248,248,1)",
    marginTop: 4,
    marginLeft: 18
  },
  rect6: {
    width: 68,
    height: 25,
    backgroundColor: "rgba(129,41,83,1)",
    borderRadius: 10,
    marginLeft: 36
  },
  pay: {
    fontFamily: "roboto-500",
    color: "rgba(248,248,248,1)",
    marginTop: 4,
    marginLeft: 21
  },
  rect5: {
    width: 68,
    height: 25,
    backgroundColor: "rgba(129,41,83,1)",
    borderRadius: 10,
    marginLeft: 33
  },
  pay1: {
    fontFamily: "roboto-500",
    color: "rgba(248,248,248,1)",
    marginTop: 4,
    marginLeft: 9
  },
  rect4Row: {
    height: 25,
    flexDirection: "row",
    marginTop: 12,
    marginLeft: 21,
    marginRight: 20
  },
  image: {
    top: -70,
    marginLeft:-26 ,

    width: 59,
    height: 70,
    position: "absolute",
    borderRadius: 100
  },
  rectStack: {
    width: 314,
    height: 201,
    marginTop: 51,
    marginLeft: 50
  },
  rect1: {
    top: 9,
    left: 0,
    width: 314,
    height: 192,
    position: "absolute",
    backgroundColor: "rgba(249,248,248,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.35,
    shadowRadius: 0,
    borderRadius: 11
  },
  loremIpsum3: {
    fontFamily: "roboto-700",
    color: "#121212",
    marginTop: 9,
    marginLeft: 101
  },
  rect3: {
    width: 239,
    height: 87,
    backgroundColor: "#E6E6E6",
    borderRadius: 5,
    marginTop: 17,
    marginLeft: 38
  },
  loremIpsum4: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 15,
    marginTop: 18,
    marginLeft: 16
  },
  rect7: {
    width: 68,
    height: 25,
    backgroundColor: "rgba(129,41,83,1)",
    borderRadius: 10
  },
  view1: {
    fontFamily: "roboto-500",
    color: "rgba(248,248,248,1)",
    marginTop: 4,
    marginLeft: 19
  },
  rect8: {
    width: 68,
    height: 25,
    backgroundColor: "rgba(129,41,83,1)",
    borderRadius: 10,
    marginLeft: 35
  },
  pay2: {
    fontFamily: "roboto-500",
    color: "rgba(248,248,248,1)",
    marginTop: 5,
    marginLeft: 21
  },
  rect9: {
    width: 68,
    height: 25,
    backgroundColor: "rgba(129,41,83,1)",
    borderRadius: 10,
    marginLeft: 35
  },
  pay3: {
    fontFamily: "roboto-500",
    color: "rgba(248,248,248,1)",
    marginTop: 4,
    marginLeft: 9
  },
  rect7Row: {
    height: 25,
    flexDirection: "row",
    marginTop: 11,
    marginLeft: 20,
    marginRight: 20
  },
  image1: {
    left: 7,
    width: 59,
    height: 70,
    position: "absolute",
    borderRadius: 100,
    marginTop:-70,
    marginLeft:-35
  },
  rect1Stack: {
    width: 314,
    height: 201,
    marginTop: 24,
    marginLeft: 50
  }
});

export default Untitled2;
