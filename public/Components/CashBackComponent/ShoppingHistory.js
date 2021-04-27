import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button
} from 'react-native';
import Filter from './Filter'

const ShoppingHistory = () => {
    return (
      <View style={{flex: 1, backgroundColor: '#fff',}}>
        <View style={{marginHorizontal: 10}}>
          <Filter />
        </View>
        
    </View>
    )
}

const styles = StyleSheet.create({

})

export default ShoppingHistory