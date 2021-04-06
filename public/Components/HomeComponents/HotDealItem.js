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
  Image,
  FlatList
} from 'react-native';
import data from '../../Utils/data/data'

const HotDealItem = ({data}) => {
    return(
    <View>
        <FlatList 
              
                data={data}
                
                keyExtractor = {(item, index) => 'key' + index}
                scrollEnabled={false}
                nestedScrollEnabled
              
                renderItem={({item})=>{
                    return(
                        <View style={{marginVertical: 5, marginHorizontal: 5}}>
                        <Image source={item.image} style={styles.image}/>
                        </View>
                       
                    )
                }}
                numColumns={3} 
            />
    </View>)
}

const styles = StyleSheet.create({

})

export default HotDealItem