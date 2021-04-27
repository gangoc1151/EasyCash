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
import data from '../../Utils/data/data'

const BankList = () => {
    return (
        <View style={{width: '100%', backgroundColor: '#fff', marginTop: 13}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 10, marginTop: 10}}>
            <Text style={{
                          color: '#414858',
                          fontSize: 17}}>CashBack hỗ trợ</Text>
            <Text style={{
                          color: '#FE4E4E',
                          fontSize: 17}}>see more</Text>
          </View>
            <FlatList 
            style={{marginVertical: 10}}
            showsHorizontalScrollIndicator={false}
            horizontal
            data={data.Bankname}
            keyExtractor = {(item, index) => 'key' + index}
            renderItem={({item}) => {
                return (
                <View style={{marginHorizontal: 5}}>
                    <Image source={item.image} />
                </View>
                )
            }}
         />
        </View>
    )
}

const styles = StyleSheet.create({

})

export default BankList