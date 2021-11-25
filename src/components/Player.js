import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../constants/theme';
import { IconChevronBack, IconPlay, IconPause, IconChevronForward } from '../assets/svg';

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
                >To Build A Home</Text>

                <Text style={{
                    color: COLORS.white,
                    opacity: .5,
                    ...FONTS.desc,
                }}
                    numberOfLines={1}
                >The Cinematic Orchestra</Text>

            </View>

            <View style={{
                flex: 1,
                alignItems: 'center',
            }}>

                <View style={{
                    flexDirection: 'row',
                }}>

                    <TouchableOpacity>
                        <IconChevronBack
                            width={iconSize}
                            height={iconSize}
                            fill={COLORS.white}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <IconPause
                            width={iconSize}
                            height={iconSize}
                            fill={COLORS.white}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity>
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
                }}>04:20</Text>

            </View>

        </View>
    );

}

export default Player;