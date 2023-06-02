import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import React, { Component,useState } from 'react';
import { useOffline } from '../store';

import { styles } from './style';

import { SearchBar } from '@rneui/themed';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage'

const logo = require('../../../images/logoYT.png');

type Props = {
    state?: any;
    descriptors?: any;
    navigation?: any;
    setChangeOffline:any;
    changeOffline: any;
}

type State = {
    searchActive: any,
    search: string,
}

export const Header:any = ({navigation,changeOffline}:Props)=>{
    const [searchActive,setSearchActive] = useState(false)
    const [search, setSearch] = useState('')
   


    function handleNavigation() {
        navigation.navigate('Offline')
    }

    const onSearchPress = () => {
        setSearchActive((prevState:boolean)=>!prevState)
        
        console.log('pressed')
    }
    const updateSearch = (newText:string) => {
        setSearch(newText)
      } 

    const onOfflinePress = useOffline((state:any)=>state.setOfflineMode)
    
      const {offlineMode,setOfflineData}:any = useOffline()


        return (
            <View style={styles.header}>
                <Image source={logo} style={styles.logo} />
                <SearchBar onChangeText={newText => updateSearch(newText)} value={search}placeholder='Search...' containerStyle={{ backgroundColor: 'white', borderTopWidth: 0, borderBottomWidth: 0, width: '50%' ,height:30}} inputContainerStyle={{ backgroundColor: 'transparent', height: 20 }} inputStyle={{ maxHeight: 30 }}/>
                <Text style={[styles.headerBtn, styles.offlineBtn]} onPress={onOfflinePress}>
                    {offlineMode ? "Online" : 'Offline'}
                </Text>
            </View>

        );
    
}

