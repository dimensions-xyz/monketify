import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import TrackPlayer from 'react-native-track-player';
import { IconPlay, IconPause } from '../assets/svg';
import { COLORS } from '../../constants/theme';
import SongStateStore from '../store/SongStateStore';
import { inject, observer } from 'mobx-react';

// Müziğin durumuna göre play butonu aktif olarak render edilir
@inject('songStateStore')
@observer
export default class PlayButton extends Component {

    render() {

        return (
            this.props.songStateStore.isPlaying ?
                <TouchableOpacity style={this.props.style} onPress={async () => await TrackPlayer.pause()}>

                    <IconPause
                        width={this.props.iconSize}
                        height={this.props.iconSize}
                        fill={COLORS.white}
                    />

                </TouchableOpacity> :

                <TouchableOpacity style={this.props.style} onPress={async () => await TrackPlayer.play()}>

                    <IconPlay
                        width={this.props.iconSize}
                        height={this.props.iconSize}
                        fill={COLORS.white}
                    />

                </TouchableOpacity>
        );

    }

}