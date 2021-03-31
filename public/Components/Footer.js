import React, {useState} from 'react';
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

const Footer = () => {
    return(
        
             <View style={styles.footer}>
                <Text>Your are in </Text>
                <Text style={{color:'#3684E4'}}>Viet Nam</Text>
            </View>
    )
}
const styles = StyleSheet.create({
    footer:{
        flexDirection: 'row',
        backgroundColor: '#DEDEDE',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
})

export default Footer