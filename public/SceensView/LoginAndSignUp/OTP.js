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
import OTPTextinput from 'react-native-otp-textinput'
import CountDown from 'react-native-countdown-component';
import ButtonClick from '../../Components/Button'
//https://www.npmjs.com/package/react-native-otp-textinput
//https://www.npmjs.com/package/react-native-countdown-component
const OTP = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={{flex: 1, alignItems: 'center',}}>
                <Text style={{marginTop: 50}}>Nhập mã OTP vừa được gửi tới số điện thoại</Text>
                <Text style={{marginTop: 20, fontSize: 15, fontWeight: 'bold'}}>+84979027139</Text>
                <OTPTextinput tintColor={"#163B81"}  inputCount={6}/>
                <View style={{marginTop: 20}}>
                    <CountDown
                        size={18}
                        until={300}
                        onFinish={() => console.log('Finished')}
                        digitStyle={{}}
                        digitTxtStyle={{color: '#000000'}}
                        timeLabelStyle={{color: 'red', fontWeight: 'bold'}}
                        separatorStyle={{color: '#000000'}}
                        timeToShow={['M', 'S']}
                        timeLabels={{m: null, s: null}}
                        showSeparator
                    />
                </View>
                
                <TouchableOpacity>
                    <Text style={{fontSize: 15, marginTop: 20, color:'#FE4E4E'}}>Resend OTP</Text>
                </TouchableOpacity>
                <ButtonClick style={styles.continue} text="Continue" onPress={()=> navigation.navigate('infor')}/>
                <Text style={{textAlign: 'center', marginTop: 30, fontSize: 15, lineHeight: 25}}>Nếu tiếp tục, bạn sẽ đồng ý với Điều Khoản Sử Dụng và Chính Sách Bảo Mật của chúng tôi</Text>
            </View>
            <TouchableOpacity>
                <Text style={{color: '#FE4E4E', fontSize: 17}}>Bạn cần trợ giúp?</Text>
            </TouchableOpacity>
           
           
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    continue:{
        backgroundColor: '#FE4E4E',
        width: 300,
        height: 39,
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25
       },
})
export default OTP