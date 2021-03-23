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
  TextInput
} from 'react-native';

const PhoneNumberInput = () => {
    return(
        <View style={styles.container}>
            <Text style={{color:"#0F71E9", marginRight: 5, padding: 10}}>+84</Text>
            <View style={styles.verticleLine}></View>
            <TextInput style={styles.input} placeholder="Type in" autoFocus keyboardType="numeric"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        width: 300,
        height: 40,
        borderWidth: 1,
        borderColor: "#D1D1D1",
        borderRadius: 20
    },
    verticleLine: {
        height: '90%',
        alignSelf:'center',
        width: 1,
        backgroundColor: '#D1D1D1',
    },
    input: {
        paddingLeft: 10
    }
})

export default PhoneNumberInput