import React, { Component } from "react";
import { TouchableOpacity } from "react-native";
import { COLORS } from "../../constants/theme";
import { IconPlayChild, IconPauseChild } from "../assets/svg";
import { inject, observer } from "mobx-react";
import TrackPlayer from "react-native-track-player";

@inject('songStateStore')
@observer
export default class PlayChildButton extends Component {

    render() {

        return (
            this.props.currentTrackId === this.props.songStateStore.currentTrack.id && this.props.songStateStore.isPlaying ?
                <TouchableOpacity activeOpacity={0.5} style={this.props.style} onPress={this.props.onPressPause}>

                    <IconPauseChild
                        width={this.props.iconSize}
                        height={this.props.iconSize}
                        fill={COLORS.white}
                    />

                </TouchableOpacity> :

                <TouchableOpacity activeOpacity={0.5} style={this.props.style} onPress={this.props.onPressPlay}>

                    <IconPlayChild
                        width={this.props.iconSize}
                        height={this.props.iconSize}
                        fill={COLORS.white}
                    />

                </TouchableOpacity>
        );

    }

}