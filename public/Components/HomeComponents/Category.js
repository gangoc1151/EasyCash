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
import CategoryItem from '../HomeComponents/CategoryItem'
import { FlatGrid } from 'react-native-super-grid';
const data = [
    {
        key: 'one',
        icon: 'easel-outline',
        name: 'Điện Tử & Gia Dụng'
    },
    {
        key: 'two',
        icon: 'easel-outline',
        name: 'Điện Tử & Gia Dụng'
    },
    {
        key: 'three',
        icon: 'easel-outline',
        name: 'Điện Tử & Gia Dụng'
    },
    {
        key: 'four',
        icon: 'easel-outline',
        name: 'Điện Tử & Gia Dụng'
    },
    {
        key: 'five',
        icon: 'easel-outline',
        name: 'Điện Tử & Gia Dụng'
    },
    {
        key: 'six',
        icon: 'easel-outline',
        name: 'Điện Tử & Gia Dụng'
    },
]
const Category = () =>{
    return (
        <View style={styles.container}>
            <View style={{flexDirection: 'row', justifyContent: 'space-around', marginVertical: 9}}>
                <CategoryItem text='Điện Tử & Gia Dụng' icon='easel-outline' color='#4A6CD1'/>
                <CategoryItem text='Thoi Trang' icon='md-shirt' color='#EA5C56'/>
                <CategoryItem text='Suc Khoe Lam Dep' icon='md-rose' color='#F789A2' />
                <CategoryItem text='Tieu Dung Thuc Pham' icon='basket' color='#F6AC3C'/>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-around', marginVertical: 9}}>
                <CategoryItem text='Me & Be' icon='ios-heart' color='#67C591'/>
                <CategoryItem text='Nha cua & Doi song' icon='ios-business' color='#F6AC3C'/>
                <CategoryItem text='Du Lich' icon='airplane-sharp' color='#4A6CD1'/>
                <CategoryItem text='Uu Dai Hot' icon='ios-receipt' color='#EA5C56'/>
            </View>
             

          
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        marginTop: 20,
        width: 340,
        shadowOffset: {width: 1, height: 1},
        shadowColor: '#D3D3D3',
        shadowOpacity: 0.7,
        marginHorizontal: 4,
        marginVertical: 6,
        padding: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignSelf:'center',
        elevation: 5,
        borderWidth: 1,
        borderColor: '#F0F0F0'
   
    }
})

export default Category

