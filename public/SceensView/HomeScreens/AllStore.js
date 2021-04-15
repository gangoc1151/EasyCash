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
  FlatList,
  Image
} from 'react-native';
import data from '../../Utils/data/data'
import { DataTable } from 'react-native-paper';
const AllStore = ({navigation}) => {
    return (
        <View style={{backgroundColor: '#fff', flex: 1}}>
            <FlatList 
                data={data.BrandName}
                keyExtractor={(key, index) => index}
                renderItem={({item}) =>{
                    return(
                        <DataTable> 
                        <DataTable.Row> 
                                <View style={styles.image} >
                                    <Image  source={item.image} style={{width: 110}}/>
                                    <View style={{alignItems: 'flex-end'}}>
                                        <Text style={{fontSize: 15}}>{item.status}</Text>
                                        <Text style={styles.text}>{item.title}</Text>
                                    </View>
                                   
                                </View>
                          
                        </DataTable.Row>
                    </DataTable>
                    )
                }}
            />
            
        </View>
    )
}

const styles = StyleSheet.create({
    image:{
       flex: 1,
        flexDirection: 'row', 
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 4
    },
    text: {
        color:'#FE4E4E',
        fontSize: 13
    }
})

export default AllStore;