import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeSceen from './HomeSceen'
import LoginScreen from './LoginScreen';
import SignUp from './SignUpScreen'
import { Modal } from 'react-native';
import Header from '../../Components/Header';
import Otp from './OTP'
import InforProvide from './InforProvide'
const AuthStack = createStackNavigator();
const login = ({navigation}) => {
    return (
        <AuthStack.Navigator
            screenOptions={{
                headerTitle: () => <Header text='Login' onPress={()=> navigation.navigate('Home')}/>,
                headerStyle: {
                    backgroundColor: '#FE4E4E',
                },
                headerLeft: null
            }}
        >
            <AuthStack.Screen name='Login' component={LoginScreen} 
            />
        </AuthStack.Navigator>
    )
}
const signup = ({navigation}) => {
    return (
        <AuthStack.Navigator
         screenOptions={{
                headerTitle: () => <Header text='Register' onPress={()=> navigation.navigate("Home")}/>,
                headerStyle: {
                    backgroundColor: '#FE4E4E',
                },
                headerLeft: null
            }}>
            <AuthStack.Screen name='SignUp' component={SignUp} />
        </AuthStack.Navigator>
    )
}

const otp = ({navigation}) => {
    return (
        <AuthStack.Navigator
        
        screenOptions={{
            headerTitle: () => <Header text="OTP Verification" onPress={()=> navigation.navigate("SignUp")}/>,
            headerStyle:{
                backgroundColor: '#FE4E4E',
            },
            headerLeft: null
        }}>
            <AuthStack.Screen name="OTP" component={Otp}/>
        </AuthStack.Navigator>
    )
}
const infor = ({navigation}) => {
    return (
        <AuthStack.Navigator
        
        screenOptions={{
            headerTitle: () => <Header text="Information" onPress={()=> navigation.navigate("Home")}/>,
            headerStyle:{
                backgroundColor: '#FE4E4E',
            },
            headerLeft: null
        }}>
            <AuthStack.Screen name="OTP" component={InforProvide}/>
        </AuthStack.Navigator>
    )
}
export function AuthStackNav(){
    return (
            <AuthStack.Navigator
                screenOptions={{
                headerShown: false,
                headerStyle: {
                    backgroundColor: 'red'
                }
            }}
             mode={'modal'}   
            >
                <AuthStack.Screen name="Home" component={HomeSceen} />
                <AuthStack.Screen name="Login" component={login} />
                <AuthStack.Screen name="SignUp" component={signup} />
                <AuthStack.Screen name="OTP" component={otp}/>
                <AuthStack.Screen name="infor" component={infor}/>
            </AuthStack.Navigator>
    )
}