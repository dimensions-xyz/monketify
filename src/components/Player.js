import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../constants/theme';
import { IconChevronBack, IconPlay, IconPause, IconChevronForward } from '../assets/svg';
import TrackPlayer, { useProgress, State } from 'react-native-track-player';

const Player = () => {

    const iconSize = 36

    // şarkının anlık süresi ve sabit süresi
    const { position, duration } = useProgress();

    const isplaying = false

    // şarkının anlık float değerini dakika ve saniye olarak formatlar
    let minutes = Math.floor(position / 60);
    let seconds = Math.round(position % 60);

    // saniye eğer 0dan küçükse yanına 0 ekler
    let secondsZero = seconds < 10 ? 0 : ""

    // dakika ve saniye anlık olarak gösterilir
    let convertedPosition = minutes + ":" + secondsZero + seconds

    // Müziğin durumuna göre play butonu render edilir (child component)
    const isPlayingRender = () => {

        return (
            isplaying ?
                <TouchableOpacity onPress={() => TrackPlayer.pause()}>
                    <IconPause
                        width={iconSize}
                        height={iconSize}
                        fill={COLORS.white}
                    />
                </TouchableOpacity> :

                <TouchableOpacity onPress={() => TrackPlayer.play()}>
                    <IconPlay
                        width={iconSize}
                        height={iconSize}
                        fill={COLORS.white}
                    />
                </TouchableOpacity>
        );

    }

    return (
        <View style={{
            width: '100%',
            height: 90,
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: COLORS.paleGray,
        }}>

            <Image style={{
                width: 42,
                height: 42,
                marginStart: 20,
                borderRadius: 50,
            }}
                source={require("../images/banner-circles.jpg")}
            />

            <View style={{
                marginStart: 30,
                width: SIZES.width / 2.5,
            }}>

                <Text style={{
                    color: COLORS.white,
                    ...FONTS.title2,
                }}
                    numberOfLines={1}
                >title</Text>

                <Text style={{
                    color: COLORS.white,
                    opacity: .5,
                    ...FONTS.desc,
                }}
                    numberOfLines={1}
                >artist</Text>

            </View>

            <View style={{
                flex: 1,
                alignItems: 'center',
            }}>

                <View style={{
                    flexDirection: 'row',
                }}>

                    <TouchableOpacity onPress={() => TrackPlayer.skipToPrevious()}>
                        <IconChevronBack
                            width={iconSize}
                            height={iconSize}
                            fill={COLORS.white}
                        />
                    </TouchableOpacity>

                    {isPlayingRender()}

                    <TouchableOpacity onPress={() => TrackPlayer.skipToNext()}>
                        <IconChevronForward
                            width={iconSize}
                            height={iconSize}
                            fill={COLORS.white}
                        />
                    </TouchableOpacity>

                </View>

                <Text style={{
                    marginTop: 2,
                    ...FONTS.title2,
                    color: COLORS.white
                }}>{convertedPosition}</Text>

            </View>

        </View>
    );

}

export default Player;