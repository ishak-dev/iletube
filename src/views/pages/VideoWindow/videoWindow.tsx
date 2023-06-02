import React, { Component, createRef, useEffect } from "react";
import { StyleSheet, Text, View, Image } from 'react-native';
import VideoPlayer from "expo-video-player";
import { ResizeMode, Video } from "expo-av";
import { styles } from "./style";
import { NavigationState, useRoute } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
const ytImage = require('../../../images/YTimage.png');
import{ downloadVideo} from "../../components/Download/download";



type Props = {
    route: any;
}


export default function VideoWindow({route}:any){
    

    const videoRef = createRef<Video>();
    const sourceVideo = route.params.source;
    const titleVideo = route.params.title;
    const descriptionVideo = route.params.description;
    const offlineMode= route.params.offlineMode;
   /* useEffect(()=>{ handleDownload().then(res=>console.log(res))
    },[]) */
    async function handleDownload(){
        await downloadVideo(sourceVideo,titleVideo,descriptionVideo)
    }

    const handleVideoLoad = async () => {
        const video = videoRef.current;
        if (video) {
            await video.playAsync();
        }
    }
    console.log('OFFLINE MODE',offlineMode)

    offlineMode == false ? handleDownload().then(res=>res) : console.log('Nothing to download - Offline Mode')
        
        return (
            <View style={styles.container}>
                <VideoPlayer style={styles.video}
                videoProps={{
                    shouldPlay: true,
                    resizeMode: ResizeMode.CONTAIN,
                    source: {
                    uri: sourceVideo,
                    },
                }}
                />
                <Text>{titleVideo}</Text>
                <Text>{descriptionVideo}</Text>
            </View>
        );
    }





