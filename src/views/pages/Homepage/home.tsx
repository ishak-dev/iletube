import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, FlatList, SafeAreaView, Dimensions } from 'react-native';
import SingleVideoCard from '../../components/Homepage/SingleCard/singleVideoCard';
import { styles } from './style';
import { useOffline} from '../../components/store';
import { SearchBar } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import { HomeViewModel, HomeViewModel2, VideoListAll2 } from '../../../viewmodels/HomeViewModel';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Video } from '../../../models/GeneralMode';
import AsyncStorage from '@react-native-async-storage/async-storage'
const logo = require('../../../images/logoYT.png')


const Home = ({ navigation}: any) => {
  const [data, setData] = useState<Array<Video>>();
  const [offlineData, setOfflineData] = useState<Array<Video>>();
  const [status, setStatus] = useState<any>();
  const {offlineMode}:any = useOffline() 
  const onViewableItemsChanged = useCallback(({ viewableItems, changed }:any) => {
    setStatus(viewableItems[0].item.title)
  },[])
  //const offline = useOffline((state:any)=>state.offlineMode)


  useEffect(() => {
    async function getAllVideos() {
      setData((await VideoListAll2()))
    }
    async function getAllOfflineVideos(){
      let keys = await AsyncStorage.getAllKeys();
      let getOfflineData:any= [];
      
     console.log('keyevi',keys)
      for(let i=0;i<keys.length;i++){
        let storageData:any = await AsyncStorage.getItem(keys[i])
        getOfflineData.push(JSON.parse(storageData))
      }
      setOfflineData(getOfflineData)
    }
    
    //!offlineMode ? getAllVideos() : getAllOfflineVideos()
    getAllOfflineVideos()
    getAllVideos()
  }, [offlineMode])
  const viewabilityConfig = {
    waitForInteraction: true,
    itemVisiblePercentThreshold: 50,
  }
console.log('offline DAATA',offlineData)
  async function handleNavigation(title: string, description: string, source: string) {
    navigation.navigate('VideoWindow', { title, description, source,offlineMode});
  }


  return (
    <SafeAreaView style={styles.homepage}>
      <FlatList data={!offlineMode ? data : offlineData} initialNumToRender={3} maxToRenderPerBatch={2} renderItem={({ item }) =>
        <SingleVideoCard status={status} title={item.title} description={item.description} source={item.sources} navigation={navigation} onPress={() => handleNavigation(item.title, item.description, item.sources)} />}
        //keyExtractor ={item => item.id}
        viewabilityConfig={viewabilityConfig}
        onViewableItemsChanged={onViewableItemsChanged}
      />
    </SafeAreaView>
  );
}

export default Home