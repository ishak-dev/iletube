import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Video, ResizeMode } from 'expo-av';
import VideoPlayer from 'expo-video-player';

import { useState, createRef } from 'react';
import * as FileSystem from 'expo-file-system'
import * as Permissions from 'expo-permissions';
import AsyncStorage from '@react-native-async-storage/async-storage'

type Props = {
    videoUrl:string,
    titleVideo:string,
    descriptionVideo:string,
}

export async function downloadVideo(videoUrl:string,titleVideo:string,descriptionVideo:string){
    const [filePath, setFilePath] = useState<string>('')
    console.log('video to download',videoUrl)
        // Request permission to access external storage (required for Android)
        const { status } = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);
        if (status !== 'granted') {
            console.log('Permission denied');
            return;
        }

        try {
            // Create a unique file name for the downloaded video
            const fileName = FileSystem.documentDirectory + 'downloaded_video.mp4';
//AsyncStorage.clear()
            // Download the video and get the download result
            const downloadResult = await FileSystem.downloadAsync(videoUrl, fileName);

            // Check if the download was successful
            if (downloadResult.status === 200) {
                console.log('Video downloaded successfully:', downloadResult.uri);
                setFilePath(fileName)
                AsyncStorage.setItem(titleVideo, JSON.stringify({sources:fileName,title:titleVideo,description:descriptionVideo}))
                
            } else {
                console.log('Video download failed');
            }
        } catch (error) {
            console.log('Error downloading video:', error);
        }
    
    

    //downloadVideo('https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4')
    return filePath
}