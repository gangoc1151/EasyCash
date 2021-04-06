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
  Image
} from 'react-native';

const Invitation = () => {
    return (
        <View style={{alignItems: 'center'}}>
            <Image source={require('../../../src/Image/Banner/Group6395.png')} style={styles.image}/>
            <View style={{marginHorizontal: 10, marginTop: 20}}>
                <Text style={{fontSize: 16, fontWeight: 'bold', color: '#414858', marginBottom: 4}}>Mời bạn bè cùng sử dung và tận hưởng hoàn tiền từ CashBack</Text>
                <Text>Cả hai sẽ cùng nhận thưởng lần lượt 30.000 Đ cho bạn và 20.000 Đ cho bạn của bạn khi người được giới thiệu đăng ký thông qua mã giới thiệu hoặc đường dẫn của bạn, và chi tiêu đủ 200.000 Đ. Cùng chia sẻ nhé!</Text>
            </View>
            <TouchableOpacity style={styles.invitationCode}>
                <Text style={{color: '#9A9A9A', fontSize: 14}}>Mã giới thiệu</Text>
                <Text style={{fontWeight: 'bold'}}>INJ1UQ</Text>
            </TouchableOpacity>
            
        </View>
    )
}

const styles = StyleSheet.create({
    image:{
        width: 400,
        height: 200,
        marginTop: 20,
        resizeMode: 'contain'
    },
    invitationCode:{
       
        borderColor: '#D6D6D6',
        borderWidth: 2,
        flexDirection: 'row',
        width: "90%",
        height: 40,
        marginTop: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        marginHorizontal: 10,
         borderStyle: 'dotted',
    }
})

export default Invitation