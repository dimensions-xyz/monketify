import React, { Component } from "react";
import { TouchableOpacity } from "react-native";
import { COLORS } from "../../constants/theme";
import { IconPlayChild, IconPauseChild } from "../assets/svg";
import { inject } from "mobx-react";
import TrackPlayer from "react-native-track-player";

@inject('songStateStore')
export default class PlayChildButton extends Component {

    render() {

        return (
            this.props.currentTrackId === this.props.songStateStore.currentTrack.id && this.props.songStateStore.isPlaying ?
                <TouchableOpacity style={this.props.style} onPress={() => TrackPlayer.pause()}>

                    <IconPauseChild
                        width={this.props.iconSize}
                        height={this.props.iconSize}
                        fill={COLORS.white}
                    />

                </TouchableOpacity> :

                <TouchableOpacity style={this.props.style} onPress={() => TrackPlayer.play()}>

                    <IconPlayChild
                        width={this.props.iconSize}
                        height={this.props.iconSize}
                        fill={COLORS.white}
                    />

                </TouchableOpacity>
        );

    }

}