import React from "react";
import { Text } from "react-native";
import { useProgress } from "react-native-track-player";

const SongPosition = ({ style }) => {

    // şarkının anlık süresi ve sabit süresi
    const { position, duration } = useProgress();

    // şarkının anlık float değerini dakika ve saniye olarak formatlar
    let minutes = Math.floor(position / 60);
    let seconds = Math.round(position % 60);

    // saniye eğer 10dan küçükse yanına 0 ekler
    let secondsZero = seconds < 10 ? 0 : ""

    // dakika ve saniye anlık olarak gösterilir
    let convertedPosition = minutes + ":" + secondsZero + seconds

    return <Text style={style}>{convertedPosition}</Text>

}

export default SongPosition;