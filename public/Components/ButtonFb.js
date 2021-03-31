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
import Icon from 'react-native-vector-icons/AntDesign'
const ButtonFb = (props) => {
    return (
        <View>
            <TouchableOpacity style={props.style} onPress={props.onPress}>
                <Icon name='facebook-square' size={26} color='#fff' style={{marginRight: 10}}/>
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
        fontSize: 14,
        fontWeight: '500'
    }
})

export default ButtonFb