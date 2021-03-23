import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeSceen from './HomeSceen'
import LoginScreen from './LoginScreen';
import SignUp from './SignUpScreen'
import { Modal } from 'react-native';
import Header from '../../Components/Header';
const AuthStack = createStackNavigator();
const login = ({navigation}) => {
    return (
        <AuthStack.Navigator
            screenOptions={{
                headerTitle: () => <Header text='Login' onPress={()=> navigation.pop()}/>,
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
const signup = () => {
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen name='SignUp' component={SignUp} />
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
                <AuthStack.Screen name="SignUp" component={SignUp} />
            </AuthStack.Navigator>
    )
}