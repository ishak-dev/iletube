import { Text, View,TouchableOpacity } from 'react-native';
import { Video, ResizeMode } from 'expo-av';
import VideoPlayer from 'expo-video-player';
import { styles } from './style';
import {createRef,useCallback,useState } from 'react';

type Props = {
  navigation: any,
  status: string,
  title: string;
  description: string;
  onPress: any;
  source: string;
}

export default function SingleVideoCard({ status, title, description, onPress, source }: Props) {
  const videoRef: any = createRef<Video>();
  const [playVideo, setPlayVideo] = useState(true);
  const [showControls, setShowControls] = useState<boolean>(false)

  const toggleControls = useCallback(()=>
  {setShowControls(false)},[]
  )


  function setThumb() {
    setTimeout(() => {
      setPlayVideo(false)
    }, 500);
    return videoRef.current.playFromPositionAsync(2000)
  }

  
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.cardContainer}>
       <TouchableOpacity onPress={()=>toggleControls()}>
       <VideoPlayer 
          style={styles.video}
          defaultControlsVisible={showControls}
          videoProps={{
            ref: videoRef,
            shouldPlay: status == title ? true : playVideo,
            usePoster: true,
            isMuted: true,
            onLoad: setThumb,
            isLooping: true,
            resizeMode: ResizeMode.CONTAIN,
            source: {
              uri: source,
            },
          }}
        />
       </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View></TouchableOpacity>
  );

}

