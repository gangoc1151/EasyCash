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
  Image,
  Dimensions,
  TextInput
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Password from '../../Components/Input/Password';
import ButtonClick from '../../Components/Button';
const ChangePassword = () => {
    return (
        <View style={{alignItems: 'center'}}>
           
            <Password placeholder='Your password' style={styles.input}/>
            <Password placeholder='New password' style={styles.input}/>
            <Password placeholder='Repeat password' style={styles.input}/>
            <ButtonClick text='Update' style={styles.button}/>
            
        </View>
    )
}

const styles = StyleSheet.create({
    button: {  
        backgroundColor: '#FE4E4E',
        width: 250,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        marginTop: 20
    },
    input:{
        marginTop: 20
    }
})

export default ChangePassword