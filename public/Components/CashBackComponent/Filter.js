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
  TextInput
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const Filter = () => {
    return (
      <View>
        <View style={{width: 350, alignSelf: 'center', flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', marginTop: 10}}>
            <View style={styles.filter}>
                <Icon name='calendar-outline' size={20} style={{marginStart: 10}} color='#A5A4A4'/>
                <Text style={{marginStart: 10}}>Chọn tháng</Text>
            </View>
            <View style={styles.filter}>
                <Icon name='pricetag' size={20} style={{marginStart: 10}} color='#A5A4A4'/>
                <Text style={{marginStart: 10}}>Trạng thái</Text>
            </View>
        </View>
        <View style={styles.input}>
            <Icon name='list' size={20} style={{marginStart: 10}} color='#A5A4A4'/>
            <TextInput placeholder='Các trang bán hàng' style={{width:300, marginStart: 10}}/>
        </View>
      </View>
          
        
    )
}

const styles = StyleSheet.create({
    filter: {
        borderColor: '#DCDCDC',
        borderWidth: 1,
        width: 170,
        height: 28,
        alignItems: 'center',
        flexDirection: 'row',
    },
    input:{
        width: 350,
        borderWidth: 1,
        borderColor: '#DCDCDC',
        marginTop: 15,
        height: 39,
        alignSelf: 'center',
        alignItems:'center',
        flexDirection:'row'

    }
})

export default Filter