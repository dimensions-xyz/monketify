import TrackPlayer from "react-native-track-player";
import CurrentSoundStore from "../store/CurrentSoundStore";

export default async function(){

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

        // MOBXte tutulacak
        console.log("Track changed to " + getTrack);

    });

};