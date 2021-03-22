import React, {Component} from 'react';
import 'react-native-gesture-handler';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
  } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import LoginScreen from './LoginAndSignUp/LoginScreen';
import HomeScreen from './LoginAndSignUp/HomeSceen';
import SignUp from './LoginAndSignUp/SignUpScreen';
import Account from './HomeScreens/Account';
import AllStore from './HomeScreens/AllStore';
import CashBack from './HomeScreens/CashBack';
import Online from './HomeScreens/Online';



const Stack = createStackNavigator();
const NavigationFLow = () => {
    return (
        <SafeAreaProvider>
                 <NavigationContainer>
            <Stack.Screen name="Home" component={HomeScreen}/>
        </NavigationContainer>
        </SafeAreaProvider>
       
    )
    
}

export default NavigationFLow