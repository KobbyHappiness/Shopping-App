import React from "react";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import constansts from "../constansts";

const RoundButton = ({content, light=false, style, onPress})=>{
    return <TouchableWithoutFeedback onPress={onPress}>
                <View style={{...styles.roundContainer, ...style, backgroundColor: light ? "white" : constansts.defColor}}>
                    {content}
                </View>
        </TouchableWithoutFeedback>
}

const styles = StyleSheet.create({
    roundContainer: {
        width: 50,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 30,
        backgroundColor: constansts.defColor,
        borderWidth: 1,
        borderColor: "#ddd"
    },
})

export default RoundButton;