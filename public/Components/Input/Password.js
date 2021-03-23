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

const Password = () => {
    return(
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder="Password" secureTextEntry/>
        </View>
    )
}

const styles = StyleSheet.create({

    input: {
        paddingLeft: 20,
        width: 300,
        height: 40,
        borderWidth: 1,
        borderColor: "#D1D1D1",
        borderRadius: 20
    }
})

export default Password