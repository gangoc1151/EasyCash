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
} from 'react-native';

const LoginScreen = (props) => {
    return (
        <View>
            {/* <View style={styles.header}>
                <Text style={styles.title}>Login</Text>
            </View> */}
            {/* <Button title="Login" onPress={()=> props.navigation.navigate('HomeScreen')}/> */}
      
            
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        backgroundColor: '#FE4E4E',
        flexDirection: 'row',
        height: '30%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
       color: '#fff',
       fontSize: 20,
       fontWeight: '500'
    }
})

export default LoginScreen;