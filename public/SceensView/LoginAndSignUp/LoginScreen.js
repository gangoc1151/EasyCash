import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  TouchableOpacity,
} from 'react-native';
import PhoneNumberInput from '../../Components/Input/PhoneNumberInput'
import Password from '../../Components/Input/Password';
import ButtonClick from '../../Components/Button'
import ButtonFb from '../../Components/ButtonFb'

const LoginScreen = (props) => {
    return (
        <View style={styles.container}>
            <View style={{flex:1}}>
                <View style={{alignItems: 'center'}}>
                        <PhoneNumberInput />
                        <Password />
                        <ButtonClick text='Register' style={styles.login} />
                        <ButtonFb text="Login with Facebook Account" style={styles.loginFb}/>
                    </View>   
                
                <View style={styles.row}>
                    <TouchableOpacity>
                        <Text>Forgot password?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
        <View style={styles.footer}>
                <Text>Your are in </Text>
                <Text style={{color:'#3684E4'}}>Viet Nam</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
   container: {
       flex: 1,
     
   },
   login:{
    backgroundColor: '#FE4E4E',
    width: 300,
    height: 39,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25
   },
   loginFb:{
    flexDirection:'row',
    backgroundColor: '#274F91',
    width: 300,
    height: 39,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25
   },
   row: {
       flexDirection: 'row',
       justifyContent: 'space-around'
   },
   footer:{
    flexDirection: 'row',
    backgroundColor: '#DEDEDE',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
    }
})

export default LoginScreen;