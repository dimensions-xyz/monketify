import { observable, makeObservable, computed, action, flow, get } from "mobx";
import TrackPlayer from 'react-native-track-player';

class SongStateStore {

    @observable
    currentTrack = {
        id: "",
        title: "",
        artist: "",
        artwork: "",
    }

    @observable
    isPlaying: ""
    
    constructor() {
        makeObservable(this)
    }

    // Aktif müzik bilgilerini return eder
    @action
    getTrackState = () => {
        return this.currentTrack;
    };

    // Müzik bilgilerini getirir
    @action
    updateTrackState = state => {
        this.currentTrack = state
    };

    // Müziğin çalma durumunu return eder
    @action
    getIsPlaying = () => {
        return this.isPlaying
    }

    // Aktif olarak müziğin çalıp çalmama durumunu getirir
    @action
    updateIsPlaying = isPlaying => {
        this.isPlaying = isPlaying
    }

}

export default new SongStateStore()