import React, { Component } from 'react';
import { View, Text, StatusBar, Image, ImageBackground } from 'react-native';
import { COLORS, FONTS } from '../../constants/theme';
import { Header, Player, SongSlider, SongPosition, SongDuration, PlayButton } from '../components';
import { IconSkipBack, IconSkipForward } from '../assets/svg';
import { TouchableOpacity } from 'react-native-gesture-handler';
import TrackPlayer from 'react-native-track-player';
import { inject } from 'mobx-react';

@inject('songStateStore')
export default class CurrentSongScreen extends Component {

    render() {

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

                <ImageBackground style={{
                    flex: 1,
                    backgroundColor: COLORS.gray,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                    source={banner}
                    blurRadius={50}
                >

                    <View style={{
                        width: '75%',
                        marginTop: 40,
                        alignItems: 'center',
                    }}>

                        <Image style={{
                            width: '100%',
                            height: 280,
                            borderRadius: 20,
                            backgroundColor: 'purple',
                        }}
                            source={banner}
                        />

                        <View style={{
                            width: '100%',
                            marginVertical: 15,
                            alignItems: 'center'
                        }}>

                            <Text style={{
                                ...FONTS.title2,
                                color: COLORS.white
                            }}
                                numberOfLines={1}
                            >{title}</Text>

                            <Text style={{
                                ...FONTS.desc,
                                color: COLORS.white
                            }}
                                numberOfLines={1}
                            >{artist}</Text>

                        </View>

                        <SongSlider />

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

                        <View style={{
                            width: '100%',
                            marginTop: 30,
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            alignItems: 'center'
                        }}>

                            <TouchableOpacity onPress={() => TrackPlayer.skipToPrevious()}>
                                <IconSkipBack
                                    width={32}
                                    height={32}
                                    fill={COLORS.white}
                                />
                            </TouchableOpacity>

                            <PlayButton iconSize={43} />

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