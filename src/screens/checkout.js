import React from 'react';
import {Image, ScrollView, StyleSheet, Switch, Text, TextInput, TouchableWithoutFeedback, View} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import RoundButton from '../components/roundButton';
import {Feather} from '@expo/vector-icons';
import consts from '../constansts';
import { useState } from 'react/cjs/react.development';
import fedex from '../../assets/FedEx-Logo.png';
import paypal from '../../assets/PayPal-Logo.png';
import mastercard from '../../assets/mastercard.png';
import visa from '../../assets/visa.png';
import gpay from '../../assets/gpay.png';
import applepay from '../../assets/applepay.png';

const CheckoutScreen = ({navigation})=>{
    const [location, setLocation] = useState("New York, Street 12, Calofony Road USA");
    const [changeMode, setChangeMode] = useState(false);
    const [payment, setPayment] = useState(paypal);
    const [useCash, setUseCash] = useState(false);
    const options = [paypal, mastercard, visa, gpay, applepay];

    return <View style={styles.container}>
        <SafeAreaView edges={["top"]} />
        <View style={styles.homeHeader}>
             <RoundButton onPress={navigation.goBack} content={<Feather name="chevron-left" color="#fff" size={22} />} />
             <Text style={{marginLeft: 20, fontSize: 20, fontFamily: consts.mediumFont}}>Checkout</Text>
         </View>

         <View style={{paddingHorizontal: consts.spaceX, marginTop: 30}}>
             <Text style={{fontFamily: consts.mediumFont, fontSize: 18}}>Delivery Location</Text>
             <View style={{flexDirection: "row", alignItems: "center", paddingVertical: 15}}>
                 {changeMode ? 
                 <TextInput style={{flex: 1, fontFamily: consts.regularFont}} placeholder={location} /> : 
                 <Text style={{flex: 1, paddingRight: "25%", fontFamily: consts.regularFont, color: "#777"}}>{location}</Text>}
                 
                 <TouchableWithoutFeedback onPress={()=> setChangeMode(!changeMode)}>
                     <Text style={{fontFamily: consts.regularFont, color: "#777"}}>{changeMode ? "Done" : "Change"}</Text>
                 </TouchableWithoutFeedback>
             </View>
         </View>

         <View style={{paddingHorizontal: consts.spaceX, marginTop: 30}}>
             <Text style={{fontFamily: consts.mediumFont, fontSize: 18}}>Shipping Option</Text>
             <View style={{flexDirection: "row", alignItems: "center", paddingVertical: 15}}>
                 <View style={{flexDirection: "row", flex: 1, alignItems: 'center'}}>
                     <View style={{width: 70, height: 70, backgroundColor: "#eee", borderRadius: 20, alignItems: "center", justifyContent: "center"}}>
                         <Image style={{width: "70%", height: "70%", resizeMode: "contain"}} source={fedex} />
                     </View>
                     <View style={{marginLeft: 20}}>
                         <Text style={{fontFamily: consts.regularFont, fontSize: 16, color: "orange"}}>Shipping Fee Gh&cent; 15.00</Text>
                         <Text style={{fontFamily: consts.regularFont, fontSize: 16, color: "#555"}}>delivery on 19 April, 2022</Text>
                     </View>
                 </View>
                 
                 <TouchableWithoutFeedback onPress={()=> setChangeMode(!changeMode)}>
                     <Text style={{fontFamily: consts.regularFont, color: "#777"}}>{changeMode ? "Done" : "Change"}</Text>
                 </TouchableWithoutFeedback>
             </View>
         </View>

         <View style={{marginTop: 30}}>
             <Text style={{fontFamily: consts.mediumFont, fontSize: 18, paddingHorizontal: consts.spaceX}}>Payment Option</Text>
             <View style={{flexDirection: "row", alignItems: "center", paddingVertical: 15}}>
                 <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                     <View style={{width: consts.spaceX}} />
                    {options.map((opt)=><TouchableWithoutFeedback onPress={()=> setPayment(opt)}>
                        <View style={{width: 80, borderWidth: 2, borderColor: payment === opt ? "orange" : "transparent", height: 70, marginRight: 20, backgroundColor: "#eee", borderRadius: 20, alignItems: "center", justifyContent: "center"}}>
                        <Image style={{width: "70%", height: "70%", resizeMode: "contain"}} source={opt} />
                    </View>
                    </TouchableWithoutFeedback>)}
                     <View style={{width: consts.spaceX}} />
                 </ScrollView>
             </View>
         </View>

         <View style={{marginTop: 30, paddingHorizontal: consts.spaceX, flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
             <Text style={{fontFamily: consts.mediumFont, fontSize: 18}}>Use cash on delivery</Text>
             <Switch value={useCash} onValueChange={(value)=> setUseCash(value)} />
         </View>
        
        <View style={{marginTop: 20, flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderTopWidth: 1, borderTopColor: "#eee", paddingVertical: 20, marginHorizontal: consts.spaceX}}>
            <Text style={{fontSize: 17, fontFamily: consts.mediumFont, color: "#555"}}>Subtotal :</Text>
            <Text style={{fontSize: 22, fontFamily: consts.mediumFont, color: "orange"}}>&cent; 250.80</Text>
        </View>

         <View style={{flex: 1}} />
         <View style={{paddingHorizontal: consts.spaceX}}>
            <TouchableWithoutFeedback>
                <View style={{backgroundColor: "orange", padding: 20, borderRadius: 15, justifyContent: "center", flexDirection: "row"}}>
                    <Text style={{color: "#fff", fontFamily: consts.mediumFont, fontSize: 16}}>{"Pay Now"}</Text>
                </View>
            </TouchableWithoutFeedback>
            <SafeAreaView edges={["bottom"]} />
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
        alignItems: "center"
    },
})

export default CheckoutScreen;