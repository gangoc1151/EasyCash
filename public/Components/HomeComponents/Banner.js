import React, {useEffect, useState} from 'react';
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
  Dimensions, Animated,
  FlatList
} from 'react-native';
// import data from '../../Utils/data/data'

const Banner = ({data, style}) => {

    return (
        <View style={style}>
            <FlatList data={data} 
                    keyExtractor = {(item, index) => 'key' + index}
                    horizontal
                    pagingEnabled
                    scrollEnabled
                    snapToAlignment= 'center'
                    scrollEventThrottle ={16}
                    decelerationRate = {'fast'}
                    showsHorizontalScrollIndicator = {false}
                    renderItem={({item}) => {
                   
                    return (
                    <View style={styles.image}>
                        <Image  source={item.image}/>
                    </View>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        paddingHorizontal: 5
    }
})

export default Banner