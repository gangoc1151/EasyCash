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
// import Iconclosebutton from '../Components/Iconclosebutton'
import Icon from 'react-native-vector-icons/Ionicons';
const header = ({text, onPress}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>{text}</Text>
            <View style={styles.header}>
                <TouchableOpacity style={styles.closebutton} onPress={onPress}>
                    <Icon name='close' size={26} color='#fff'/>
                </TouchableOpacity>
            </View>
        </View>
       
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems:'center',
        justifyContent: 'center'
    },
    header:{
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    headerText: {
        position: 'absolute',
        alignSelf: 'center',
        fontSize: 20,
        color: '#fff',
        letterSpacing: 1,
        fontWeight: '600',
        
    },
    closebutton: {
        position:'absolute',
        alignItems: 'center',
        right: 0,
    }
})

export default header;