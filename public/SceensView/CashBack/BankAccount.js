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
import BankAccountList from '../../Components/CashBackComponent/BankAccountList';
import BankList from '../../Components/CashBackComponent/BankList';
const Withdraw = () => {
    return (
        <ScrollView contentContainerStyle={styles.container} scrollEnabled={true}>
 
        <View style={{width: '100%', backgroundColor: '#fff', marginTop: 13}}>
            <View style={{borderBottomColor: '#D1D1D1', borderBottomWidth: 1}}>
              <Text style={{fontWeight: 'bold', fontSize: 16, padding: 10, color: '#414858'}}>Tài khoản ngân hàng</Text>
            </View>
            <BankAccountList />
        </View>
       
        <BankList />
        <View style={{marginVertical: 100}}></View>
      </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center'
    },
    Panel: {
        width:'100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        marginTop: 15,
        height: 50,
        alignItems: 'center',
        paddingHorizontal: 15,
    },
    text:{
        color: '#FE4E4E',
        fontSize: 25,
        fontWeight: 'bold'
    }
})

export default Withdraw