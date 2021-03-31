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
import Icon from 'react-native-vector-icons/Ionicons';
const Panel = ({icon, name}) => {
    return (
        <View style={styles.panel}>
            <View style={{borderColor: '#FE4E4E', borderWidth: 2, width: 58, height: 58, borderRadius: 29, justifyContent: 'center', alignItems: 'center'}}>
                <View style={styles.icon}>
                    <Icon name={icon} size={30} color='#fff'/>
                </View>
            </View>
            <Text style={{textAlign: 'center', marginTop: 5, color: '#FE4E4E', fontSize: 17}}>{name}</Text>
            
        </View>
    )
}
const Guide = () => {
    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
        >
               <Panel icon='pricetag' name="Chọn thương hiệu hoàn tiền"/>
               <Panel icon='cart' name='Mua sam nhu binh thuong'/>
               <Panel icon='logo-bitcoin' name='Nhan hoan tien tu Cashback'/>
               <Panel  icon='md-help' name='Xem chi tiet'/>
               
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    panel:{
        width: 160,
        height: 160,
        backgroundColor: '#FFF6EE',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 18,
        marginHorizontal: 10,
        marginTop: 10
    },
    icon:{
        backgroundColor:'#FE4E4E',
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25
    }
})
export default Guide