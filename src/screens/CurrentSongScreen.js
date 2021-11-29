import React from 'react';
import { View, Text, StatusBar, Image, ImageBackground } from 'react-native';
import { COLORS, FONTS } from '../../constants/theme';
import { Header, Player, SongSlider, SongPosition, SongDuration } from '../components';
import TrackPlayer, { useProgress } from "react-native-track-player";
import Slider from '@react-native-community/slider';
import PlayButton from '../components/PlayButton';
import { IconSkipBack, IconSkipForward } from '../assets/svg';
import { TouchableOpacity } from 'react-native-gesture-handler';

const CurrentSongScreen = () => {

    const banner = require('../images/banner-circles.jpg');

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
                blurRadius={10}
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
                        >Title</Text>

                        <Text style={{
                            ...FONTS.desc,
                            color: COLORS.white
                        }}
                            numberOfLines={1}
                        >Artist</Text>

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

export default CurrentSongScreen;