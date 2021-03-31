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
  TouchableOpacity
} from 'react-native';

const PersoneCard = () => {
    return(
        <View style={styles.container}>
            <View style={styles.infor}>
                <View>
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>Viet Nguyen</Text>
                    <Text style={{fontSize: 13, color: '#6B6C70'}}>Total money cashback</Text>
                </View>
                
                <Text style={{color: '#FE4E4E', fontSize: 25}}>2000$</Text>
            </View>
            <TouchableOpacity style={styles.recommendation}>
                <Text style={{color: "#3F68C0", marginVertical: 5}}>Bắt đầu với những gợi ý tốt nhất từ chúng tôi!</Text>
            </TouchableOpacity>
                
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
    },
    infor: {
        flexDirection:'row',
        justifyContent: 'space-between'
    },
    recommendation: {
        width: 320,
        backgroundColor: "#F2F4FF",
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        marginTop: 15,
        borderRadius: 15
    }
})

export default PersoneCard