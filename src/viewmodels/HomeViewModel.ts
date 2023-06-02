import axios from "axios"
import { General,Video } from "../models/GeneralMode"


const baseUrl = 'https://admirsaheta.com/movies/'



export const HomeViewModel = async(): Promise<General> => {
    
    const response = await axios.get<General>(baseUrl)
    //console.log('response data.....',response.data)
    return response.data;
}


export const HomeViewModel2 = (): General => {
    let data:General={name:'',videos:[]}
    axios.get<General>(baseUrl).then(response=>{data=response.data})
    return data;
}

/* export const VideoListAll = async(): Promise<Videos> => {

    let data:Videos={description:'',sources:'',subtitle:'',thumb:'',title:''}
    axios.get<Videos>(baseUrl).then(response=>{data=response.data})
    console.log('Data from Api', data)
    return data;
} */


export const VideoListAll2 = async(): Promise<Array<Video>> => {
    
    const response = await axios.get<General>(baseUrl)
    //console.log('response data.....',response.data)
    return response.data.videos;
}