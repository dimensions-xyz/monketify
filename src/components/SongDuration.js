import React from "react";
import { Text } from "react-native";
import { useProgress } from "react-native-track-player";

const SongDuration = ({ style }) => {

    // Şarkının sabit süresi
    const { duration } = useProgress();

    // Şarkının süresini float değerini dakika ve saniye olarak formatlar
    let minuteDuration = Math.floor(duration / 60)
    let secondsDuration = Math.round(duration % 60);

    // Süredeki saniye eğer 0dan küçükse yanına 0 ekler
    let secondsDurationZero = secondsDuration < 10 ? 0 : ""

    // Şarkının süresi dakika ve saniye olarak gösterilir
    let convertedDuration = minuteDuration + ":" + secondsDurationZero + secondsDuration

    return <Text style={style}>{convertedDuration}</Text>
}

export default SongDuration;