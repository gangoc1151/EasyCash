import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image,
  Dimensions,
  TextInput,
  Animated,
  useWindowDimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import CashbackHistory from '../../Components/CashBackComponent/CashbackHistory';
import ShoppingHistory from '../../Components/CashBackComponent/ShoppingHistory';
import WithdrawHistory from '../../Components/CashBackComponent/WithdrawHistory';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
//https://github.com/ptomasroos/react-native-scrollable-tab-view/issues/1069
//https://medium.com/@linjunghsuan/implementing-a-collapsible-header-with-react-native-tab-view-24f15a685e07




const History = () => {
    const layout = useWindowDimensions();
    const [index, setIndex] = useState(0);
    const [routes] = useState([
      { key: 'first', title: 'Lịch sử hoàn tiền' },
      { key: 'second', title: 'Lịch sử rút tiền' },
      { key: 'third', title: 'Lịch sử mua sắm' },
    ]);
  
    const renderScene = SceneMap({
      first: CashbackHistory,
      second: WithdrawHistory,
      third: ShoppingHistory
    });
    const renderTabBar = (props) =>{
      const inputRange = props.navigationState.routes.map((x, i) => i);
      return (
        <View style={styles.tabBar}>
          {props.navigationState.routes.map((route, i) => {
            const opacity = props.position.interpolate({
              inputRange,
              outputRange: inputRange.map((inputIndex) =>
                inputIndex === i ? 1 : 0.5
              ),
            });
    
            return (
              <TouchableOpacity key={i}
                style={index === i ? [styles.tabItem, {borderBottomColor: '#FE4E4E',}]: styles.tabItem }
                onPress={() => setIndex(i)}>
                <Animated.Text style={{ opacity }}>{route.title}</Animated.Text>
              </TouchableOpacity>
            );
          })}
        </View>
      );
    
    }
    return(
            <TabView
                navigationState={{ index, routes }}
                    renderScene={renderScene}
                    onIndexChange={setIndex}
                    renderTabBar={renderTabBar}
                    initialLayout={{ width: layout.width }}
                    style={{marginTop: 5}}
            />
        
      
    )

}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',

  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomColor: '#D1D1D1',
    borderBottomWidth: 1,
    backgroundColor: '#fff'
  },
})

export default History