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
  TouchableOpacity
} from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import Account from './public/SceensView/HomeScreens/Account';
import AllStore from './public/SceensView/HomeScreens/AllStore';
import CashBack from './public/SceensView/HomeScreens/CashBack';
import Online from './public/SceensView/HomeScreens/Online';
// import NavigationFLow from './public/SceensView/NavigationFlow'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {AuthStackNav} from './public/SceensView/LoginAndSignUp/AuthStackNav';
import HomeScreenNav from './public/SceensView/HomeScreens/HomeScreenNav'
import HomeSceen from './public/SceensView/LoginAndSignUp/HomeSceen';
import LoginScreen from './public/SceensView/LoginAndSignUp/LoginScreen'
import Invitation from './public/SceensView/AccountScreens/Invitation';
import ChangePassword from './public/SceensView/AccountScreens/ChangePassword';
import AccountHeader from './public/Components/AccountComponents/AccountHeader';
import Notificaiton from './public/SceensView/AccountScreens/Notification';
import Language from './public/SceensView/AccountScreens/Language';
import CenterHelp from './public/SceensView/AccountScreens/CenterHelp'
import Icon from 'react-native-vector-icons/Ionicons';
import History from './public/SceensView/CashBack/History';
import BankAccount from './public/SceensView/CashBack/BankAccount'
import Withdrawal from './public/SceensView/CashBack/Withdrawal'
const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

const App = () => {
  const [hideSplash, setHideSplash] = React.useState(false);
  React.useEffect(() => {
    setTimeout(() => {
      setHideSplash(true);
    }, 2000); // amount of time the splash is shown from the time component is rendered
  }, []);
  React.useEffect(() => {
    hideSplash && SplashScreen.hide();
  }, [hideSplash]);

  const isLogin =true;
  const Home = ({navigation}) => {
    return (
      <Stack.Navigator  screenOptions={{
        headerShown: false
      }}>
            <Stack.Screen name="HomeScreen" component={HomeScreenNav}/>
            <Stack.Screen name="ChangePassword" component={ChangePassword}  
            options={{
              headerShown: true,
                headerTitle: () => <AccountHeader text='Change Password'/>,
                    headerStyle:{
                        backgroundColor: '#FE4E4E',
                    },
                    headerTintColor: '#fff',
                      headerBackTitleVisible: false,
                  headerRight: () => <View><Text>  </Text></View>
                }}/>
            <Stack.Screen name="Notification" component={Notificaiton} 
              options={{
                headerShown: true,
                  headerTitle: () => <AccountHeader text='Notification'/>,
                      headerStyle:{
                          backgroundColor: '#FE4E4E',
                      },
                      headerTintColor: '#fff',
                      headerBackTitleVisible: false,
                    headerRight: () => <View><Text>  </Text></View>
                  }}
            />
             <Stack.Screen name="Language" component={Language} 
              options={{
                headerShown: true,
                  headerTitle: () => <AccountHeader text='Language'/>,
                      headerStyle:{
                          backgroundColor: '#FE4E4E',
                      },
                      headerTintColor: '#fff',
                      headerBackTitleVisible: false,
                    headerRight: () => <View><Text>  </Text></View>
                  }}
            />
             <Stack.Screen name="CenterHelp" component={CenterHelp} 
              options={{
                headerShown: true,
                  headerTitle: () => <AccountHeader text='Help Center'/>,
                      headerStyle:{
                          backgroundColor: '#FE4E4E',
                      },
                      headerTintColor: '#fff',
                      headerBackTitleVisible: false,
                    headerRight: () => <View><Text>  </Text></View>
                  }}
            />
            <Stack.Screen name="History" component={History}
               options={{
                headerShown: true,
                  headerTitle: () => <AccountHeader text='Transaction History'/>,
                      headerStyle:{
                          backgroundColor: '#FE4E4E',
            
                      },
                    headerTintColor: '#fff',
                      headerBackTitleVisible: false,
                    headerRight: () => <View><Text>  </Text></View>
                  }}
            />
             <Stack.Screen name="BankAccount" component={BankAccount}
               options={{
                headerShown: true,
                  headerTitle: () => <AccountHeader text='Bank Account'/>,
                      headerStyle:{
                          backgroundColor: '#FE4E4E',
            
                      },
                    headerTintColor: '#fff',
                      headerBackTitleVisible: false,
                    headerRight: () => <View><Text>  </Text></View>
                  }}
            />
            <Stack.Screen name="Withdrawal" component={Withdrawal}
               options={{
                headerShown: true,
                  headerTitle: () => <AccountHeader text='Withdraw'/>,
                      headerStyle:{
                          backgroundColor: '#FE4E4E',
            
                      },
                    headerTintColor: '#fff',
                      headerBackTitleVisible: false,
                    headerRight: () => <View><Text>  </Text></View>
                  }}
            />
            
      </Stack.Navigator>
    )
    
  }
return (
  <SafeAreaProvider>
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
      >
      {isLogin ? (
        <>   
          <Stack.Screen name="HomeScreen" component={Home}/>
          </>  
          ): (
            <>
            <Stack.Screen name="AuthStack" component={AuthStackNav}/>
            </>
          )

          }
    </Stack.Navigator>
          
         
  
  </NavigationContainer>
  </SafeAreaProvider>
  
  );
};

const styles = StyleSheet.create({
 
});

export default App;
