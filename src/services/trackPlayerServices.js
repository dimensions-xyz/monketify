import TrackPlayer, { State } from "react-native-track-player";
import SongStateStore from "../store/SongStateStore";

async function trackPlayerServices() {

    TrackPlayer.addEventListener('remote-play', () => {
        TrackPlayer.play()
        console.log("Track is playing now.");
    });

    TrackPlayer.addEventListener('remote-pause', () => {
        TrackPlayer.pause()
        console.log("Track is paused!");
    });

    TrackPlayer.addEventListener('remote-stop', () => {
        TrackPlayer.destroy()
        console.log("Track is destroyed!");
    });

    TrackPlayer.addEventListener('playback-track-changed', async () => {

        let getCurrentTrackIndex = await TrackPlayer.getCurrentTrack();
        let getTrack = await TrackPlayer.getTrack(getCurrentTrackIndex);

        const currentTrack = {
            id: getTrack.id,
            title: getTrack.title,
            artist: getTrack.artist,
            artwork: getTrack.artwork,
        }

        SongStateStore.updateTrackState(currentTrack)

    });

    TrackPlayer.addEventListener('playback-state', (state) => {

        const isPlaying = (state.state === 3 ? true : false)
        SongStateStore.updateIsPlaying(isPlaying);

    });

};

export default trackPlayerServices;