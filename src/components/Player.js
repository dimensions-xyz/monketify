import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../constants/theme';
import { IconChevronBack, IconChevronForward } from '../assets/svg';
import { PlayButton, SongPosition } from '.';
import TrackPlayer from 'react-native-track-player';
import { inject, observer } from 'mobx-react';

@inject('songStateStore')
@observer
export default class Player extends Component {

    render() {

        // Store dan alınan veriler
        const banner = this.props.songStateStore.currentTrack.artwork
        const title = this.props.songStateStore.currentTrack.title
        const artist = this.props.songStateStore.currentTrack.artist

        const iconSize = 36

        return (
            <View style={{
                width: '100%',
                height: 90,
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: COLORS.paleGray,
            }}>

                {/* Song Banner */}
                <Image style={{
                    width: 42,
                    height: 42,
                    marginStart: 20,
                    borderRadius: 50,
                }}
                    source={banner}
                />

                {/* Container - Title & Artist */}
                <View style={{
                    marginStart: 30,
                    width: SIZES.width / 2.5,
                }}>

                    {/* Song Title */}
                    <Text style={{
                        color: COLORS.white,
                        ...FONTS.title2,
                    }}
                        numberOfLines={1}
                    >{title}</Text>

                    {/* Song Artist */}
                    <Text style={{
                        color: COLORS.white,
                        opacity: .5,
                        ...FONTS.desc,
                    }}
                        numberOfLines={1}
                    >{artist}</Text>

                </View>

                {/* Container - Button Container & Song Position */}
                <View style={{
                    flex: 1,
                    alignItems: 'center',
                }}>

                    {/* Button Container */}
                    <View style={{
                        flexDirection: 'row',
                    }}>

                        {/* Button: Skip To Previous */}
                        <TouchableOpacity onPress={async () => {
                            await TrackPlayer.skipToPrevious();
                        }}>
                            <IconChevronBack
                                width={iconSize}
                                height={iconSize}
                                fill={COLORS.white}
                            />
                        </TouchableOpacity>

                        {/* Button: Play / Pause */}
                        <PlayButton iconSize={iconSize} />

                        {/* Button: Skip To Next */}
                        <TouchableOpacity onPress={async () => {
                            await TrackPlayer.skipToNext();
                        }}>
                            <IconChevronForward
                                width={iconSize}
                                height={iconSize}
                                fill={COLORS.white}
                            />
                        </TouchableOpacity>

                    </View>

                    {/* Song Position */}
                    <SongPosition style={{
                        marginTop: 2,
                        color: COLORS.white,
                        ...FONTS.title2
                    }} />

                </View>

            </View>
        );

    }

}