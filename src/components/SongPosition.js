import React from "react";
import { Text } from "react-native";
import { useProgress } from "react-native-track-player";

const SongPosition = ({ style }) => {

    // Şarkının konumu
    const { position } = useProgress();

    // Şarkının konum float değerini dakika ve saniye olarak formatlar
    let minutes = Math.floor(position / 60);
    let seconds = Math.round(position % 60);

    // Saniye eğer 10dan küçükse yanına 0 ekler
    let secondsZero = seconds < 10 ? 0 : ""

    // Dakika ve saniye anlık olarak gösterilir
    let convertedPosition = minutes + ":" + secondsZero + seconds

    return <Text style={style}>{convertedPosition}</Text>

}

export default SongPosition;