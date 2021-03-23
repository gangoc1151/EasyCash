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
} from 'react-native';
// import Icon from 'react-native-ionicons'
import Icon from 'react-native-vector-icons/Ionicons';
const Iconclosebutton = ({name, style, onPress}) => {
    return (
        <TouchableOpacity style={style} onPress={onPress}>
            <Icon name={name} size={26} color='#fff'/>
        </TouchableOpacity>
    )
}


export default Iconclosebutton;