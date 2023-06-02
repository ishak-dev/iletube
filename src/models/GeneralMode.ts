

export interface General {
    name: string,
    videos: Array<Video>,

}

export interface Video {
    description: string;
    sources: string;
    subtitle: string;
    thumb: string;
    title: string;
}