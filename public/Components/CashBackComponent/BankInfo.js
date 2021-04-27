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
const BankInfo = () => {
    return (
        <View style={styles.panel}>
            <View style={{paddingHorizontal: 5, height: '100%', justifyContent: 'center', marginStart: 5}}>
                    <Text style={styles.text}>Viet Nguyen</Text>
                <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 8}}>
                    <Text style={styles.text}>063-111</Text>
                    <Text style={styles.text}>11048923</Text>
                </View>
                
                <Text style={[styles.text, {marginTop: 8}]}>Commonweath Bank</Text>
            </View>
            
            <TouchableOpacity>
                <Icon name='close' size={25} color='#A0A4AF' />
            </TouchableOpacity>
           
        </View>
    )
}
const styles = StyleSheet.create({
    panel: {
        width: '94%',
        flexDirection: 'row',
        height: 100,
        backgroundColor: '#F5F5F5',
        marginTop: 10,
        borderWidth: 0.5, 
        borderColor: '#D1D1D1',
        borderRadius: 7,
        justifyContent: 'space-between',
       
    },
    text:{
        marginEnd: 10,
        fontWeight: 'bold', 
        color: '#414858',
        fontSize: 17

    }
})

export default BankInfo