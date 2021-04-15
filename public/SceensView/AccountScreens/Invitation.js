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
  Dimensions
} from 'react-native';
import Swiper from 'react-native-swiper'

//https://www.npmjs.com/package/react-native-swiper

const Invitation = () => {
    
    const [value, setValue] = useState(0)
    return (
        <ScrollView contentContainerStyle={{alignItems: 'center'}}>
            <View style={{alignItems:'center',width: '100%', backgroundColor: '#fff', paddingBottom: 13,
                shadowOffset: {width: 1, height: 1},
                shadowColor: '#D3D3D3',
                shadowOpacity: 1,
            elevation: 5, }}>
                <Image source={require('../../../src/Image/Banner/Group6395.png')} style={styles.image}/>
                <View style={{marginHorizontal: 10, marginTop: 20}}>
                    <Text style={{fontSize: 16, fontWeight: 'bold', color: '#414858', marginBottom: 4}}>Mời bạn bè cùng sử dung và tận hưởng hoàn tiền từ CashBack</Text>
                    <Text>Cả hai sẽ cùng nhận thưởng lần lượt 30.000 Đ cho bạn và 20.000 Đ cho bạn của bạn khi người được giới thiệu đăng ký thông qua mã giới thiệu hoặc đường dẫn của bạn, và chi tiêu đủ 200.000 Đ. Cùng chia sẻ nhé!</Text>
                </View>
                <TouchableOpacity style={styles.invitationCode}>
                    <Text style={{color: '#9A9A9A', fontSize: 14}}>Referral Code</Text>
                    <Text style={{fontWeight: 'bold'}}>INJ1UQ</Text>
                </TouchableOpacity>
            </View>
            <View style={{width: '100%', backgroundColor: '#fff', paddingVertical: 13,
                shadowOffset: {width: 1, height: 1},
                shadowColor: '#D3D3D3',
                shadowOpacity: 1,
                elevation: 5,
                marginTop: 10,
                paddingHorizontal: 10}}>
                <Text style={{fontWeight: 'bold', color: '#414858', fontSize: 16}}>How to use this</Text>
                <View style={{marginEnd: 60, marginStart: 30, marginTop: 20}}>
                    <View style={{flexDirection: 'row'}}>
                        <Image source={require('../../../src/Image/Invitation/Group6406.png')} style={styles.imageguide}/>
                        <Text style={{marginStart: 20, fontSize: 14,}}>Chia sẻ mã giới thiệu hoặc đường dẫn của bạn</Text>
                    </View>
                    <View style={{flexDirection: 'row', marginTop: 10}}>
                        <Image source={require('../../../src/Image/Invitation/Group6434.png')} style={styles.imageguide}/>
                        <Text style={{marginStart: 20, fontSize: 14}}>Bạn của bạn đăng ký thông qua mã giới thiệu hoặc đường dẫn của bạn</Text>
                    </View>
                    <View style={{flexDirection: 'row', marginTop: 10}}>
                        <Image source={require('../../../src/Image/Invitation/Group6539.png')} style={styles.imageguide}/>
                        <Text style={{marginStart: 20, fontSize: 14}}>Bạn của bạn đã chi tiêu đủ 200.000 đ và cập nhật thông tin tài khoản ngân hàng trên CashBack</Text>
                    </View>
                    <View style={{flexDirection: 'row', marginTop: 10}}>
                        <Image source={require('../../../src/Image/Invitation/Group6721.png')} style={styles.imageguide}/>
                        <Text style={{marginStart: 20, fontSize: 14}}>Cả hai sẽ được nhận thưởng lần lượt 30.000 đ cho bạn và 20.000 đ cho bạn của bạn khi hoàn tiền từ việc mua hàng của bạn ấy được xác nhận</Text>
                    </View>
                </View>
            </View>
            <View style={{backgroundColor: '#fff', marginTop: 10,  shadowOffset: {width: 1, height: 1},
                shadowColor: '#D3D3D3',
                shadowOpacity: 1,
                elevation: 5,
                width: '100%',
                height: 300,
                
                }}>
                <View style={{ flexDirection:'row', width:  Dimensions.get('window').width, paddingTop: 10}}>
                    <TouchableOpacity style={[styles.credit, {borderBottomColor: value == 0 ? 'red': '#D1D1D1'}]}>
                        <Text style={{fontWeight: 'bold', color: value == 0 ? '#000' : '#757575'}}>Đang xử lý</Text>
                        <Text style={{color: '#757575', marginTop: 5}}>0 Bạn của bạn: 0 đ</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.credit, {borderBottomColor: value == 1 ? 'red': '#D1D1D1'}]}>
                        <Text style={{fontWeight: 'bold', color: value == 1 ? '#000' : '#757575'}}>Đã hoàn thành</Text>
                        <Text style={{color: '#757575', marginTop: 5}}>1 Bạn của bạn: 30.000 đ</Text>
                    </TouchableOpacity>
                </View>
                <Swiper style={styles.wrapper} 
                    showsButtons={true} 
                    showsButtons= {false} 
                    showsPagination={false} 
                    loop={false}
                    onIndexChanged={(index) =>{
                       setValue(index)
                    }}
                  >
                    <View style={styles.slide1}>
                        <Text style={styles.text}>Hello Swiper</Text>
                       
                    </View>
                    <View style={styles.slide2}>
                        <Text style={styles.text}>Beautiful</Text>
                    </View>
                </Swiper>
            </View>
            <View style={{marginTop: 20, backgroundColor: '#fff', width: '100%', paddingVertical: 10,
                    paddingHorizontal: 10, shadowOffset: {width: 1, height: 1},
                    shadowColor: '#D3D3D3',
                    shadowOpacity: 1,
                    elevation: 5,}}>
                    <Text style={{color: '#414858', fontSize: 16, fontWeight: 'bold'}}>Điều khoản & Điều kiện chương trình giới thiệu bạn bè</Text>
                    <Text style={{marginTop: 10}}>Bạn sẽ nhận được 30.000 Đ tiền thưởng trong tài khoản ShopBack với mỗi lượt giới thiệu bạn bè đăng ký 
                        tài khoản ShopBack thành công (có áp dụng điều khoản
                        & điều kiện). Người được giới thiệu được xem là hợp lệ 
                        khi người đó thỏa tất cả các điều kiện bên dưới:</Text>
                    <Text>(1) Đăng ký tài khoản ShopBack thông qua đường dẫn link ShopBack hoac la code gioi thieu o trang nay</Text>
                    <TouchableOpacity style={{marginTop: 10}} activeOpacity={1}>
                        <Text style={{color: '#2360D9'}}>Read more</Text>
                    </TouchableOpacity>
            </View>
            
            
            <View style={{marginBottom: 100}}></View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    image:{
        width: 400,
        height: 200,
        marginTop: 20,
        resizeMode: 'contain'
    },
    invitationCode:{
       
        borderColor: '#D6D6D6',
        borderWidth: 2,
        flexDirection: 'row',
        width: "90%",
        height: 40,
        marginTop: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        marginHorizontal: 10,
         borderStyle: 'dotted',
    },
    imageguide:{
        width: 60,
        height: 60,
        resizeMode: 'contain'
    },
    credit:{
        flex: 1, 
        alignSelf: 'center', 
        alignItems: 'center',
        borderBottomColor: '#D1D1D1', 
        borderBottomWidth: 1,  
        paddingBottom: 10
    }
})

export default Invitation