import React from "react";
import { StyleSheet, View } from "react-native";
import {Feather} from '@expo/vector-icons';
import { SafeAreaView } from "react-native-safe-area-context";
import consts from "../constansts";

const BottomNavigation = ()=>{
    return <View style={styles.navigation}>
        <View style={styles.navigationWrapper}>
            <View style={styles.navigationItem}>
                <Feather name="home" size={25} color="#fff" />
            </View>
            <View style={styles.navigationItem}>
                <Feather name="shopping-bag" size={25} color="#fff" />
            </View>
            <View style={styles.navigationItem}>
                <Feather name="heart" size={25} color="#fff" />
            </View>
            <View style={styles.navigationItem}>
                <Feather name="user" size={25} color="#fff" />
            </View>
        </View>
        <SafeAreaView edges={["bottom"]} />
    </View>
}

const styles = StyleSheet.create({
    navigation: {
        paddingHorizontal: consts.spaceX,
        backgroundColor: consts.defColor,
    },
    navigationWrapper: {
        paddingTop: 20,
        flexDirection: "row",
        justifyContent: "space-around",
        flexDirection: "row"
    },
    navigationItem: {
        width: 30,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
    },
})

export default BottomNavigation;