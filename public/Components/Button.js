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
} from 'react-native'

const ButtonClick = (props) => {
    return (
        <View>
            <TouchableOpacity style={props.style} onPress={props.onPress}>
                <Text style={styles.text}>{props.text}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {  
        backgroundColor: '#FE4E4E',
        width: 160,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25
    },
    text:{
        color: '#fff',
        fontSize: 15,
        fontWeight: '500'
    }
})

export default ButtonClick