import React, { Component, useEffect, useState } from 'react';
import { View, Text, StatusBar, FlatList, Image, TouchableOpacity } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../constants/theme';
import { Header, Player, PlayChildButton } from '../components'
import { IconPauseChild, IconPlayChild } from '../assets/svg';
import songs from '../data/songs';
import TrackPlayer from 'react-native-track-player';
import { inject } from 'mobx-react';

@inject('songStateStore')
export default class MainScreen extends Component {

    async componentDidMount() {
        try {
            await TrackPlayer.setupPlayer();
            await TrackPlayer.add(songs);
        } catch (e) {
            console.log("setUpTrackPlayer", e);
        }
    }

    render() {

        renderItem = ({ item }) => {

            return (
                <TouchableOpacity style={{
                    marginVertical: 10,
                    marginHorizontal: 20,
                    borderRadius: 8,
                    backgroundColor: COLORS.darkGray,
                    flexDirection: 'row',
                    alignItems: 'center',
                }}
                    onPress={async () => {
                        await TrackPlayer.play()
                        this.props.navigation.navigate("CurrentSongScreen")
                    }}
                    activeOpacity={.8}
                >

                    <Image style={{
                        height: 42,
                        width: 42,
                        marginStart: 12,
                        borderRadius: 50,
                    }}
                        source={item.artwork}
                    />

                    <View style={{
                        width: SIZES.width * 0.5,
                        marginStart: 20,
                        paddingVertical: 14,
                    }}>

                        <Text style={{
                            color: COLORS.white,
                            ...FONTS.title2,
                        }}
                            numberOfLines={1}
                        >{item.title}</Text>

                        <Text style={{
                            color: COLORS.gray,
                            ...FONTS.desc,
                        }}
                            numberOfLines={1}
                        >{item.artist}</Text>

                    </View>

                    <TouchableOpacity style={{
                        flex: 1,
                        justifyContent: 'center',
                    }}
                        onPress={() => {

                            TrackPlayer.play();

                        }}
                        activeOpacity={.5}
                    >

                        <PlayChildButton style={{
                            width: 24,
                            height: 24,
                            alignSelf: 'center'
                        }}
                            currentTrackId={item.id}
                        />

                    </TouchableOpacity>

                </TouchableOpacity>
            );

        }

        return (
            <View style={{
                flex: 1,
                backgroundColor: COLORS.black
            }}>

                <StatusBar
                    barStyle={'light-content'}
                    translucent
                    backgroundColor={'transparent'}
                />

                <Header title="Sounds" />

                <View style={{
                    flex: 1,
                }}>

                    <FlatList style={{ marginTop: 24 }}
                        data={songs}
                        renderItem={renderItem}
                        keyExtractor={(item, index) => index}
                    />

                </View>

                <Player />

            </View>
        );
    }

}