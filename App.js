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
import HomeSceen from './public/SceensView/LoginAndSignUp/HomeSceen';
import LoginScreen from './public/SceensView/LoginAndSignUp/LoginScreen'
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

  const isLogin =false;
  const Home = () => {
    return (
      <BottomTab.Navigator>
            <BottomTab.Screen name="Online" component={Online}/>
            <BottomTab.Screen name="AllStore" component={AllStore}/>
            <BottomTab.Screen name="CashBack" component={CashBack}/>
            <BottomTab.Screen name="Account" component={Account} />
      </BottomTab.Navigator>
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
          <Stack.Screen name="HomeScreen" component={Home}/>
          ): (
            <>
            <Stack.Screen name="AuthStack" component={AuthStackNav}/>
            {/* <Stack.Screen name="Home" component={HomeSceen}/>
            <Stack.Screen name="Login" component={LoginScreen} /> */}
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
