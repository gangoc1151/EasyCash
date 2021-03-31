import React from 'react';
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
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeHeader from '../../Components/HomeComponents/HomeHeader'
import Online from './Online';
import AllStore from './AllStore';
import CashBack from './CashBack';
import Account from './Account';
import Icon from 'react-native-vector-icons/Ionicons';
const BottomTab = createBottomTabNavigator();
const Stack = createStackNavigator();
const online = () => {
    return(
    <Stack.Navigator
    screenOptions={{
                headerTitle: () => <HomeHeader />,
                headerStyle: {
                    backgroundColor: '#FE4E4E',
                },
                headerLeft: null
            }}>
        <Stack.Screen name="Online" component={Online}/>
    </Stack.Navigator>
    )
    
}
const allstore = () => {
    return (
        <Stack.Navigator>
        <Stack.Screen name="AllStore" component={AllStore}/>
    </Stack.Navigator>
    )
   
}
const cashback = () => {
    return (
        <Stack.Navigator>
        <Stack.Screen name="CashBack" component={CashBack}/>
    </Stack.Navigator>
    )
   
}
const account = () => {
    return (
<Stack.Navigator>
        <BottomTab.Screen name="Account" component={Account}/>
    </Stack.Navigator>
    )
    
}
const HomeScreenNav = () => {
    return (
        <BottomTab.Navigator 
            
            tabBarOptions={
                {
                showLabel: false,
                activeTintColor: '#FE4E4E',
                style: {
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    elevation: 0,
                    backgroundColor: '#fff',
                    borderTopColor: '#D3D3D3',
                    borderTopWidth: 0.5,
                }
            }}
            
        >
            <BottomTab.Screen name="Online" component={online}

                options={{
                    
                    tabBarIcon: ({focused}) => (
                        <View style={{alignItems: 'center', justifyContent: 'center'}}>
                             <Icon name='home' size={20} color= {focused ? '#FE4E4E': '#B5B5B7'} />
                            <Text style={{
                                color: focused ? '#FE4E4E': '#B5B5B7'
                            }}>Home</Text>
                        </View>
                    )
                }}
            />
            <BottomTab.Screen name="AllStore" component={allstore}
                 options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{alignItems: 'center', justifyContent: 'center'}}>
                             <Icon name='star' size={20} color= {focused ? '#FE4E4E': '#B5B5B7'}/>
                            <Text style={{
                                color: focused ? '#FE4E4E': '#B5B5B7'
                            }}>AllStore</Text>
                        </View>
                    )
                }}
            />
            <BottomTab.Screen name="CashBack" component={cashback}
                 options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{alignItems: 'center', justifyContent: 'center'}}>
                             <Icon name='cash' size={20} color= {focused ? '#FE4E4E': '#B5B5B7'}/>
                            <Text style={{
                                color: focused ? '#FE4E4E': '#B5B5B7'
                            }}>CashBack</Text>
                        </View>
                    )
                }}
            />
            <BottomTab.Screen name="Account" component={account} 
                 options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{alignItems: 'center', justifyContent: 'center'}}>
                             <Icon name='person' size={20} color= {focused ? '#FE4E4E': '#B5B5B7'}/>
                            <Text style={{
                                color: focused ? '#FE4E4E': '#B5B5B7'
                            }}>Account</Text>
                        </View>
                    )
                }}
            />
        </BottomTab.Navigator>
    )

}

export default HomeScreenNav