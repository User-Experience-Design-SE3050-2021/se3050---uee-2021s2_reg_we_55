import React, { Component } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

function Home(props) {
  return (

    <View style={styles.container}>
      <View style={styles.rect5Stack}>
        <View style={styles.rect5}>
          <Text style={styles.nearbyCebCentres}>Nearby CEB Centre&#39;s</Text>
          <View style={styles.image4Row}>
            <Image
              source={require("./images/address2-removebg-preview.png")}
              resizeMode="contain"
              style={styles.image4}
            ></Image>
            <Text style={styles.loremIpsum6}>
              Kollonnawa Branch {"\n"}298/2 Umagiriya, Kollonnawa
            </Text>
          </View>
          <View style={styles.image5Row}>
            <Image
              source={require("./images/address2-removebg-preview.png")}
              resizeMode="contain"
              style={styles.image5}
            ></Image>
            <Text style={styles.loremIpsum7}>
              Demetagoda Branch{"\n"}31/8 Baseline Road, Demetagoda
            </Text>
          </View>
          <Text style={styles.text3}>011 - 2457989</Text>
        </View>
        <Image
          source={require("./images/unnamed-removebg-preview.png")}
          resizeMode="contain"
          style={styles.image3}
        ></Image>
        <Image
          source={require("./images/phone-icon-in-black-and-white-telephone-symbol-vector-22968155-removebg-preview.png")}
          resizeMode="contain"
          style={styles.image6}
        ></Image>
      </View>

      <View style={styles.rect4StackStack}>
        <View style={styles.rect4Stack}>
          <View style={styles.rect4}>
            <View style={styles.loremIpsum3Stack}>
              <Text style={styles.loremIpsum3}></Text>
              <Text style={styles.loremIpsum4}>
                Have a look at Your Last {"\n"}Bill Reading
              </Text>
            </View>
            <View style={styles.textStack}>
              <Text style={styles.text}>8/11/2021 : 89883 Last Reading</Text>
            </View>
            <Text style={styles.loremIpsum5}>
              Total Number of Units Consumed{"\n"}Last Month
            </Text>
            <Text style={styles.text2}>8/11/2021 : 167 Units</Text>
          </View>
          <Image
            source={require("./images/unnamed-removebg-preview.png")}
            resizeMode="contain"
            style={styles.image2}
          ></Image>
          <View style={styles.rect6}>
            <Text style={styles.powerOutage}>Power Outage?</Text>
            <Text style={styles.loremIpsum2}>
              Lodge electricity complaints {"\n"}with few touches without
              callings
            </Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.lodgeComplain}>Lodge Complain</Text>
            </TouchableOpacity>
          </View>
          <Image
            source={require("./images/unnamed-removebg-preview.png")}
            resizeMode="contain"
            style={styles.image1}
          ></Image>
        </View>
        <View style={styles.rect2Stack}>
          <View style={styles.rect2}>
            <Text style={styles.loremIpsum}>
              Welcome !{"\n"}CEB Care Digital Experience
            </Text>
          </View>
          <Image
            source={require("./images/unnamed-removebg-preview.png")}
            resizeMode="contain"
            style={styles.image}
          ></Image>
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
  rect5: {
    top: -55,
    left: 1,
    width: 370,
    height: 218,
    position: "absolute",
    backgroundColor: "rgba(196,196,196,1)",
    borderRadius: 5
  },
  nearbyCebCentres: {
    fontFamily: "quicksand-700",
    color: "#121212",
    fontSize: 18,
    width: 219,
    height: 46,
    marginTop: 13,
    marginLeft: 49
  },
  image4: {
    top:1,
    width: 36,
    height: 36,
    marginTop: 2
  },
  loremIpsum6: {
    fontFamily: "quicksand-regular",
    color: "#121212",
    fontSize: 16,
    marginLeft: 10
  },
  image4Row: {
    height: 40,
    flexDirection: "row",
    marginTop: 3,
    marginLeft: 3,
    marginRight: 71
  },
  image5: {
    width: 36,
    height: 36,
    marginTop: 3
  },
  loremIpsum7: {
    fontFamily: "quicksand-regular",
    color: "#121212",
    fontSize: 16,
    marginLeft: 10
  },
  image5Row: {
    height: 40,
    flexDirection: "row",
    marginTop: 14,
    marginLeft: 3,
    marginRight: 44
  },
  text3: {
    fontFamily: "quicksand-regular",
    color: "#121212",
    fontSize: 16,
    width: 247,
    height: 40,
    marginTop: 12,
    marginLeft: 50
  },
  image3: {
    top: -67,
    left: 0,
    width: 45,
    height: 96,
    position: "absolute"
  },
  image6: {
    top: 90,
    left: 1,
    width: 50,
    height: 82,
    position: "absolute"
  },
  rect5Stack: {
    width: 341,
    height: 241,
    marginTop: 472,
    marginLeft: 10
  },
  rect4: {
    top: 95,
    left: 0,
    width: 370,
    height: 167,
    position: "absolute",
    backgroundColor: "rgba(196,196,196,1)",
    borderRadius: 5
  },
  loremIpsum3: {
    top: 9,
    left: 12,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  loremIpsum4: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "quicksand-700",
    color: "#121212",
    fontSize: 18
  },
  loremIpsum3Stack: {
    width: 219,
    height: 46,
    marginTop: 6,
    marginLeft: 50
  },
  text: {
    top: 3,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    width: 234,
    height: 23,
    fontSize: 16
  },
  text4: {
    top: 0,
    left: 120,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  textStack: {
    width: 234,
    height: 20,
    marginTop: 4,
    marginLeft: 50
  },
  loremIpsum5: {
    fontFamily: "quicksand-700",
    color: "#121212",
    fontSize: 18,
    marginTop: 9,
    marginLeft: 48
  },
  text2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    width: 234,
    height: 23,
    fontSize: 16,
    marginTop: 3.5,
    marginLeft: 48
  },
  image2: {
    top: 80,
    left: 0,
    width: 45,
    height: 96,
    position: "absolute"
  },
  rect6: {
    top: -55,
    left: 0,
    width: 370,
    height: 132,
    position: "absolute",
    backgroundColor: "rgba(196,196,196,1)",
    borderRadius: 5
  },
  powerOutage: {
    fontFamily: "quicksand-700",
    color: "#121212",
    fontSize: 18,
    width: 286,
    height: 26,
    marginTop: 4,
    marginLeft: 51
  },
  loremIpsum2: {
    fontFamily: "quicksand-regular",
    color: "#121212",
    fontSize: 18,
    marginTop: 1,
    marginLeft: 50
  },
  button: {
    width: 180,
    height: 33,
    backgroundColor: "rgba(129,41,83,1)",
    borderRadius: 23,
    marginTop: 8,
    marginLeft: 159
  },
  lodgeComplain: {
    fontFamily: "roboto-700",
    color: "rgba(224,225,139,1)",
    fontSize: 18,
    marginTop: 4.5,
    marginLeft: 25
  },
  image1: {
    top: -75,
    left: 0,
    width: 45,
    height: 96,
    position: "absolute"
  },
  rect4Stack: {
    top: 61,
    left: 0,
    width: 340,
    height: 333,
    position: "absolute"
  },
  rect2: {
    top: -60,
    left: 0,
    width: 370,
    height: 49,
    position: "absolute",
    backgroundColor: "rgba(196,196,196,1)",
    borderRadius: 5
  },
  loremIpsum: {
    fontFamily: "quicksand-700",
    color: "#121212",
    fontSize: 18,
    marginTop: 3,
    marginLeft: 51
  },
  image: {
    top: -80,
    left: 0,
    width: 45,
    height: 96,
    position: "absolute"
  },
  rect2Stack: {
    top: 0,
    left: 0,
    width: 340,
    height: 96,
    position: "absolute"
  },
  rect4StackStack: {
    width: 340,
    height: 394,
    marginTop: -636,
    marginLeft: 10
  }
});

export default Home;
