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
  Keyboard
 
} from 'react-native';
import PickerModal from '../Input/PickerModal'
//https://www.npmjs.com/package/react-native-picker-select#styling
const PhoneNumberInput = ({style}) => {
    return(
        <View style={[styles.container, style]}>
            {/* <Text style={{color:"#0F71E9", marginRight: 5, padding: 10}}>+84</Text> */}
            <PickerModal style={{color:"#0F71E9", padding: 15, }}/>
            <View style={styles.verticleLine}></View>
            <TextInput style={styles.input} placeholder="Phone number" autoFocus keyboardType="numeric"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        width: 310,
        height: 50,
        borderWidth: 1,
        borderColor: "#D1D1D1",
        borderRadius: 25
    },
    verticleLine: {
        height: '90%',
        alignSelf:'center',
        width: 1,
        backgroundColor: '#D1D1D1',
    },
    input: {
        paddingLeft: 10,
        width: 240
    }
})

export default PhoneNumberInput