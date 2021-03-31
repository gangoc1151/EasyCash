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
  Platform,
  Modal
  
} from 'react-native';
import {Picker}  from '@react-native-picker/picker'
import RNPickerSelect from 'react-native-picker-select'
import Test from './Test';
const IOS = ()=>{
  const [selectedValue, setSelectedValue] = useState("+84");
  return(
    <View style={styles.android}>
      <Picker
          selectedValue={selectedValue}
          style={{ height: 50, width: 50, alignSelf: 'center' }}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="+84" value='+84' />
          <Picker.Item label="+84" value="+84" />
        </Picker>
      </View>
  )
}
const PickerModal = ({style}) =>{
  const [selectedLanguage, setSelectedLanguage] = useState("+61");
  const [isVisible, setisVisible] = useState(true)

  const changeModeVisible= (bool) =>{
    setisVisible(bool)
  }
  
  return(
    <View style={style}>
        {/* <View style={styles.button}>
          <TouchableOpacity style={{alignSelf: 'flex-start'}}>
              <Text style={styles.text}>Cancel</Text>
            </TouchableOpacity>
        </View>
            <TouchableOpacity style={{ position:'absolute' ,alignSelf: 'flex-end'}} onPress={()=>changeModeVisible(true)}>
              <Text style={styles.text}>Confirm</Text>
            </TouchableOpacity>
        
          
          <Picker
            style={styles.container}
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage(itemValue)
          }>
            <Picker.Item label="Java" value="java"><Text>test</Text></Picker.Item>
            <Picker.Item label="JavaScript" value="js" />
            <Picker.Item label="JavaScript" value="j2s" />
            <Picker.Item label="JavaScript" value="j3s" />
        </Picker> */}
      
      <RNPickerSelect
            onValueChange={(value) => setSelectedLanguage(value)}
            items={[
                { label: "+61 Australia", value: '+61' },
                { label: '+82 New Zealand', value: '+82' },
                { label: '+84 Vietnam', value: '+84' },
                { label: '+83 Korea', value: '+72' },
            ]}
          
        >
        <TouchableOpacity>
          <Text style={{color:"#0F71E9"}}>{selectedLanguage}</Text>
        </TouchableOpacity>
          
        </RNPickerSelect>
    </View>
   

  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#D2D3D8',
  },
  button:{
    flexDirection: 'row',
    borderWidth: 0.5,
    borderColor: '#D2D3D8',
    backgroundColor: '#F8F8F8'
  },
  text:{
    fontSize: 18,
    padding: 9,
    fontWeight: '600',
    color: "#525252"
  }, 
  android:{
    justifyContent: 'center',
    alignItems: "center",
  }
})

export default PickerModal