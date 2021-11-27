import React from 'react';
import { TouchableOpacity } from 'react-native';
import TrackPlayer from 'react-native-track-player';
import { IconPlay, IconPause } from '../assets/svg';
import { COLORS } from '../../constants/theme';

// Müziğin durumuna göre play butonu render edilir
const PlayButton = ({ iconSize, style }) => {

    const isplaying = false

    return (
        isplaying ?
            <TouchableOpacity style={style} onPress={() => TrackPlayer.pause()}>
                <IconPause
                    width={iconSize}
                    height={iconSize}
                    fill={COLORS.white}
                />
            </TouchableOpacity> :

            <TouchableOpacity style={style} onPress={() => TrackPlayer.play()}>
                <IconPlay
                    width={iconSize}
                    height={iconSize}
                    fill={COLORS.white}
                />
            </TouchableOpacity>
    );

}

export default PlayButton;