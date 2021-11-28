import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import TrackPlayer, { State } from 'react-native-track-player';
import { IconPlay, IconPause } from '../assets/svg';
import { COLORS } from '../../constants/theme';
import SongStateStore from '../store/SongStateStore';
import { inject } from 'mobx-react';
import { Text } from 'react-native';
// Müziğin durumuna göre play butonu aktif olarak render edilir
@inject('songStateStore')
export default class PlayButton extends Component {

    render() {

        return (
            this.props.songStateStore.isPlaying ?
                <TouchableOpacity style={this.props.style} onPress={() => TrackPlayer.pause()}>

                    <IconPause
                        width={this.props.iconSize}
                        height={this.props.iconSize}
                        fill={COLORS.white}
                    />

                </TouchableOpacity> :

                <TouchableOpacity style={this.props.style} onPress={() => TrackPlayer.play()}>

                    <IconPlay
                        width={this.props.iconSize}
                        height={this.props.iconSize}
                        fill={COLORS.white}
                    />

                </TouchableOpacity>
        );

    }

}