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
  ActionSheetIOS,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import RNPickerSelect from 'react-native-picker-select';

const Language = () => {
    function OptionButton() {
       
        let BUTTONS = ["Tiếng Việt", "English", "China", "Cancel"];
        ActionSheetIOS.showActionSheetWithOptions(
        {
            title: "Thông báo khuyến mãi",
            tintColor: "#242424",
            options: BUTTONS,
            cancelButtonIndex: 3,
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
    if (Platform.OS === 'ios'){
    return (
        <ScrollView>
           <TouchableOpacity style={styles.discount} onPress={() => OptionButton()}>
                        <Text style={{padding: 10, fontSize: 17}}>
                            Ngôn ngữ (Language)
                        </Text>
                        <Icon name='md-chevron-forward-outline' size={24} color='#9B9B9B' />
            </TouchableOpacity>
            <Text style={styles.text}>Tiếng Việt</Text>
        </ScrollView>
    )}
    else {
        return (
            <ScrollView>
            <RNPickerSelect
                    placeholder={{
                            label: ' Ngôn ngữ (Language)',
                            value: null,
                            color: '#FE4E4E',
                        }}
                    onValueChange={(value) => console.log(value)}
                    items={[
                        { label: "Tiếng Việt", value: '+61' },
                        { label: 'English', value: '+82' },
                        { label: 'China', value: '+84' },
                    ]}>
                <TouchableOpacity style={styles.discount} onPress={() => OptionButton()}>
                        <Text style={{padding: 10, fontSize: 17}}>
                            Ngôn ngữ (Language)
                        </Text>
                        <Icon name='md-chevron-forward-outline' size={24} color='#9B9B9B' />
                </TouchableOpacity>
                        <Text style={styles.text}>Tiếng Việt</Text>
                </RNPickerSelect>
            </ScrollView>
            )
    }
       
    
}

const styles = StyleSheet.create({
    discount: {
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

})

export default Language