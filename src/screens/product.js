import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {Feather} from '@expo/vector-icons';
import consts from "../constansts";
import RoundButton from "../components/roundButton";
import constansts from "../constansts";
import image from '../../assets/hoodie2.png';

const ProductScreen = ({navigation})=>{
    return <View style={{flex: 1}}>
        <SafeAreaView edges={["top"]} />
         <View style={styles.homeHeader}>
             <RoundButton onPress={navigation.goBack} content={<Feather name="chevron-left" color="#fff" size={22} />} />
            <RoundButton light={true} content={<Feather name="shopping-bag" color="#000" size={22} />} />
         </View>
         <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
             <Image source={image} style={{width: "80%", height: "100%", resizeMode: "contain"}} />
         </View>
         <View style={{flex: 1.5, borderTopEndRadius: 30, borderTopStartRadius: 30, backgroundColor: "#fff"}}>
            <ScrollView showsVerticalScrollIndicator={false} overScrollMode={"never"} style={{flex: 1, paddingHorizontal: consts.spaceX, paddingVertical: 20}}>
                <View style={{flexDirection: "row", justifyContent: "space-between", marginBottom: 30}}>
                    <Text style={{fontFamily: consts.mediumFont, fontSize: 20}}>Winter Hoodie</Text>
                    <Text style={{fontFamily: consts.boldFont, fontSize: 22}}>&cent; 240.00</Text>
                </View>
                <View style={{flexDirection: "row", marginBottom: 30}}>
                    <View style={styles.sizeBox}>
                        <Text style={{fontFamily: consts.regularFont, fontSize: 17}}>Choose Size</Text>
                        <View style={{flexDirection: "row", paddingVertical: 20}}>
                            <View style={styles.sizeButton}>
                                <Text style={{fontSize: 25, fontFamily: consts.regularFont}}>S</Text>
                            </View>
                            <View style={styles.sizeButton}>
                                <Text style={{fontSize: 25, fontFamily: consts.regularFont}}>M</Text>
                            </View>
                            <View style={styles.sizeButton}>
                                <Text style={{fontSize: 25, fontFamily: consts.regularFont}}>L</Text>
                            </View>
                            <View style={styles.sizeButton}>
                                <Text style={{fontSize: 25, fontFamily: consts.regularFont}}>XL</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.colorsBox}>
                        <View style={{...styles.colorSelectIndicator, borderColor: "black"}}>
                            <View style={{...styles.colorItem, backgroundColor: "black"}} />
                        </View>
                        <View style={{...styles.colorSelectIndicator, borderColor: "transparent"}}>
                            <View style={{...styles.colorItem, backgroundColor: "grey"}} />
                        </View>
                        <View style={{...styles.colorSelectIndicator, borderColor: "transparent"}}>
                            <View style={{...styles.colorItem, backgroundColor: "green"}} />
                        </View>
                    </View>
                </View>
                <View>
                    <Text style={{fontFamily: consts.regularFont, fontSize: 17, marginBottom: 10}}>Description</Text>
                    <Text style={{fontSize: 16, fontFamily: consts.regularFont, color: "#777", lineHeight: 30}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi excepturi voluptate fugit eligendi quae quaerat doloribus delectus illo similique! Sint placeat, voluptas nihil eos deserunt autem ut omnis quibusdam temporibus. Incidunt accusamus esse doloremque labore praesentium, fuga eaque sit mollitia?</Text>
                </View>
            </ScrollView>
            <View style={{paddingHorizontal: constansts.spaceX, paddingVertical: 10}}>
                <View style={{backgroundColor: "orange", padding: 20, borderRadius: 15, justifyContent: "center", flexDirection: "row"}}>
                    <Feather name="shopping-bag" size={22} color="#fff" style={{marginRight: 10}} />
                    <Text style={{color: "#fff", fontFamily: consts.mediumFont, fontSize: 16}}>Add to Cart</Text>
                </View>
                <SafeAreaView edges={["bottom"]} />
            </View>
         </View>
    </View>
}

const styles = StyleSheet.create({
    homeHeader: {
        paddingHorizontal: consts.spaceX,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    sizeBox: {
        flex: 1,
        borderRightWidth: 1,
        borderRightColor: "#eee",
        paddingVertical: 10,
    },
    sizeButton: {
        paddingVertical: 20,
        paddingHorizontal: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#eee",
        marginRight: 10
    },
    colorsBox: {
        paddingHorizontal: 15,
        justifyContent: "space-between"
    },
    colorSelectIndicator: {
        width: 40,
        height: 40,
        borderRadius: 30,
        borderWidth: 2,
        padding: 5,
    },
    colorItem: {
        backgroundColor: "black",
        flex: 1,
        borderRadius: 30
    }
})

export default ProductScreen;