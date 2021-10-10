import React, { Component } from "react";
import {
    StyleSheet,
    View,
    ScrollView,
    Text,
    Image,
    TouchableOpacity,
    TextInput,
    Alert,
    Picker
} from "react-native";

function complain(props) {
    const createTwoButtonAlert = () =>{
        Alert.alert(
            "Lodge Your Complain",
            "Complain is Being Lodged Successfully",
            [
                {
                    text: "Back To Page",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
            ]
        )};
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.rect3Stack}>

                    <View style={styles.scrollArea}>
                        <ScrollView
                            horizontal={false}
                            contentContainerStyle={styles.scrollArea_contentContainerStyle}
                        >

                            <View style={styles.rect10Stack}>
                                <View style={styles.rect10}>
                                    <Image
                                        source={require("./images/unnamed-removebg-preview.png")}
                                        resizeMode="contain"
                                        style={styles.image7}
                                    ></Image>
                                </View>
                            </View>

                            <View style={styles.rect2Stack}>
                                <View style={styles.rect2}>
                                    <Text style={styles.loremIpsum}>
                                        Lodge Your Complain
                                    </Text>
                                </View>

                            </View>
                            <View style={styles.nameStack}>
                                {/*<TextInput style={styles.name}*/}
                                {/*           underlineColorAndroid = "transparent"*/}
                                {/*           placeholder = "Name"*/}
                                {/*           placeholderTextColor = "black"*/}
                                {/*           autoCapitalize = "none"></TextInput>*/}
                                <Image
                                    source={require("./images/3466617-200-removebg-preview.png")}
                                    resizeMode="contain"
                                    style={styles.image6}
                                ></Image>

                                <Picker  style={styles.name}>
                                    <Picker label="Electricity Issue" value="java" />
                                    <Picker label="Maintenance Issue" value="js" />
                                    <Picker label="Cable Issue" value="js" />
                                </Picker>
                            </View>
                            <View style={styles.image3Row}>
                                <Image
                                    source={require("./images/phone-icon-in-black-and-white-telephone-symbol-vector-22968155-removebg-preview.png")}
                                    resizeMode="contain"
                                    style={styles.image3}
                                ></Image>
                                <TextInput style={styles.mobileNumber}
                                           underlineColorAndroid = "transparent"
                                           placeholder = "Mobile Number"
                                           placeholderTextColor = "black"
                                           autoCapitalize = "none">
                                </TextInput>
                            </View>

                            <TextInput style={styles.email}
                                       underlineColorAndroid = "transparent"
                                       placeholder = "Land Line Number"
                                       placeholderTextColor = "black"
                                       autoCapitalize = "none"></TextInput>
                            <View style={styles.image4Row}>
                                <Image
                                    source={require("./images/complain-removebg-preview.png")}
                                    resizeMode="contain"
                                    style={styles.image4}
                                ></Image>
                                <TextInput style={styles.password}
                                           underlineColorAndroid = "transparent"
                                           placeholder = "Anything more to tell?"
                                           placeholderTextColor = "black"
                                           autoCapitalize = "none"
                                ></TextInput>
                            </View>

                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.register}
                                      onPress={createTwoButtonAlert}>Lodge Complain</Text>
                            </TouchableOpacity>

                        </ScrollView>
                    </View>
                    <Image
                        source={require("./images/phone-icon-in-black-and-white-telephone-symbol-vector-22968155-removebg-preview.png")}
                        resizeMode="contain"
                        style={styles.image2}
                    ></Image>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(230,230,230,1)"
    },
    // rect3: {
    //   top: 0,
    //   left: 0,
    //   width: 378,
    //   height: 183,
    //   position: "absolute",
    //   backgroundColor: "rgba(129,41,83,1)"
    // },
    scrollArea: {
        top: -30,
        left: 18,
        width: 400,
        height: 696,
        position: "absolute",
        backgroundColor: "#E6E6E6"
    },
    scrollArea_contentContainerStyle: {
        height: 696,
        width: 400
    },
    rect2: {
        top: -60,
        left: 0,
        width: 400,
        height: 63,
        position: "absolute",
        backgroundColor: "rgba(196,196,196,1)",
        borderRadius: 13
    },
    rect10: {
        top: -6,
        left: 0,
        width: 400,
        height: 200,
        position: "absolute",
        backgroundColor: "rgba(129,41,83,1)",

    },
    loremIpsum: {
        fontFamily: "quicksand-700",
        color: "rgba(129,41,83,1)",
        fontSize: 22,
        marginTop: 23,
        marginLeft: 35
    },
    image7: {
        top: 10,
        left: 89,
        width: 200,
        height: 200,
        position: "absolute"
    },
    rect2Stack: {
        width: 360,
        height: 226,
        marginTop: 12
    },
    rect10Stack: {
        width: 360,
        height: 226,
        marginTop: 12
    },
    name: {
        top: -8,
        left: 27,
        position: "absolute",
        fontFamily: "roboto-regular",
        fontSize: 16,
        width: 348,
        height: 44,
        borderColor: '#812953',
        borderWidth: 1,
        color: 'black',
        backgroundColor: "rgba(230,230,230,1)",
        borderRadius: 12,
    },
    image6: {
        top: 2,
        left: 0,
        width: 35,
        height: 33,
        position: "absolute"
    },
    nameStack: {
        width: 71,
        height: 21,
        marginTop: -200
    },
    image3: {
        width: 29,
        height: 30,
        top:8,
    },
    mobileNumber: {
        marginLeft: 1,
        marginTop: 3,
        fontFamily: "roboto-regular",
        fontSize: 16,
        width: 348,
        height: 44,
        borderColor: '#812953',
        borderWidth: 1,
        color: 'black',
        backgroundColor: "rgba(230,230,230,1)",
        borderRadius: 12,
    },
    image3Row: {
        height: 30,
        flexDirection: "row",
        marginTop: 24,
        marginLeft: 3,
        marginRight: 231
    },
    email: {
        marginTop: 30,
        marginLeft: 34,
        fontFamily: "roboto-regular",
        fontSize: 16,
        width: 348,
        height: 44,
        borderColor: '#812953',
        borderWidth: 1,
        color: 'black',
        backgroundColor: "rgba(230,230,230,1)",
        borderRadius: 12,
    },
    image4: {
        width: 40,
        height: 23,
        marginTop: 1,
        marginLeft:-5
    },
    password: {
        marginLeft: 1,
        top: -14,
        left: 30,
        position: "absolute",
        fontFamily: "roboto-regular",
        fontSize: 16,
        width: 348,
        height: 44,
        borderColor: '#812953',
        borderWidth: 1,
        color: 'black',
        backgroundColor: "rgba(230,230,230,1)",
        borderRadius: 12,
    },
    image4Row: {
        height: 17,
        flexDirection: "row",
        marginTop: 27,
        marginLeft: 4,
        marginRight: 264
    },
    image5: {
        width: 29,
        height: 15,
        marginTop: 6
    },
    confirmPassword: {
        top: -5,
        left: 30,
        position: "absolute",
        fontFamily: "roboto-regular",
        fontSize: 16,
        width: 348,
        height: 44,
        borderColor: '#812953',
        borderWidth: 1,
        color: 'black',
        backgroundColor: "rgba(230,230,230,1)",
        borderRadius: 12,
    },
    image5Row: {
        height: 17,
        flexDirection: "row",
        marginTop: 30,
        marginLeft: 4,
        marginRight: 210
    },
    button: {
        width: 174,
        height: 51,
        backgroundColor: "rgba(129,41,83,1)",
        borderRadius: 14,
        marginTop: 36,
        marginLeft: 112
    },
    register: {
        fontFamily: "roboto-700",
        color: "rgba(224,225,139,1)",
        fontSize: 20,
        marginTop: 13,
        marginLeft: "auto",
        marginRight:"auto"
    },
    loremIpsum2: {
        fontFamily: "quicksand-700",
        color: "#121212",
        fontSize: 18
    },
    signIn: {
        fontFamily: "quicksand-700",
        color: "rgba(32,69,202,1)",
        fontSize: 18,
        width: 78,
        height: 23,
        marginLeft: 12
    },
    loremIpsum2Row: {
        height: 23,
        flexDirection: "row",
        marginTop: 18,
        marginLeft: 55,
        marginRight: 16
    },
    image2: {
        top: 360,
        left: 21,
        width: 29,
        height: 30,
        position: "absolute"
    },
    rect3Stack: {
        width: 378,
        height: 696,
        marginTop: 24,
        marginLeft: -18
    }
});

export default complain;
