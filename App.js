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
import Icon from 'react-native-vector-icons/Ionicons';
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
            <Stack.Screen name="ChangePassword" component={ChangePassword}  options={{
              headerShown: true,
                headerTitle: () => <AccountHeader text='Change Password'/>,
                    headerStyle:{
                        backgroundColor: '#FE4E4E',
                    },
                   headerLeft: () =><TouchableOpacity onPress={() => navigation.pop()}><Icon name='md-chevron-back' size={30} color= "#fff" /></TouchableOpacity>,
                  headerRight: () => <View><Text>  </Text></View>
                }}/>
            
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
