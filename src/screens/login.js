import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from "react-native";
import RoundButton from "../components/roundButton";
import {Feather} from '@expo/vector-icons';
import consts from "../constansts";
import { SafeAreaView } from "react-native-safe-area-context";
import constansts from "../constansts";
import { login } from "../api";

const LoginScreen = ({navigation})=>{
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [error, setError] = useState("");

    const handleValueChange =(name, value)=> setFormData({...formData, [name]: value});

    const handleSubmit = ()=>{
        const response = login(formData);

        if(response.status){
            navigation.navigate("Home");
        }else{
            setError(response.error);
            setTimeout(()=> setError(""), 3000);
        }
    }

    return <View style={styles.container}>
        <SafeAreaView edges={["top"]} />
        <View style={styles.homeHeader}>
             <RoundButton onPress={navigation.goBack} content={<Feather name="chevron-left" color="#fff" size={22} />} />
            {/* <RoundButton onPress={handleRemoveItems} light={true} content={<Feather name="trash" color={selected.length ? "#c00" : "#ddd"} size={22} />} /> */}
         </View>
         <View style={{flex: 1, paddingHorizontal: constansts.spaceX, paddingTop: 50}}>
             <Text style={{fontSize: 40, fontFamily: constansts.boldFont}}>Sign In</Text>

            <View style={{marginTop: 20}}>
                <View style={{height: 20, alignItems: "center", justifyContent: "center"}}>
                    <Text style={{textAlign: "center", color: "red", fontFamily: constansts.regularFont}}>{error}</Text>
                </View>
                <View style={styles.inputField}>
                    <Text style={{fontFamily: constansts.mediumFont, fontSize: 13, color: "#777"}}>Username / Email</Text>
                    <TextInput value={formData.email} onChangeText={(value)=>handleValueChange("email", value.toLowerCase())} style={styles.input} placeholder="johndoe@gmail.com" />
                </View>
                <View style={styles.inputField}>
                    <Text style={{fontFamily: constansts.mediumFont, fontSize: 13, color: "#777"}}>Password</Text>
                    <TextInput value={formData.password} secureTextEntry={true} onChangeText={(value)=>handleValueChange("password", value)} style={styles.input} placeholder="johndoe@gmail.com" />
                </View>
                <TouchableWithoutFeedback onPress={handleSubmit}>
                    <View style={styles.btn}>
                        <Text style={{color: "#fff", fontFamily: constansts.mediumFont, fontSize: 18}}>Login</Text>
                    </View>
                </TouchableWithoutFeedback>

                <View style={{flexDirection: "row", alignItems: "center", marginVertical: 20, justifyContent: "center"}}>
                    <Text style={{fontFamily: constansts.regularFont}}>Don't have an account?</Text>
                    <TouchableWithoutFeedback onPress={()=> navigation.navigate("Signup")}>
                        <Text style={{marginLeft: 10, fontFamily: constansts.mediumFont}}>Signup</Text></TouchableWithoutFeedback>
                </View>
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

export default LoginScreen;