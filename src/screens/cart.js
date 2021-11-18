import React, { useEffect, useMemo, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import RoundButton from '../components/roundButton';
import consts from '../constansts';
import {Feather} from '@expo/vector-icons';
import { useCart } from '../hooks/cart';

const CartScreen = ({navigation})=>{
    const {cart, removeFromCart} = useCart();
    const [selected, setSelected] = useState([]);
    const price = useMemo(()=> {
        let output = 0;
        cart.forEach(i=> output += (i.price * i.quantity));
        return output;
    }, [cart])

    const handleRemoveItems = ()=>{
        selected.forEach(item=> removeFromCart(item));
        setSelected([]);
    }

    return <View style={styles.container}>
        <SafeAreaView edges={["top"]} />
        <View style={styles.homeHeader}>
             <RoundButton onPress={navigation.goBack} content={<Feather name="chevron-left" color="#fff" size={22} />} />
            <RoundButton onPress={handleRemoveItems} light={true} content={<Feather name="trash" color={selected.length ? "#c00" : "#ddd"} size={22} />} />
         </View>
         {cart.length < 1 ? <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
             <Feather name="git-pull-request" size={60} color="#ddd" style={{marginBottom: 20}} />
             <Text style={{fontSize: 18, fontFamily: consts.mediumFont}}>Cart is empty!</Text>
         </View> : 
         <ScrollView style={styles.cartList}>
            {cart.map((item, key)=> <CartItem 
                onDeselect={()=> setSelected(selected.filter(i=> i !== item))} 
                onSelect={()=> setSelected([...selected, item])} 
                key={item.id} data={item} 
                selected={selected.includes(item)}
                selectionMode={selected.length > 0}
            />)}
         </ScrollView>}
         <View style={styles.totalBox}>
            {cart.length > 0 && <View style={{flexDirection: "row", alignItems: "center", justifyContent: 'space-between', marginBottom: 20}}>
                <Text style={{fontFamily: consts.mediumFont, fontSize: 17}}>Total</Text>
                <Text style={{fontFamily: consts.boldFont, fontSize: 25}}>&cent; {price.toFixed(2)}</Text>
            </View>}
            <TouchableWithoutFeedback onPress={()=> navigation.navigate(cart.length < 1 ? "Home" : "Checkout")}>
                <View style={{backgroundColor: "orange", padding: 20, borderRadius: 15, justifyContent: "center", flexDirection: "row"}}>
                    <Text style={{color: "#fff", fontFamily: consts.mediumFont, fontSize: 16}}>{cart.length > 0 ? "Checkout" : "Back to shopping"}</Text>
                </View>
            </TouchableWithoutFeedback>
         </View>
    </View>
}

const CartItem = ({data, onSelect, onDeselect, selected, selectionMode})=>{
    const [active, setActive] = useState(selected);

    useEffect(()=> setActive(selected), [selected])

    const handleLongPress = ()=>{
        if(active){
            setActive(false);
            onDeselect();
        }else{
            setActive(true);
            onSelect();
        }
    }

    const handlePress = ()=>{
        if(active){
            onDeselect();
        }else if(selectionMode){
            onSelect();
        }
    }

    return <TouchableWithoutFeedback onLongPress={handleLongPress} onPress={handlePress}>
        <View style={[styles.cartItem, {backgroundColor: active ? "#f5f5f5" : "transparent"}]}>
    <View style={styles.cartItemImageWrapper}><Image source={data.image} style={styles.cartItemImage} /></View>
    <View style={{justifyContent: "space-between", flex: 1, alignItems: "stretch"}}>
        <View>
            <Text style={{fontSize: 20, fontFamily: consts.mediumFont}}>{data.name}</Text>
            <View style={{flexDirection: "row", alignItems: "center"}}>
                <Text style={{fontSize: 15, color: "#777", fontFamily: consts.regularFont}}>Size :</Text>
                <Text style={{fontSize: 15, color: "#777", fontFamily: consts.regularFont}}> {data.size}</Text>
            </View>
            <View style={{flexDirection: "row", alignItems: "center"}}>
                <Text style={{fontSize: 15, fontFamily: consts.regularFont, color: "#777"}}>Color :</Text>
                <View style={{width: 10, height: 10, marginLeft: 5, borderRadius: 20, backgroundColor: data.color}} />
            </View>
        </View>
        <View style={{flexDirection: "row", alignItems: "center", justifyContent: 'space-between'}}>
            <Text style={{fontSize: 18, fontFamily: consts.mediumFont}}>&cent; {data.price.toFixed(2)}</Text>
            <View style={{flexDirection: "row", alignItems: "center", justifyContent: 'space-between'}}>
                <Feather name="chevron-left" size={25} />
                <Text style={{fontFamily: consts.mediumFont, fontSize: 16, marginHorizontal: 10}}>{data.quantity}</Text>
                <Feather name="chevron-right" size={25} />
            </View>
        </View>
    </View>
</View>
    </TouchableWithoutFeedback>
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
    cartItem: {
        paddingHorizontal: consts.spaceX,
        borderBottomColor: "#f5f5f5",
        borderBottomWidth: 1,
        paddingVertical: 20,
        flexDirection: "row"
    },
    cartItemImageWrapper: {
        width: 100,
        height: 120,
        backgroundColor: "#eee",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        marginRight: 20
    },
    cartItemImage: {
        resizeMode: "contain",
        width: "80%",
        height: "80%",
    },
    totalBox: {
        paddingHorizontal: consts.spaceX,
        paddingVertical: 30,
        borderTopWidth: 1,
        borderTopColor: "#f5f5f5"
    }
})

export default CartScreen;