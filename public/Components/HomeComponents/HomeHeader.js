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
  TouchableOpacity,
  TextInput
} from 'react-native';
// import Iconclosebutton from '../Components/Iconclosebutton'
import Icon from 'react-native-vector-icons/Ionicons';
const HomeHeader = ({text, onPress}) => {
    return (
        <View style={styles.container}>
            
            <Text style={styles.headerText}>CASHBACK</Text>
            <View style={styles.search}>
                <TextInput placeholder="Search" style={{width: '87%'}}/>
                <Icon name='search' size={20} color='#000'/>
            </View>
           
            <View style={styles.header}>
                <TouchableOpacity style={styles.closebutton} onPress={onPress}>
                    <Icon name='notifications' size={25} color='#fff'/>
                </TouchableOpacity>
            </View>
        </View>
       
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
       alignItems:'center',
       justifyContent: 'space-around',
        flexDirection: 'row',
        
    },
    header:{
        // width: '100%',
        // height: '100%',
        // flexDirection: 'row',
        // alignItems: 'center',
        // justifyContent: 'flex-end'
    },
    headerText: {
        // position: 'absolute',
        // alignSelf: 'flex-start',
        fontSize: 20,
        color: '#fff',
        fontWeight: '400',
    },
    closebutton: {
        // position:'absolute',
        // alignItems: 'center',
        // right: 0,
    },
    search: {
        // position: 'absolute',
        backgroundColor: '#fff',
        borderRadius: 20,
        width: '60%',
        height: '85%',
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
   
})

export default HomeHeader;