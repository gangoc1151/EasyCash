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

const AddBank = () => {
    return (
        <View style={styles.panel}>
            <Icon name='add' size={25} color='#FE4E4E'/>
            <Text style={{fontSize: 15}}>Add a new bank account</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    panel: {
        width: '94%',
        height: 80,
        backgroundColor: '#F5F5F5',
        marginTop: 10,
        borderWidth: 0.5, 
        borderColor: '#D1D1D1',
        borderRadius: 7,
        alignItems: 'center',
        justifyContent: 'center'
    },
})

export default AddBank