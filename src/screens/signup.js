import React from "react";
import { StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from "react-native";
import RoundButton from "../components/roundButton";
import {Feather} from '@expo/vector-icons';
import consts from "../constansts";
import { SafeAreaView } from "react-native-safe-area-context";
import constansts from "../constansts";
import { useState } from "react";
import { signup } from "../api";

const SignupScreen = ({navigation})=>{
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        cpassword: ""
    });

    const [error, setError] = useState("");

    const emptyField = ()=>{
        let output = false;
        Object.values(formData).forEach(value=> {
            if(value.length < 1) output = true;
        });
        return output;
    }


    const handleSubmit = ()=>{
        const {username, email, password} = formData;
        if(!emptyField()){
            if(formData.password === formData.cpassword){
                signup({name: username, email, password});
                navigation.navigate("Home");
            }else{
                setError("Passwords do not match!")
                setTimeout(()=> setError(""), 3000)
            }
        }else{
            setError("All fields are required!");
            setTimeout(()=> setError(""), 3000)
        }
    }

    const handleChange = (name, value)=> setFormData({...formData, [name]: value});

    return <View style={styles.container}>
        <SafeAreaView edges={["top"]} />
        <View style={styles.homeHeader}>
             <RoundButton onPress={navigation.goBack} content={<Feather name="chevron-left" color="#fff" size={22} />} />
         </View>
         <View style={{flex: 1, paddingHorizontal: constansts.spaceX, paddingTop: 50}}>
             <Text style={{fontSize: 40, fontFamily: constansts.boldFont}}>Create New</Text>
             <Text style={{fontSize: 40, fontFamily: constansts.boldFont}}>Account</Text>

            <View style={{marginTop: 20}}>
                <View style={{height: 20, alignItems: "center", justifyContent: "center"}}>
                    <Text style={{textAlign: "center", color: "red", fontFamily: constansts.regularFont}}>{error}</Text>
                </View>
                <View style={styles.inputField}>
                    <Text style={{fontFamily: constansts.mediumFont, fontSize: 13}}>Username</Text>
                    <TextInput value={formData.username} onChangeText={(value)=>handleChange("username", value)} style={styles.input} placeholder="John Doe" />
                </View>
                <View style={styles.inputField}>
                    <Text style={{fontFamily: constansts.mediumFont, fontSize: 13}}>Email</Text>
                    <TextInput value={formData.email} onChangeText={(value)=>handleChange("email", value)} style={styles.input} placeholder="johndoe@gmail.com" />
                </View>
                <View style={styles.inputField}>
                    <Text style={{fontFamily: constansts.mediumFont, fontSize: 13}}>Password</Text>
                    <TextInput value={formData.password} onChangeText={(value)=>handleChange("password", value)} secureTextEntry={true} style={styles.input} placeholder="**************" />
                </View>
                <View style={styles.inputField}>
                    <Text style={{fontFamily: constansts.mediumFont, fontSize: 13}}>Confirm Password</Text>
                    <TextInput value={formData.cpassword} onChangeText={(value)=>handleChange("cpassword", value)} secureTextEntry={true} style={styles.input} placeholder="**************" />
                </View>
                <TouchableWithoutFeedback onPress={handleSubmit}>
                    <View style={styles.btn}>
                        <Text style={{color: "#fff", fontFamily: constansts.mediumFont, fontSize: 18}}>Sign Up</Text>
                    </View>
                </TouchableWithoutFeedback>
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