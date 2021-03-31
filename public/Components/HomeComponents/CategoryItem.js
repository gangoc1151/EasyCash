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
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const CategoryItem = ({icon, text, color}) => {
    return (
        <View style={styles.container}>
            <Icon name={icon} size={30} color={color}/>
            <Text style={{textAlign: 'center', fontSize: 12, color: '#8A8A8A'}}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 70,
        alignItems: 'center',
        
    }
})

export default CategoryItem