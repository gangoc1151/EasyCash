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
  TouchableOpacity
} from 'react-native';
import Option from '../../Components/Option'

const Account = ({navigation}) => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View>
                <View style={{ width: "100%", backgroundColor: '#fff', padding: 7, marginTop: 9}}>
                    <Option Iconname="ios-people" name='Rủ thêm bạn, nhận thêm hoàn tiền' IconColor="#2A9CFD" onPress={()=> navigation.navigate('Invitation')}/>
                </View>
                <View style={{ width: "100%", backgroundColor: '#fff', padding: 5, marginTop: 9}}>
                    <Option Iconname="star" name='Đánh giá chúng tôi trên Appstore' IconColor="#F7CE47"/>
                </View>
                <View style={{ width: "100%", backgroundColor: '#fff', padding: 7, marginTop: 9}}>
                    <Text style={{fontSize: 16, color:'#414858', fontWeight: 'bold'}}>Cài đặt tài khoản</Text>
                    <Option Iconname="person" name='Thông tin tài khoản' IconColor="#414858" onPress={() => navigation.navigate('PersonDetail')}/>
                    <Option Iconname="md-lock-closed" name='Cập nhật mật khẩu' IconColor="#414858" onPress={() => navigation.navigate('ChangePassword')}/>
                    <Option Iconname="md-notifications" name='Cài đặt thông báo' IconColor="#414858"/>
                    <Option Iconname="md-language" name='Ngôn ngữ (Language)' IconColor="#414858"/>
                </View>
                <View style={{ width: "100%", backgroundColor: '#fff', padding: 7, marginTop: 9}}>
                    <Text style={{fontSize: 16, color:'#414858', fontWeight: 'bold'}}>Hỗ trợ</Text>
                    <Option Iconname="card" name='Trung tâm hỗ trợ' IconColor="#414858"/>
                </View>
            </View>
           
            <TouchableOpacity style={styles.logout}>
                <Text style={{color: '#FE4E4E'}}>Log out</Text>
            </TouchableOpacity>
            <Text style={{alignSelf: 'center', marginTop: 10, fontSize: 12, color:'#969696'}}>Version 1.2.1.1 (20.02.2021)</Text>
            <Text style={{alignSelf: 'center', fontSize: 9, color: '#969696', marginBottom: 55}}>Được tạo nên với tâm huyết</Text>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    logout: {
        backgroundColor: '#fff',
        width: 260, 
        height: 45,
        borderRadius: 23,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 110,
        shadowOffset: {width: 1, height: 1},
        shadowColor: '#D3D3D3',
        shadowOpacity: 1,
        elevation: 5,
    }
})

export default Account;