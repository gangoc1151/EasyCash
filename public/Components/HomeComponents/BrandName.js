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
  FlatList,
  Image
} from 'react-native';
import BrandNameBox from './BrandNameBox'
import { DataTable } from 'react-native-paper';
const BrandName = ({data}) => {
    return (
        <View >
            <FlatList data={data} 
                    keyExtractor = {(item, index) => 'key' + index}
                    horizontal
                    pagingEnabled
                    scrollEnabled
                    showsHorizontalScrollIndicator = {false}
                    renderItem={({item}) => {
                   
                    return (   
                           <BrandNameBox data={item} style={styles.image}/>
                    )
                }} />
                
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        margin: 10,
        borderColor: '#DCDCDC',
        borderWidth: 0.5,
        borderRadius: 10,
        width: 270,
        shadowOffset: {width: 1, height: 1},
        shadowColor: '#D3D3D3',
        shadowOpacity: 0.7,
        
       
    }
})

export default BrandName