import React, { Component } from "react";
import {
    StyleSheet,
    View,
    ScrollView,
    Text,
    Image,
    TouchableOpacity,
    TextInput,
    Alert
} from "react-native";

function Profile(props) {
    const createTwoButtonAlert = () =>
        Alert.alert(
            "Ceb Care Sign Up",
            "You Are Successfully Registered",
            [
                {
                    text: "Back To Page",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
            ]
        );
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
                                        source={require("./images/akon.jpg")}
                                        resizeMode="contain"
                                        style={styles.image7}
                                    ></Image>
                                </View>
                            </View>

                            <View style={styles.rect2Stack}>
                                <View style={styles.rect2}>
                                    <Text style={styles.loremIpsum}>
                                        Your Profile
                                    </Text>
                                </View>

                            </View>
                            <View style={styles.nameStack}>
                                <TextInput style={styles.name}
                                           underlineColorAndroid = "transparent"
                                           placeholder = "Name"
                                           placeholderTextColor = "black"
                                           autoCapitalize = "none"></TextInput>
                                <Image
                                    source={require("./images/download__1_-removebg-preview.png")}
                                    resizeMode="contain"
                                    style={styles.image6}
                                ></Image>
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
                                       placeholder = "Email"
                                       placeholderTextColor = "black"
                                       autoCapitalize = "none"></TextInput>


                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.register}
                                      onPress={createTwoButtonAlert}>Edit Profile</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button1}>
                                <Text style={styles.changepassword}
                                      onPress={createTwoButtonAlert}>Change Password</Text>
                            </TouchableOpacity>
                       
                        </ScrollView>
                    </View>
                    <Image
                        source={require("./images/download-removebg-preview.png")}
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
        marginLeft: "auto",
        marginRight:"auto"
    },
    image7: {
        top: 10,
        left: 100,
        width: 180,
        height: 180,
        position: "absolute",
        borderRadius: 360
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
        left: 33,
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
        height: 21,
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
        width: 29,
        height: 15,
        marginTop: 1
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
        width: 190,
        height: 51,
        backgroundColor: "rgba(129,41,83,1)",
        borderRadius: 14,
        marginTop: 36,
        marginLeft: "auto",
        marginRight:"auto"
    },
    button1: {
        width: 190,
        height: 51,
        backgroundColor: "rgba(129,41,83,1)",
        borderRadius: 14,
        marginTop: 20,
        marginLeft: "auto",
        marginRight:"auto"
    },
    register: {
        fontFamily: "roboto-700",
        color: "rgba(224,225,139,1)",
        fontSize: 20,
        marginTop: 13,
        marginLeft: "auto",
        marginRight:"auto"
    },
    changepassword: {
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
        left: 16,
        width: 40,
        height: 23,
        position: "absolute"
    },
    rect3Stack: {
        width: 378,
        height: 696,
        marginTop: 24,
        marginLeft: -18
    }
});

export default Profile;
