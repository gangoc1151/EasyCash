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
  FlatList,
  Touchable,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Title = ({iconname, title, style}) => {
    return (
        <View style={styles.container}>
            <View style={{flexDirection: 'row'}}>
                <Icon name={iconname} size={22} color='#FE4E4E' style={style}/>
                <Text style={styles.text}>{title}</Text>
            </View>
            
             <TouchableOpacity>
                 <Text style={{color: '#FE4E4E'}}>See more</Text>
             </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        justifyContent: 'space-between',
        marginTop: 20,
        paddingHorizontal: 6
    },
    text:{
        color: '#414858',
        fontSize: 18,
        paddingStart: 5,
        fontWeight: '400'
    }
})

export default Title