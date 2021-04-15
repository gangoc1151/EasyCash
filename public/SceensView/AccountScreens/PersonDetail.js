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
  Image,
  Dimensions,
  TextInput
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const Input = (prop) => {
    return(
        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 5, alignItems: 'center', paddingHorizontal: 10}}>
            <Icon name={prop.icon} size={22} color='#9B9B9B'/>
            <View style={{ borderBottomWidth: 1,
                borderBottomColor: '#DCDCDC',
                width: '90%', 
                flexDirection: 'row', justifyContent:'space-between', alignItems: 'center'}}>
                <TextInput style={styles.input} 
                value={prop.value} onChangeText={prop.onChangeText} autoCorrect={false} 
                autoCapitalize='none'
                placeholder={prop.placeholder}
                />
                <Icon name='md-chevron-forward-outline' size={24} color='#9B9B9B'/>
            </View>
         
        </View>
    )
}
const PersonDetail = () => {
    const [name, setName] = useState('Viet Nguyen')


    return (
        <ScrollView style={{backgroundColor: '#fff'}}>
            <Input value={name} onChangeText={setName} icon='person'/>
            <Input value='vietit58@gmail.com' onChangeText={setName} icon='mail-outline'/>
            <Input onChangeText={setName} icon='md-gift' placeholder='Date of birth'/>
            <Input onChangeText={setName} icon='home'  placeholder='Address line'/>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    input: {
        height: 40
    }
})
export default PersonDetail