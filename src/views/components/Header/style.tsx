import { color } from '@rneui/base';
import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    logo: {
        width: 100,
        height: 45,
    
    },

    header: {
       width: '100%',
       height:50,
       
      position:'relative',
      flexDirection: 'row',
        
    },
  
    headerBtn: {
        width: '20%',
        padding: 10,
        textAlign: 'center',
        marginTop: 'auto',
        marginBottom:'auto',
        justifyContent: 'center',
        borderRadius: 12,
        overflow:'hidden',
    },
    onlineBtn: {
        
        backgroundColor:'#f5f5f5'
    },
    offlineBtn: {marginLeft:'auto',
        
        width: '20%',
        backgroundColor:'#a8a8a8',
        color:'white',
    }

})