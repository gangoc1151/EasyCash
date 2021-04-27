import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button
} from 'react-native';
import ButtonClick from '../../Components/Button'
import PersonCard from '../../Components/CashBackComponent/PersonCard'
import Option from '../../Components/Option'
const CashBack = ({navigation}) => {
    return (
        <ScrollView contentContainerStyle={{alignItems: 'center'}}>
            
            <ButtonClick text='Withdraw' style={styles.Withdraw} onPress={() => navigation.navigate('Withdrawal')}/>
            <Text style={styles.text}>Để rút tiền, số dư hiện tại cần có tối thiểu là 50.000 đ và ít nhất một tài khoản ngân hàng.</Text>
            <View style={styles.panel}>
                <Text style={{fontSize: 16, color:'#414858', fontWeight: 'bold'}}>Thông tin</Text>
                <Option Iconname="card" name='Tài khoản ngân hàng' IconColor="#414858" onPress={() => navigation.navigate('BankAccount')}/>
                <Option Iconname="list-outline" name='Lịch sử giao dịch' IconColor="#414858" onPress={() => navigation.navigate('History') }/>
                <Option Iconname="md-warning" name='Báo lỗi hoàn tiền' IconColor="#414858"/>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    Withdraw: {
        backgroundColor: '#FE4E4E',
        width: 160,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        marginTop: 100
    },
    text: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 14,
        marginHorizontal: 10,
        fontStyle: 'italic',
        color: '#545454'
    },
    panel: {
        backgroundColor: '#fff',
        width: '100%',
        padding: 10,
        marginTop: 20
    }
})

export default CashBack;