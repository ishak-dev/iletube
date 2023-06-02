import { StatusBar } from 'expo-status-bar';
import { LogBox, StyleSheet, Text, View } from 'react-native';
import Home from './src/views/pages/Homepage/home';
import ViewIndex from './src/views';


export default function App() {
  LogBox.ignoreAllLogs();
  return (
    <View style={styles.container}>
      
      <ViewIndex />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingVertical: 50,
    paddingHorizontal: 30,
    backgroundColor: '#fff',
    
  },
});


/* type VideoModel = {
  name: string,
  videos: Array<VideoObjectModel>,
}

type VideoObjectModel = {
  description: string,
}

function getVideos(): VideoModel {
    
} */