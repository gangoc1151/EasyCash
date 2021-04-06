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
  FlatList,
  TouchableOpacity
} from 'react-native';
import data from '../../Utils/data/data'
const HotDeal = () => {
    return (
        <View style={styles.container}>
            <Image source={data.FeatureBrands[0].image} style={styles.image}/>
            <View style={styles.title}>
                <Text style={styles.text}>Bo san pham lam dep Laneige</Text>
                <Text style={{color: '#FE4E4E', marginTop: 5, fontSize: 13, fontWeight: '500'}}>Up to 3%</Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={{color: '#fff'}}>Buy Now</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: 161,
        height: 264,
        shadowOffset: {width: 1, height: 1},
        shadowColor: '#D3D3D3',
        shadowOpacity: 0.5,
        elevation: 5,
        marginHorizontal: 4,
        marginVertical: 6,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#F0F0F0'
    },
    image:{
        width: 160,
        height: 180,
        resizeMode: 'cover',
        borderRadius: 4,
    },
    text:{
        textAlign: 'center',
        marginTop: 10
    },
    title:{
        backgroundColor: '#fff',
        width: 160,
        position: 'absolute',
        top: 150,
        alignItems:'center',
        shadowOffset: {width: 1, height: 1},
        shadowColor: '#D3D3D3',
        shadowOpacity: 0.5,
        elevation: 5,
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#F0F0F0'
    },
    button:{
        backgroundColor:'#FE4E4E',
         width: 129, 
         height: 30, 
         alignItems: 'center', 
         justifyContent:'center', 
         marginTop: 3, 
         borderRadius: 3,
         marginBottom: 10
        
    }
})

export default HotDeal