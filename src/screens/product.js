import React, { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {Feather} from '@expo/vector-icons';
import consts from "../constansts";
import RoundButton from "../components/roundButton";
import constansts from "../constansts";
import { useCart } from "../hooks/cart";

const ProductScreen = ({navigation, route: {params: {item}}})=>{
    const [color, setColor] = useState(item.images[0].color);
    const [image, setImage] = useState(item.images[0].source);
    const [size, setSize] = useState(item.sizes[0]);
    const {addToCart} = useCart();

    const handleSelectColor = (feedback)=>{
        setColor(feedback.color);
        setImage(feedback.source);
    }

    const handleGoToCart = ()=>{
        addToCart({
            name: item.name, 
            price: item.price,
            size, image, color,
        });
        navigation.navigate("Cart");
    }

    return <View style={{flex: 1}}>
        <SafeAreaView edges={["top"]} />
         <View style={styles.homeHeader}>
             <RoundButton onPress={navigation.goBack} content={<Feather name="chevron-left" color="#fff" size={22} />} />
            <RoundButton onPress={()=>navigation.navigate("Cart")} light={true} content={<Feather name="shopping-bag" color="#000" size={22} />} />
         </View>
         <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
             <Image source={image} style={{width: "80%", height: "100%", resizeMode: "contain"}} />
         </View>
         <View style={{flex: 1.5, borderTopEndRadius: 30, borderTopStartRadius: 30, backgroundColor: "#fff"}}>
            <ScrollView showsVerticalScrollIndicator={false} overScrollMode={"never"} style={{flex: 1, paddingHorizontal: consts.spaceX, paddingVertical: 20}}>
                {/* Name And Price section */}
                <View style={{flexDirection: "row", justifyContent: "space-between", marginBottom: 30}}>
                    <Text style={{fontFamily: consts.mediumFont, fontSize: 20}}>{item.name}</Text>
                    <Text style={{fontFamily: consts.boldFont, fontSize: 22}}>&cent; {item.price.toFixed(2)}</Text>
                </View>
                <View style={{flexDirection: "row", marginBottom: 30}}>

                    {/* Sizes Section */}
                    <View style={styles.sizeBox}>
                        <Text style={{fontFamily: consts.regularFont, fontSize: 17}}>Choose Size</Text>
                        <View style={{flexDirection: "row", paddingVertical: 20}}>
                            {item.sizes.map(s=> <TouchableWithoutFeedback onPress={()=> setSize(s)}>
                                <View key={s} style={[styles.sizeButton, {borderColor: s === size ? "black" : "#eee"}]}>
                                    <Text style={{fontSize: 25, fontFamily: consts.regularFont}}>{s}</Text>
                                </View>
                            </TouchableWithoutFeedback>)}
                        </View>
                    </View>

                    {/* Colors Section */}
                    <View style={styles.colorsBox}>
                        {item.images.map(img=> <TouchableWithoutFeedback onPress={()=> handleSelectColor(img)}>
                            <View style={{...styles.colorSelectIndicator, borderColor: color === img.color ? "black" : "transparent"}}>
                                <View style={{...styles.colorItem, backgroundColor: img.color }} />
                            </View>
                        </TouchableWithoutFeedback>)}
                    </View>
                </View>

                {/* Description Section */}
                <View>
                    <Text style={{fontFamily: consts.regularFont, fontSize: 17, marginBottom: 10}}>Description</Text>
                    <Text style={{fontSize: 16, fontFamily: consts.regularFont, color: "#777", lineHeight: 30}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi excepturi voluptate fugit eligendi quae quaerat doloribus delectus illo similique! Sint placeat, voluptas nihil eos deserunt autem ut omnis quibusdam temporibus. Incidunt accusamus esse doloremque labore praesentium, fuga eaque sit mollitia?</Text>
                </View>
            </ScrollView>
            <View style={{paddingHorizontal: constansts.spaceX, paddingVertical: 10}}>
                <TouchableWithoutFeedback onPress={handleGoToCart}>
                    <View style={{backgroundColor: "orange", padding: 20, borderRadius: 15, justifyContent: "center", flexDirection: "row"}}>
                        <Feather name="shopping-bag" size={22} color="#fff" style={{marginRight: 10}} />
                        <Text style={{color: "#fff", fontFamily: consts.mediumFont, fontSize: 16}}>Add to Cart</Text>
                    </View>
                </TouchableWithoutFeedback>
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