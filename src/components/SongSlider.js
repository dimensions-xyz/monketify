import React from "react";
import Slider from "@react-native-community/slider";
import TrackPlayer, { useProgress } from "react-native-track-player";
import { COLORS } from "../../constants/theme";

const SongSlider = () => {

    // şarkının anlık süresi ve sabit süresi
    const { duration, position } = useProgress();

    // şarkının süresini float değerini dakika ve saniye olarak formatlar
    let minuteDuration = Math.floor(duration / 60)
    let secondsDuration = Math.round(duration % 60);

    // süredeki saniye eğer 0dan küçükse yanına 0 ekler
    let secondsDurationZero = secondsDuration < 10 ? 0 : ""

    // şarkının süresi dakika ve saniye olarak gösterilir
    let convertedDuration = minuteDuration + ":" + secondsDurationZero + secondsDuration

    return (
        <Slider style={{
            width: '100%'
        }}
            onValueChange={value => TrackPlayer.seekTo(value)}
            value={position}
            minimumValue={0}
            maximumValue={duration}
            step={1}
            minimumTrackTintColor={COLORS.white}
            thumbTintColor={COLORS.white}
            maximumTrackTintColor={COLORS.white}
        />
    );

}

export default SongSlider;