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
  TextInput,
  FlatList,
  Image
} from 'react-native';
import BankInfo from './BankInfo'
import AddBank from './AddBank'

const BankAccountList = () => {
    return (
        <View>
             <View style={{alignItems: 'center'}}>
            <BankInfo />
          </View>
          <TouchableOpacity style={{alignItems: 'center', marginBottom: 14}}>
            <AddBank />
          </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default BankAccountList