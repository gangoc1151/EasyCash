import React from 'react';
import 'react-native-gesture-handler';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const AccountHeader = ({text}) =>{
    return (
        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems:'center'}}>
                <Text style={{fontSize: 20, color: '#fff', alignSelf: 'center'}}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default AccountHeader