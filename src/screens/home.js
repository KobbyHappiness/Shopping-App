import React from "react";
import { ScrollView, StyleSheet, TouchableWithoutFeedback, View, Text, Dimensions, Image } from "react-native";
import {Feather} from '@expo/vector-icons';
import consts from '../constansts';
import { SafeAreaView } from "react-native-safe-area-context";
import RoundButton from "../components/roundButton";
import BottomNavigation from "../components/bottomNavigation";
import database from "../database";
const screenWidth = Dimensions.get("screen").width;

const Home = ({navigation})=>{
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
                <CategoryItem label="All" selected={true} />
                {database.categories.map((item, id)=> <CategoryItem key={id} label={item} />)}
                <View style={{width: 20}} />
            </ScrollView>
         </View>
        <ScrollView style={{flex: 1}}>
            {database.categories.map((category)=>{
                return <View key={category}>
                    <View style={{paddingHorizontal: consts.spaceX, flexDirection: "row", justifyContent: "space-between"}}>
                        <Text style={{fontFamily: consts.mediumFont, fontSize: 19, textTransform: "capitalize"}}>{category}</Text>
                        <Text style={{fontFamily: consts.regular, fontSize: 16, color: "#aaa"}}>See All</Text>
                    </View>
                    <ScrollView showsHorizontalScrollIndicator={false} style={{paddingVertical: 15, marginBottom: 10}} horizontal={true}>
                        <View style={{width: 20}} />
                        {database.items.filter(i=> i.category === category).map((item)=> {
                            return <ProductCard data={item} onPress={()=> navigation.navigate("Product", {item})}  key={item.name} index={item.name} />
                        })}
                        <View style={{width: 20}} />
                    </ScrollView>
                </View>
            })}
        </ScrollView>
        <BottomNavigation navigate={navigation.navigate} />
    </View>
    )
}

const ProductCard = ({onPress, data})=>{
    return <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.productCard}>
        <View style={styles.productImage}>
            <Image source={data.images[0].source} style={{resizeMode: "contain", width: "80%", height: "90%"}} />
        </View>
        <View style={{flexDirection: "row", paddingVertical: 10, justifyContent: "space-between"}}>
            <Text style={{fontFamily: consts.mediumFont, fontSize: 15}}>{data.name}</Text>
            <Text style={{fontFamily: consts.boldFont, fontSize: 15, color: "orange"}}>&cent; {data.price.toFixed(2)}</Text>
        </View>
    </View>
    </TouchableWithoutFeedback>
}

const CategoryItem = ({label, selected})=>{
    return <TouchableWithoutFeedback>
        <View style={[styles.categoryItem, {backgroundColor: selected ? "orange" : "#f5f5f5"}]}>
            <Text style={{fontFamily: consts.regularFont, color: selected ? "white" : "black"}}>{label}</Text>
        </View>
    </TouchableWithoutFeedback>
}

const styles = StyleSheet.create({
    homeHeader: {
        paddingHorizontal: consts.spaceX,
        flexDirection: "row",
        justifyContent: "space-between"
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
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center"
    }
})

export default Home;