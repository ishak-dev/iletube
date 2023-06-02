import React, { useState } from 'react';
import { View } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './pages/Homepage/home';
import Offline from './pages/Offline/offline';
import { Header } from './components/Header/header';
import VideoWindow from './pages/VideoWindow/videoWindow';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function ViewIndex() {

    const [changeOffline, setChangeOffline] = useState<boolean>(false)
    
  return (
    <NavigationContainer>
        
      <View style={{ flex: 1,backgroundColor:'white'}}>
       <Header setChangeOffline={setChangeOffline} changeOffline={changeOffline}/>
        <Stack.Navigator screenOptions={{headerStyle:{backgroundColor:'white'}}} >
            <Stack.Screen name='Home'component={Home} />
            <Stack.Screen name="Offline" component={Offline}  />
            <Stack.Screen name="VideoWindow"  component={VideoWindow} />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
}

