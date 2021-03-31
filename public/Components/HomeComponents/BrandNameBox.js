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
  Image,
  TouchableOpacity
} from 'react-native';
import { DataTable } from 'react-native-paper';
//https://callstack.github.io/react-native-paper/data-table-cell.html
const BrandNameBox = ({data, style}) => {
    return (
        <View style={style}>
            <FlatList data={data} 
                    keyExtractor = {(item, index) => 'key' + index}
                    pagingEnabled
                    scrollEnabled={false}
                    snapToAlignment= 'center'
                    scrollEventThrottle ={16}
                    decelerationRate = {'fast'}
                    renderItem={({item}) => {
                   
                    return (
                   <DataTable> 
                        <DataTable.Row> 
                            <DataTable.Cell>
                                <View style={styles.image} >
                                    <Image  source={item.image}/>
                                    <Text style={styles.text}>{item.title}</Text>
                                </View>
                            </DataTable.Cell>
                        </DataTable.Row>
                    </DataTable>
                   

                    )
                }} />
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // borderTopColor: '#DCDCDC',
        // borderTopWidth: 0.5,
        // borderRadius: 10,
        // borderLeftColor: '#DCDCDC'
    },
    text:{
        color: '#FE4E4E',
        letterSpacing: 0,
        fontSize: 14,
        fontWeight: '500'
    }
})

export default BrandNameBox