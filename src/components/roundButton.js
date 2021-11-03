import React from "react";
import { StyleSheet, View } from "react-native";
import constansts from "../constansts";

const RoundButton = ({content, light=false, style})=>{
    return <View style={{...styles.roundContainer, ...style, backgroundColor: light ? "transparent" : constansts.defColor}}>
        {content}
    </View>
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