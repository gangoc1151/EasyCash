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
  TextInput,
  Switch,
  Modal,
  ActionSheetIOS,
  Platform
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import RNPickerSelect from 'react-native-picker-select'
const Notificaiton = () => {
   function OptionButton() {
       
            let BUTTONS = ["Báo thường xuyên", "Báo 3 lần/tuần", "Báo 1 lần/tuần", "Không thông báo", "Cancel"];
            ActionSheetIOS.showActionSheetWithOptions(
            {
                title: "Thông báo khuyến mãi",
                tintColor: "#242424",
                options: BUTTONS,
                cancelButtonIndex: 4,
                destructiveButtonIndex: 1,
            },
            buttonIndex => {
                switch (buttonIndex) {
                case 0:
                    
                    break;
                case 1:
                
                    break;
                }
            }
            );
    }
     
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const DiscountNotification = () => {
        if (Platform.OS === 'ios'){
            return (
                <TouchableOpacity style={styles.discount} onPress={() => OptionButton()}>
                <Text style={{padding: 10, fontSize: 17}}>
                    Discount Notification
                </Text>
                <Icon name='md-chevron-forward-outline' size={24} color='#9B9B9B' />
            </TouchableOpacity>
            )
        }
        else{
            return (
                <RNPickerSelect
                    placeholder={{
                            label: 'Thông báo khuyến mãi',
                            value: null,
                            color: '#FE4E4E',
                        }}
                    onValueChange={(value) => console.log(value)}
                    items={[
                        { label: "Báo thường xuyên", value: '+61' },
                        { label: 'Báo 3 lần/tuần', value: '+82' },
                        { label: 'Báo 1 lần/tuần', value: '+84' },
                        { label: 'Không thông báo', value: '+72' },
                    ]}>
                    <TouchableOpacity style={styles.discount} onPress={() => OptionButton()}>
                        <Text style={{padding: 10, fontSize: 17}}>
                            Discount Notification
                        </Text>
                        <Icon name='md-chevron-forward-outline' size={24} color='#9B9B9B' />
                    </TouchableOpacity>
                </RNPickerSelect>
            )
           
        }
    }
    return (
        <ScrollView style={{flex: 1}}>
            
            
                <DiscountNotification />
                <Text style={styles.text}>Báo thường xuyên</Text>
            <View style={styles.discount}>
                <Text style={{padding: 10, fontSize: 17}}>
                    Cashback Notification
                </Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#4BD963" }}
                    thumbColor={isEnabled ? "#fff" : "#fff"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                    size={10}
                    style={{ transform: [{ scaleX: .8 }, { scaleY: .8 }] }}
                />
            </View>
            <Text style={styles.text}>Thông báo khi bạn nhận được Hoàn tiền</Text>
            <View style={styles.discount}>
                <Text style={{padding: 10, fontSize: 17}}>
                    Thông báo Thanh toán
                </Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#4BD963" }}
                    thumbColor={isEnabled ? "#fff" : "#fff"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                    size={10}
                    style={{ transform: [{ scaleX: .8 }, { scaleY: .8 }] }}
                />
            </View>
            <Text style={styles.text}>Thông báo khi bạn nhận được tiền rút</Text>
            
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    discount:{
        backgroundColor: '#fff',
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 50,
        width: '100%',
    },
    text: {
        marginHorizontal: 10,
        marginTop: 5,
        color: '#737373'
    },
    modal: {
        margin: 0, 
        backgroundColor: 'white', 
   
        bottom: 0, 
        position: 'absolute',
        width: '100%'
      }
})

export default Notificaiton