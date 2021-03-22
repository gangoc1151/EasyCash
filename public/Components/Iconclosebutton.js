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
import Icon from 'react-native-vector-icons/FontAwesome';
const Iconclosebutton = ({name}) => {
    return (
        <TouchableOpacity>
            <Icon name={name} size={30}/>
        </TouchableOpacity>
    )
}

export default Iconclosebutton;