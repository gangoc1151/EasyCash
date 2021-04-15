import React from 'react';
import 'react-native-gesture-handler';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
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
import PersonCard from '../../Components/CashBackComponent/PersonCard'
import Invitation from '../AccountScreens/Invitation'
import AccountHeader from '../../Components/AccountComponents/AccountHeader'
import PersonDetail from '../AccountScreens/PersonDetail';
import ChangePassword from '../AccountScreens/ChangePassword'
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
        <Stack.Navigator 
          screenOptions={{
                headerTitle: () => <PersonCard />,
                headerStyle: {
                    backgroundColor: '#FE4E4E',
                },
                headerLeft: null,
                headerTitleAlign: 'center'
            }}
        >
        <Stack.Screen name="CashBack" component={CashBack}/>
    </Stack.Navigator>
    )
   
}
const account = ({navigation}) => {
    return (
<Stack.Navigator>
        <Stack.Screen name="Account" component={Account}/>
        <Stack.Screen name="Invitation" component={Invitation} 
            options={{
                headerTitle: () => <AccountHeader text='Refer a friend'/>,
                    headerStyle:{
                        backgroundColor: '#FE4E4E',
                    },
                   headerLeft: () =><TouchableOpacity onPress={() => navigation.pop()}><Icon name='md-chevron-back' size={30} color= "#fff" /></TouchableOpacity>,
                   headerRight: () => <View><Text>  </Text></View>
                }}     
        />
        <Stack.Screen name='PersonDetail' component={PersonDetail}
             options={{
                headerTitle: () => <AccountHeader text='Account Information'/>,
                    headerStyle:{
                        backgroundColor: '#FE4E4E',
                    },
                   headerLeft: () =><TouchableOpacity onPress={() => navigation.pop()}><Icon name='md-chevron-back' size={30} color= "#fff" /></TouchableOpacity>,
                   headerRight: () => <TouchableOpacity
                   style={{justifyContent: 'center', alignItems:'center', marginRight: 10}}
                   ><Text style={{fontSize: 18, color: '#fff', alignSelf: 'center'}}>Save</Text></TouchableOpacity>
                }}
        />
       
        
    </Stack.Navigator>
    )
    
}
const HomeScreenNav = () => {
    return (
        <BottomTab.Navigator 
            
            tabBarOptions={
                {
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
                },
                labelPosition: 'below-icon',
            }}
            
        >
            <BottomTab.Screen name="Online" component={online}

                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{alignItems: 'center', justifyContent: 'center'}}>
                             <Icon name='home' size={20} color= {focused ? '#FE4E4E': '#B5B5B7'} />
                            
                        </View>
                    ),
                    tabBarLabel: ({focused}) => (
                            <Text style={{
                                color: focused ? '#FE4E4E': '#B5B5B7'
                            }}>Home</Text>
                    )
                }}
            />
            <BottomTab.Screen name="AllStore" component={allstore}
                 options={{
                    tabBarLabel: ({focused}) => (
                        <Text style={{
                                color: focused ? '#FE4E4E': '#B5B5B7'
                            }}>AllStore</Text>
                    ),
                    tabBarIcon: ({focused}) => (
                        <View style={{alignItems: 'center', justifyContent: 'center'}}>
                             <Icon name='star' size={20} color= {focused ? '#FE4E4E': '#B5B5B7'}/>
                        </View>
                    ),
                   
                }}
            />
            <BottomTab.Screen name="CashBack" component={cashback}
                 options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{alignItems: 'center', justifyContent: 'center'}}>
                             <Icon name='cash' size={20} color= {focused ? '#FE4E4E': '#B5B5B7'}/>
                        </View>
                    ),
                    tabBarLabel: ({focused}) => (
                            <Text style={{
                                color: focused ? '#FE4E4E': '#B5B5B7'
                            }}>CashBack</Text>
                    )
                }}
            />
            <BottomTab.Screen name="Account" component={account} 
                 options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{alignItems: 'center', justifyContent: 'center'}}>
                             <Icon name='person' size={20} color= {focused ? '#FE4E4E': '#B5B5B7'}/>
                        </View>
                    ),
                    tabBarLabel: ({focused}) => (
                            <Text style={{
                                color: focused ? '#FE4E4E': '#B5B5B7'
                            }}>Account</Text>
                    )
                }}
            />
        </BottomTab.Navigator>
    )

}

export default HomeScreenNav