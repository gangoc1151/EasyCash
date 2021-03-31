import React from 'react';
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
import PhoneNumberInput from '../../Components/Input/PhoneNumberInput'
import Textinput from '../../Components/Input/TextInput'
import ButtonClick from '../../Components/Button'
import Footer from '../../Components/Footer'
const SignUpScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.body} keyboardShouldPersistTaps="handled">
                <Text style={styles.text}>Sử dụng số điện thoại giúp bảo mật tài khoản và Hoàn Tiền. Chúng tôi sẽ gửi mã xác minh tới số điện thoại của bạn tại bước tiếp theo.</Text>
                    <PhoneNumberInput style={{marginTop: 70}}/>
                    <Textinput placeholder="Promotion Code (Optional)" style={{marginTop: 20}}/>
                    <ButtonClick style={styles.continue} text="Continue" onPress={() => navigation.navigate('OTP')}/>
                    <TouchableOpacity style={{margin: 15}} onPress={() => navigation.navigate('Login')}>
                        <Text style={{fontSize: 17, fontWeight: '500', color: '#3569D5'}}>Login</Text>
                    </TouchableOpacity>
            </ScrollView>
           
            
            <Footer />
            
            
            
        </View>
    )
}

const styles= StyleSheet.create({
    container: {
      flex: 1
    },
    text:{
        fontSize: 17,
        textAlign:'center',
        lineHeight: 30,
        color: '#737373',
        top: 30
    },
    continue:{
        backgroundColor: '#FE4E4E',
        width: 310,
        height: 45,
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25
       },
    body:{
        flex: 1,
        alignItems: 'center'
    }
})

export default SignUpScreen;