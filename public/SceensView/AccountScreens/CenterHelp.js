import React, {useState} from 'react';
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
  Image,
  Dimensions,
  TextInput
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const OptionSelected = ({icon, text}) => {
    return (
        <View style={{flexDirection: 'row', alignItems: 'center', 
        width: '100%',
        marginVertical: 10
        }}>
            <Icon name={icon} size={35} style={styles.icon} color='#FE4E4E'/>
            <Text style={{flex: 1}}>{text}</Text>
        </View>
    )
}

const ContactSelected = ({style, text, icon, color}) => {
    return (
        <View style={[styles.contact, style]}>
            <Icon name={icon} size={24} color={color}/>
            <Text style={{marginLeft: 12, fontSize: 17}}>{text}</Text>
        </View>
    )
}
const CenterHelp = () => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ width: '100%', shadowOffset: {width: 1, height: 1},
                shadowColor: '#D3D3D3',
                shadowOpacity: 1,
                elevation: 5,}}>
                <ContactSelected style={{marginTop: 15, borderBottomWidth: 1, borderBottomColor: '#DCDCDC'}} text='CashBack' icon='ios-logo-facebook' color="#2C60EC"/>
                <ContactSelected style={{ borderBottomWidth: 1, borderBottomColor: '#DCDCDC'}} text='contact@cashback.vn' icon='mail-outline' color="#2C60EC"/>
                <ContactSelected  text='0424565885' icon='md-call' color="#2C60EC"/>
            </View>
            <View style={styles.container}>
                <Text style={styles.title}>Thời gian hoàn tiền</Text>
                <OptionSelected icon='md-receipt-outline' text='Đơn hàng sẽ được ghi nhận sau 24 - 48h kể từ khi bạn đặt hàng thành công.'/>
                <OptionSelected icon='ios-calendar-sharp' text='Thời gian nhận hoàn tiền trung bình từ 60-90 ngày kể từ ngày đơn hàng được ghi nhận trên app CashBack và đơn hàng không bị hủy, đổi trả.'/>
                <OptionSelected icon='sync-sharp' text='Hoàn tiền được áp dung trên số tiền cuối cùng sau khi đã trừ khuyến mãi, giảm giá, thuế VAT và chi phí vận chuyển.'/>
            </View>
            <View style={styles.container}>
                <Text style={styles.title}>Thời gian hoàn tiền</Text>
                <OptionSelected icon='md-warning-outline' text='Không click vào banner quảng cáo khác của thương hiệu sau khi chuyển từ CashBack qua.'/>
                <OptionSelected icon='md-open-outline' text='Phải vào CashBack trước, sau đó mới chọn sản phẩm hoặc thương hiệu vần mua và thêm vào giỏ hàng.'/>
                <OptionSelected icon='md-close-circle-outline' text='Mỗi click Mua ngay chuyển qua ứng dung chỉ được hoàn thành 1 lần thanh toán. Mở lại ứng dung CashBack để mua đơn hàng mới.'/>
            </View>
            <View style={styles.container}>
                <Text style={styles.title}>Thời gian hoàn tiền</Text>
                <OptionSelected icon='md-close-circle-outline' text='Các trường hợp hủy đơn đổi trả hoặc thanh toán không thành công sẽ không được hoàn tiền.'/>
            </View>
            <View style={{marginBottom: 100}}></View>
           
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    contact: {
        flexDirection: 'row', 
        width: '100%',
        backgroundColor: '#fff', 
        alignItems: 'center', 
        height: 50,
        paddingLeft: 15,
    },
    container: {
        width: '100%', 
        shadowOffset: {width: 1, height: 1},
        shadowColor: '#D3D3D3',
        shadowOpacity: 1,
        elevation: 5,
        backgroundColor: '#fff',
        marginTop: 20,
        padding: 5
    },
    title: {
        fontWeight:'bold', 
        fontSize: 15,
        marginLeft: 10 
    },
  icon: {
    marginHorizontal: 20
  }
})

export default CenterHelp