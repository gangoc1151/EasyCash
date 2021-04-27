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
  Image,
  TouchableOpacity
} from 'react-native';

import Slider from '../../Components/Slider'
import ButtonClick from '../../Components/Button'
const slides = [
    {
      key: 'one',
      title: 'Title 1',
      text: 'Trải nghiệm mua sắm tại hơn 150\ncửa hàng cùng CashBack.',
      image: require('../../../src/Image/Slider/Group4877.png'),
      backgroundColor: '#59b2ab',
    },
    {
      key: 'two',
      title: 'Title 2',
      text: 'Nhận hoàn tiền vào tài khoản CashBack\ncủa bạn',
      image: require('../../../src/Image/Slider/Group5126.png'),
      backgroundColor: '#febe29',
    },
    {
      key: 'three',
      title: 'Rocket guy',
      text: 'Rút tiền hoàn một cách dễ dàng vào\ntài khoản ngân hàng của bạn',
      image: require('../../../src/Image/Slider/Group4898.png'),
      backgroundColor: '#22bcb5',
    }
  ];

const HomeSceen = ({navigation}) => {
    
    return (
        <View style={styles.container}>
          <ScrollView contentContainerStyle={styles.body} showsVerticalScrollIndicator={false} >
            <View >
                <Slider data = {slides} style={styles.Slider}/>
                <View style={styles.modalBox}>
                    <ButtonClick text='Login' style={styles.LoginButton} onPress={() => navigation.navigate('Login')}/>
                    <ButtonClick text='Register' style={styles.SignUpButton} onPress={() => navigation.navigate('SignUp')}/>
                </View>
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
    flex:1,
    alignContent: 'center',
    backgroundColor: '#fff'
  
  },
  body:{
      flex: 1,
      textAlign:'center',
      justifyContent: 'center'
  }
  ,
  LoginButton:{
    backgroundColor: '#FE4E4E',
    width: 160,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25
  },
  SignUpButton:{
    backgroundColor: '#B8B8B8',
    width: 160,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25
  },
  modalBox: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      marginTop: 40
  },
  footer:{
      flexDirection: 'row',
      backgroundColor: '#DEDEDE',
      height: 50,
      alignItems: 'center',
      justifyContent: 'center'
  }
 
});

export default HomeSceen;