import TrackPlayer, { State } from "react-native-track-player";
import SongStateStore from "../store/SongStateStore";

async function trackPlayerServices() {

    TrackPlayer.addEventListener('remote-play', () => { });

    TrackPlayer.addEventListener('remote-pause', () => { });

    TrackPlayer.addEventListener('remote-stop', () => { });

    TrackPlayer.addEventListener('playback-track-changed', async () => {

        // Geçilen şarkının indexini alır
        let getCurrentTrackIndex = await TrackPlayer.getCurrentTrack();

        // Geçilen şarkının indexinden track bilgilerini alır
        let getTrack = await TrackPlayer.getTrack(getCurrentTrackIndex);

        const currentTrack = {
            id: getTrack.id,
            title: getTrack.title,
            artist: getTrack.artist,
            artwork: getTrack.artwork,
        }

        // Geçilen şarkıyı store'a aktarır
        SongStateStore.updateTrackState(currentTrack)

    });

    TrackPlayer.addEventListener('playback-state', (state) => {

        const isPlaying = (state.state === 3 || state.state === 6 ? true : false);

        // Şarkının oynatılıp oynatılmama durumunu store'a aktarır
        SongStateStore.updateIsPlaying(isPlaying);

    });

};

export default trackPlayerServices;