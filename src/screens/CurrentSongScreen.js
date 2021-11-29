import React, { Component } from 'react';
import { View, Text, StatusBar, Image, ImageBackground } from 'react-native';
import { COLORS, FONTS } from '../../constants/theme';
import { Header, Player, SongSlider, SongPosition, SongDuration, PlayButton } from '../components';
import { IconSkipBack, IconSkipForward } from '../assets/svg';
import { TouchableOpacity } from 'react-native-gesture-handler';
import TrackPlayer from 'react-native-track-player';
import { inject, observer } from 'mobx-react';

@inject('songStateStore')
@observer
export default class CurrentSongScreen extends Component {

    render() {

        // Store dan alınan veriler
        const banner = this.props.songStateStore.currentTrack.artwork
        const title = this.props.songStateStore.currentTrack.title
        const artist = this.props.songStateStore.currentTrack.artist

        return (
            <View style={{
                flex: 1
            }}>

                <StatusBar
                    barStyle={'light-content'}
                    translucent
                    backgroundColor='transparent'
                />

                {/* Song Item - Main Container */}
                <ImageBackground style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                    source={banner}
                    blurRadius={50}
                >

                    {/* Song Item - Container */}
                    <View style={{
                        width: '75%',
                        alignItems: 'center',
                    }}>

                        {/* Banner */}
                        <Image style={{
                            width: '100%',
                            height: 280,
                            borderRadius: 20,
                            backgroundColor: 'purple',
                        }}
                            source={banner}
                        />

                        {/* Container - Title & Artist */}
                        <View style={{
                            width: '100%',
                            marginVertical: 15,
                            alignItems: 'center'
                        }}>

                            {/* Song Title */}
                            <Text style={{
                                ...FONTS.title2,
                                color: COLORS.white
                            }}
                                numberOfLines={1}
                            >{title}</Text>

                            {/* Song Artist */}
                            <Text style={{
                                ...FONTS.desc,
                                color: COLORS.white
                            }}
                                numberOfLines={1}
                            >{artist}</Text>

                        </View>

                        {/* Slider */}
                        <SongSlider />

                        {/* Container - Song position & Song duration */}
                        <View style={{
                            width: '90%',
                            marginHorizontal: 15,
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }}>

                            <SongPosition style={{
                                fontSize: 14,
                                color: COLORS.white
                            }} />

                            <SongDuration style={{
                                fontSize: 14,
                                color: COLORS.white
                            }} />

                        </View>

                        {/* Button Container */}
                        <View style={{
                            width: '100%',
                            marginTop: 30,
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            alignItems: 'center'
                        }}>

                            {/* Button: Skip To Previous */}
                            <TouchableOpacity onPress={() => TrackPlayer.skipToPrevious()}>
                                <IconSkipBack
                                    width={32}
                                    height={32}
                                    fill={COLORS.white}
                                />
                            </TouchableOpacity>

                            {/* Button: Play / Pause */}
                            <PlayButton iconSize={43} />

                            {/* Button: Skip To Next */}
                            <TouchableOpacity onPress={() => TrackPlayer.skipToNext()}>
                                <IconSkipForward
                                    width={32}
                                    height={32}
                                    fill={COLORS.white}
                                />
                            </TouchableOpacity>

                        </View>

                    </View>

                </ImageBackground>

                <Player />

            </View>
        );

    }

}