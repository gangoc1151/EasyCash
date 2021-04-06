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
import Icon from 'react-native-vector-icons/Ionicons';
const Option = ({Iconname, name, IconColor, onPress}) => {
    return (
        <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}} onPress={onPress}>
            <Icon name={Iconname} size={24} color={IconColor}/>
            <Text style={styles.text}>{name}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    text:{
        marginStart: 16,
        color: '#414858',
        fontSize: 15
    }
})

export default Option