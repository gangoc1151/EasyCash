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
import Textinput from '../../Components/Input/TextInput'
import ButtonClick from '../../Components/Button'
const InforProvide = () => {
    return (
        <View style={{alignItems: 'center'}}>
            <Textinput placeholder="Username" style={{marginTop: 20}}/>
            <Textinput placeholder="Email" style={{marginTop: 20}}/>
            <Textinput placeholder="Password" style={{marginTop: 20}}/>
            <Textinput placeholder="Confirm Password" style={{marginTop: 20}}/>
            <ButtonClick style={styles.continue} text="Complete" onPress={()=> navigation.navigate('infor')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    continue:{
        backgroundColor: '#FE4E4E',
        width: 300,
        height: 39,
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25
       }
})

export default InforProvide;