import React from "react";
import { StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from "react-native";
import RoundButton from "../components/roundButton";
import {Feather} from '@expo/vector-icons';
import consts from "../constansts";
import { SafeAreaView } from "react-native-safe-area-context";
import constansts from "../constansts";

const SignupScreen = ({navigation})=>{
    return <View style={styles.container}>
        <SafeAreaView edges={["top"]} />
        <View style={styles.homeHeader}>
             <RoundButton onPress={navigation.goBack} content={<Feather name="chevron-left" color="#fff" size={22} />} />
         </View>
         <View style={{flex: 1, paddingHorizontal: constansts.spaceX, paddingTop: 50}}>
             <Text style={{fontSize: 40, fontFamily: constansts.boldFont}}>Create New</Text>
             <Text style={{fontSize: 40, fontFamily: constansts.boldFont}}>Account</Text>

            <View style={{marginTop: 50}}>
                <View style={styles.inputField}>
                    <Text style={{fontFamily: constansts.mediumFont, fontSize: 13}}>Username</Text>
                    <TextInput style={styles.input} placeholder="John Doe" />
                </View>
                <View style={styles.inputField}>
                    <Text style={{fontFamily: constansts.mediumFont, fontSize: 13}}>Email</Text>
                    <TextInput style={styles.input} placeholder="johndoe@gmail.com" />
                </View>
                <View style={styles.inputField}>
                    <Text style={{fontFamily: constansts.mediumFont, fontSize: 13}}>Password</Text>
                    <TextInput secureTextEntry={true} style={styles.input} placeholder="**************" />
                </View>
                <View style={styles.inputField}>
                    <Text style={{fontFamily: constansts.mediumFont, fontSize: 13}}>Confirm Password</Text>
                    <TextInput secureTextEntry={true} style={styles.input} placeholder="**************" />
                </View>
                <View style={styles.btn}>
                    <Text style={{color: "#fff", fontFamily: constansts.mediumFont, fontSize: 18}}>Sign Up</Text>
                </View>
            </View>
            <View style={{flexDirection: "row", alignItems: "center", marginVertical: 20, justifyContent: "center"}}>
                    <Text style={{fontFamily: constansts.regularFont}}>Already have an account?</Text>
                    <TouchableWithoutFeedback onPress={()=> navigation.navigate("Login")}>
                        <Text style={{marginLeft: 10, fontFamily: constansts.mediumFont}}>Signin</Text></TouchableWithoutFeedback>
                </View>

         </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    homeHeader: {
        paddingHorizontal: consts.spaceX,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    inputField: {
        padding: 10, 
        paddingHorizontal: 20,
        borderRadius: 10,
        backgroundColor: "#f0f0f0", 
        marginTop: 20
    },
    input: {
        paddingTop: 10,
        fontFamily: constansts.regularFont,
        fontSize: 13
    },
    btn: {
        padding: 20,
        backgroundColor: "orange",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
        borderRadius: 10
    }
})

export default SignupScreen;