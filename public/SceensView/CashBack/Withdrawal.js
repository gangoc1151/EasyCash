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
  TextInput,
  FlatList,
  Image
} from 'react-native';
import BankInfo from '../../Components/CashBackComponent/BankInfo';
import AddBank from '../../Components/CashBackComponent/AddBank';
import ButtonClick from '../../Components/Button';
import data from '../../Utils/data/data';
import BankAccountList from '../../Components/CashBackComponent/BankAccountList';
import BankList from '../../Components/CashBackComponent/BankList';
const Panel = () => {
  return (
      <View style={styles.Panel}>
          <Text style={{fontSize: 16}}>Số dư khả dụng</Text>
          <Text style={styles.text}>425.000 đ</Text>
      </View>
  )
}
const Withdrawal = () => {
    return (
      <ScrollView contentContainerStyle={styles.container} scrollEnabled={true}>
        <Panel />
        <View style={{width: '100%', backgroundColor: '#fff', marginTop: 13}}>
            <View style={{borderBottomColor: '#D1D1D1', borderBottomWidth: 1}}>
              <Text style={{fontWeight: 'bold', fontSize: 16, padding: 10, color: '#414858'}}>Tài khoản ngân hàng</Text>
            </View>
            <BankAccountList />
        </View>
        <View style={{width: '100%', backgroundColor: '#fff', marginTop: 13}}>
          <Text style={{fontSize: 12, color: '#545454', marginHorizontal: 10, marginTop: 13}}>Số tiền cần rút (Số dư khả dụng phải có ít nhất 50.000đ) Tiền sẽ được chuyển vào tài khoản sau 3-10 ngày</Text>
            <TextInput style={styles.input} placeholder='Enter amount'/>
            <ButtonClick text='Withdraw' style={styles.Button}/>
        </View>
        <BankList />
        <View style={{marginVertical: 100}}></View>
      </ScrollView>
    )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center', 
},
  Panel: {
      width:'100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: '#fff',
      marginTop: 15,
      height: 50,
      alignItems: 'center',
      paddingHorizontal: 10,
  },
  text:{
      color: '#FE4E4E',
      fontSize: 25,
      fontWeight: 'bold'
  },
  input: {
    paddingLeft: 20,
    width: 320,
    height: 40,
    borderWidth: 1,
    borderColor: "#D1D1D1",
    borderRadius: 25,
    paddingRight: 20,
    alignSelf: 'center',
    marginTop: 10,
    backgroundColor: '#F8F8F8'
  },
  Button: {
    backgroundColor: '#FE4E4E',
    width: 140,
    height: 40,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    alignSelf: 'center',
    marginBottom: 13
  }
})

export default Withdrawal