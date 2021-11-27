import React from 'react';
import { View, Text, StatusBar, Image, ImageBackground } from 'react-native';
import { COLORS, FONTS } from '../../constants/theme';
import { Player } from '../components';
import TrackPlayer, { useProgress } from "react-native-track-player";
import Slider from '@react-native-community/slider';

const CurrentSongScreen = () => {

    // şarkının anlık süresi ve sabit süresi
    const { position, duration } = useProgress();

    // şarkının anlık float değerini dakika ve saniye olarak formatlar
    let minutes = Math.floor(position / 60);
    let seconds = Math.round(position % 60);

    // saniye eğer 0dan küçükse yanına 0 ekler
    let secondsZero = seconds < 10 ? 0 : ""

    // dakika ve saniye anlık olarak gösterilir
    let convertedPosition = minutes + ":" + secondsZero + seconds

    // şarkının süresini float değerini dakika ve saniye olarak formatlar
    let minuteDuration = Math.floor(duration / 60)
    let secondsDuration = Math.round(duration % 60);

    // süredeki saniye eğer 0dan küçükse yanına 0 ekler
    let secondsDurationZero = secondsDuration < 10  ? 0 : ""

    // şarkının süresi dakika ve saniye olarak gösterilir
    let convertedDuration = minuteDuration + ":" + secondsDurationZero + secondsDuration

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
                    width: '75%'
                }}>

                    <Image style={{
                        width: '100%',
                        height: 300,
                        borderRadius: 20,
                        backgroundColor: 'purple',
                    }}
                        source={banner}
                    />

                    <View style={{
                        marginVertical: 10,
                        alignItems: 'center'
                    }}>

                        <Text style={{
                            ...FONTS.title2,
                            color: COLORS.white
                        }}
                            numberOfLines={1}
                        >Circles</Text>

                        <Text style={{
                            ...FONTS.desc,
                            color: COLORS.white
                        }}
                            numberOfLines={1}
                        >Eden</Text>

                    </View>

                    <Slider
                        onValueChange={value => TrackPlayer.seekTo(value)}
                        value={position}
                        minimumValue={0}
                        maximumValue={duration}
                        minimumTrackTintColor={COLORS.white}
                        thumbTintColor={COLORS.white}
                        maximumTrackTintColor={COLORS.white}
                    />

                    <View style={{
                        marginHorizontal: 15,
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}>

                        <Text style={{
                            fontSize: 14,
                            color: COLORS.white
                        }}>{convertedPosition}</Text>

                        <Text style={{
                            fontSize: 14,
                            color: COLORS.white
                        }}>{convertedDuration}</Text>

                    </View>

                </View>

            </ImageBackground>

            <Player />

        </View>
    );

}

export default CurrentSongScreen;