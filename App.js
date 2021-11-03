import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/home';
import { useFonts, Poppins_400Regular, Poppins_600SemiBold, Poppins_800ExtraBold } from '@expo-google-fonts/poppins';
import { View } from 'react-native';
import ProductScreen from './src/screens/product';

const Stack = createNativeStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular, Poppins_600SemiBold, Poppins_800ExtraBold
  });

  if (!fontsLoaded) return <View />;
  else return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Product" component={ProductScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}