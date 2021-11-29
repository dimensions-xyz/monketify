import React from "react";
import Slider from "@react-native-community/slider";
import TrackPlayer, { useProgress } from "react-native-track-player";
import { COLORS } from "../../constants/theme";

const SongSlider = () => {

    // Şarkının pozisyonu ve süresi
    const { duration, position } = useProgress();

    // Şarkının süresini float değerini dakika ve saniye olarak formatlar
    let minuteDuration = Math.floor(duration / 60)
    let secondsDuration = Math.round(duration % 60);

    return (
        <Slider style={{
            width: '100%'
        }}
            onValueChange={value => TrackPlayer.seekTo(value)}
            step={1}
            minimumValue={0}
            value={position}
            maximumValue={duration}
            minimumTrackTintColor={COLORS.white}
            thumbTintColor={COLORS.white}
            maximumTrackTintColor={COLORS.white}
        />
    );

}

export default SongSlider;