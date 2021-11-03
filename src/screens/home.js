import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, TouchableWithoutFeedback, View, Text, Dimensions } from "react-native";
import {Feather} from '@expo/vector-icons';
import consts from '../constansts';
const screenWidth = Dimensions.get("screen").width;

export const defColor = "rgb(13,20,34)";

const Home = ()=>{
    const categories = ["Huddy", "Jacket", "Pants", "Suits"];

    return (
    <View style={{flex: 1, backgroundColor: "#fff"}}>
         <SafeAreaView edges={["top"]} />
         <View style={styles.homeHeader}>
             <RoundButton content={<Feather name="menu" color="#fff" size={22} />} />
             <View style={{flexDirection: "row"}}>
                <RoundButton style={{marginRight: 10}} light={true} content={<Feather name="search" color="#000" size={22} />} />
                <RoundButton light={true} content={<Feather name="bell" color="#000" size={22} />} />
             </View>
         </View>
         <View style={{paddingVertical: 30}}>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
                <View style={{width: 20}} />
                <CategoryItem label="All" />
                {categories.map((item, id)=> <CategoryItem key={id} label={item} />)}
                <View style={{width: 20}} />
            </ScrollView>
         </View>
        <ScrollView style={{flex: 1}}></ScrollView>
        <BottomNavigation />
    </View>
    )
}

const CategoryItem = ({label})=>{
    return <TouchableWithoutFeedback>
        <View style={styles.categoryItem}>
            <Text style={{fontFamily: consts.regularFont}}>{label}</Text>
        </View>
    </TouchableWithoutFeedback>
}

const RoundButton = ({content, light=false, style})=>{
    return <View style={{...styles.roundContainer, ...style, backgroundColor: light ? "transparent" : defColor}}>
        {content}
    </View>
}

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
    homeHeader: {
        paddingHorizontal: consts.spaceX,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    navigation: {
        paddingHorizontal: consts.spaceX,
        backgroundColor: defColor,
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
    roundContainer: {
        width: 50,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 30,
        backgroundColor: defColor,
        borderWidth: 1,
        borderColor: "#ddd"
    },
    categoryItem: {
        paddingHorizontal: consts.spaceX,
        paddingVertical: 15,
        borderRadius: 10,
        backgroundColor: "#f5f5f5",
        marginRight: 10,
    },
    productCard: {
        marginRight: 30,
        width: (screenWidth/2),
    },
    productImage: {
        height: 280,
        backgroundColor: "#eee",
        borderRadius: 20
    }
})

export default Home;