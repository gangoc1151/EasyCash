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
  Image
} from 'react-native';
import PersoneCard from '../../Components/HomeComponents/PersonCard';
import Banner from '../../Components/HomeComponents/Banner'
import data from '../../Utils/data/data';
import Title from '../../Components/HomeComponents/Title'
import BrandName from '../../Components/HomeComponents/BrandName'
import Icon from 'react-native-vector-icons/Ionicons';
import { DataTable } from 'react-native-paper';
import Guide from '../../Components/HomeComponents/Guide';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Category from '../../Components/HomeComponents/Category'

const Online = ({navigation}) => {
    console.log(data)
    return (
        <ScrollView keyboardShouldPersistTaps="handled" 
        contentContainerStyle={styles.container} 
        style={{backgroundColor: '#fff'}}
        contentInset={{bottom: 80}}
        showsVerticalScrollIndicator={false}
        >
            <View style={{width: '100%', alignItems: 'center'}}>
                <PersoneCard />
            </View>
           
            <Banner data={data.banner} style={{marginTop: 10}}/>
            <Title iconname='star' title='Top Thương Hiệu'/>
            <BrandName data={data.BrandName}/>
            <Image source={data.banner[0].image} style={styles.banner}/>
            <View style={styles.title}>
                <Icon name='star' size={22} color='#FE4E4E'/>
                <Text style={{marginStart: 5, fontSize: 18, fontWeight: '400', color: '#414858'}}>How To Earn Cashback</Text>
            </View>
            <Guide />
            <Title iconname='md-list-sharp' title='Danh Mục Sản Phẩm'/>
            <Category />
            <Title iconname='basket' title='Khong The Bo Lo'/>
            
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        
    },
    text: {
       
    },
    banner: {
        alignSelf: 'center',
        width: 350, 
        height: 100,
        resizeMode: 'contain'
    },
    title:{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        marginStart: 5
    }
})
export default Online;