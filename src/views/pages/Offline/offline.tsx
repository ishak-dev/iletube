import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Video, ResizeMode } from 'expo-av';
import VideoPlayer from 'expo-video-player';
import { styles } from './style';
import { useState, createRef } from 'react';
import * as FileSystem from 'expo-file-system'
import * as Permissions from 'expo-permissions';

type Props = {}

export default function Offline() {
    const [filePath, setFilePath] = useState<string>('')

    const downloadVideo = async (videoUrl: any) => {
        // Request permission to access external storage (required for Android)
        const { status } = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);
        if (status !== 'granted') {
            console.log('Permission denied');
            return;
        }

        try {
            // Create a unique file name for the downloaded video
            const fileName = FileSystem.documentDirectory + 'downloaded_video.mp4';

            // Download the video and get the download result
            const downloadResult = await FileSystem.downloadAsync(videoUrl, fileName);

            // Check if the download was successful
            if (downloadResult.status === 200) {
                console.log('Video downloaded successfully:', downloadResult.uri);
                setFilePath(fileName)
            } else {
                console.log('Video download failed');
            }
        } catch (error) {
            console.log('Error downloading video:', error);
        }
    };


    //downloadVideo('https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4')

    const videoRef: any = createRef<Video>();


    return (
        <View style={styles.offlineContainer}>
            <Text>Offline mode</Text>
            <VideoPlayer

                videoProps={{
                    ref: videoRef,
                    usePoster: true,
                    isMuted: true,
                    useNativeControls: false,
                    isLooping: true,
                    resizeMode: ResizeMode.CONTAIN,
                    source: {
                        uri: filePath,
                    },
                }}
            />
        </View>

    );
}