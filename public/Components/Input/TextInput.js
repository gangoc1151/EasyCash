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

const Textinput = ({placeholder, value, style}) => {
    return(
        <View style={style}>
            <TextInput style={styles.input} placeholder={placeholder} value={value}/>
        </View>
    )
}

const styles = StyleSheet.create({

    input: {
        paddingLeft: 20,
        width: 310,
        height: 50,
        borderWidth: 1,
        borderColor: "#D1D1D1",
        borderRadius: 25,
        paddingRight: 20
        
    }
})

export default Textinput