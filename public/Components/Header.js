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
} from 'react-native';
import Iconclosebutton from '../Components/Iconclosebutton'
const header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>Login</Text>
            {/* <Iconclosebutton name={'close'}/> */}

        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerText: {
        fontSize: 20,
        color: '#fff',
        letterSpacing: 1,
        fontWeight: '600'
        
    }
})

export default header;