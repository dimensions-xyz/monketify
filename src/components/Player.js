import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../constants/theme';
import { IconChevronBack, IconChevronForward } from '../assets/svg';
import TrackPlayer, { useProgress } from 'react-native-track-player';
import PlayButton from './PlayButton';
import { SongPosition } from '.';

const Player = () => {

    const iconSize = 36

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

                    <PlayButton iconSize={iconSize} />

                    <TouchableOpacity onPress={() => TrackPlayer.skipToNext()}>
                        <IconChevronForward
                            width={iconSize}
                            height={iconSize}
                            fill={COLORS.white}
                        />
                    </TouchableOpacity>

                </View>

                <SongPosition style={{
                    marginTop: 2,
                    color: COLORS.white,
                    ...FONTS.title2
                }} />

            </View>

        </View>
    );

}

export default Player;