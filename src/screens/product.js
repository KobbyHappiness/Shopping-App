import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {Feather} from '@expo/vector-icons';
import consts from "../constansts";
import RoundButton from "../components/roundButton";

const ProductScreen = ({navigation})=>{
    return <View style={{flex: 1}}>
        <SafeAreaView edges={["top"]} />
         <View style={styles.homeHeader}>
             <RoundButton content={<Feather name="chevron-left" color="#fff" size={22} />} />
            <RoundButton light={true} content={<Feather name="shopping-bag" color="#000" size={22} />} />
         </View>
    </View>
}

const styles = StyleSheet.create({
    homeHeader: {
        paddingHorizontal: consts.spaceX,
        flexDirection: "row",
        justifyContent: "space-between"
    },
})

export default ProductScreen;