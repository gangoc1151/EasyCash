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
            <View style={{
                backgroundColor:'#D1D1D1',
                height: 1,
                width: '100%'
            }}/>
            <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Text>
                        So du kha dung
                    </Text>
                    <Text>
                        300$
                    </Text>
                </View>
                <View style={{
                       backgroundColor:'#D1D1D1',
                        height: 37,
                        width: 1,
                        marginTop: 7
                        
                }}/>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Text>
                        Cho xac nhan
                    </Text>
                    <Text>
                        300$
                    </Text>
                </View>
                <View style={{
                       backgroundColor:'#D1D1D1',
                        height: 37,
                        width: 1,
                        marginTop: 7
                        
                }}/>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Text>
                       So tien da rut
                    </Text>
                    <Text>
                        300$
                    </Text>
                </View>
            </View>
                
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
       backgroundColor: '#fff',
        marginTop: 100,
        width: 345,
        height: 120,
        shadowOffset: {width: 1, height: 1},
        shadowColor: '#D3D3D3',
        shadowOpacity: 1,
        elevation: 5,
        borderRadius: 10,
        
       
    
   
    },
    infor: {
        flexDirection:'row',
        justifyContent: 'space-between',
        padding: 10
    },
    recommendation: {
        width: 320,
        backgroundColor: "#F2F4FF",
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        marginTop: 15,
        borderRadius: 15,
    }
})

export default PersoneCard