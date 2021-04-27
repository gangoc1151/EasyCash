import React, {useState} from 'react';
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
  TouchableWithoutFeedback,
 
} from 'react-native';
import PhoneNumberInput from '../../Components/Input/PhoneNumberInput'
import Password from '../../Components/Input/Password';
import ButtonClick from '../../Components/Button'
import ButtonFb from '../../Components/ButtonFb';
import PickerModal from '../../Components/Input/PickerModal';

const LoginScreen = (props) => {
    const [displayModal, setdisplayModal] = useState('none')
    return (
        <View style={styles.container}>
            <ScrollView style={{flex:1}} keyboardShouldPersistTaps="handled">
                <View style={{alignItems: 'center'}}>
                        <PhoneNumberInput style={styles.phonenumber} onPress={()=> setdisplayModal("flex")} />
                        <Password style={{marginTop: 20}} placeholder='Password'/>
                        <ButtonClick text='Login' style={styles.login} />
                        <ButtonFb text="Login with Facebook Account" style={styles.loginFb}/>
                    </View>   
                
                <View style={styles.row}>
                    <TouchableOpacity >
                        <Text style={styles.rowli}>Forgot password?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.rowli} onPress={()=> props.navigation.navigate("SignUp")}>
                        <Text style={styles.rowli}>Register</Text>
                    </TouchableOpacity>
                </View>
               
            </ScrollView>
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
    width: 310,
    height: 45,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25
   },
   loginFb:{
    flexDirection:'row',
    backgroundColor: '#274F91',
    width: 310,
    height: 45,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25
   },
   row: {
       flexDirection: 'row',
       justifyContent: 'space-around',
       marginTop: 20,
   },
   rowli:{
        color:'#3569D5',
        fontSize: 15
   }
   ,
   footer:{
    flexDirection: 'row',
    backgroundColor: '#DEDEDE',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
    },
    phonenumber:{
        marginTop: 70
    },
    picker:{
        display: 'none'
    }
})

export default LoginScreen;