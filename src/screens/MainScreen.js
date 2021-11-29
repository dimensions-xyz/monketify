import React, { Component } from 'react';
import { View, Text, StatusBar, FlatList, Image, TouchableOpacity } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../constants/theme';
import { Header, Player, PlayChildButton } from '../components'
import songs from '../data/songs';
import TrackPlayer, { RepeatMode } from 'react-native-track-player';
import { inject } from 'mobx-react';

@inject('songStateStore')
export default class MainScreen extends Component {

    async componentDidMount() {
        // TrackPlayer Setup
        try {
            await TrackPlayer.setupPlayer();
            await TrackPlayer.add(songs);
            TrackPlayer.setRepeatMode(RepeatMode.Queue);
        } catch (e) {
            console.log("setUpTrackPlayer", e);
        }
    }

    render() {

        renderItem = ({ item }) => {

            return (
                // Button: Song Info Container
                <TouchableOpacity style={{
                    marginVertical: 10,
                    marginHorizontal: 20,
                    borderRadius: 8,
                    backgroundColor: COLORS.darkGray,
                    flexDirection: 'row',
                    alignItems: 'center',
                }}
                    onPress={async () => {
                        await TrackPlayer.skip(item.id - 1);
                        await TrackPlayer.play();
                        this.props.navigation.navigate("CurrentSongScreen");
                    }}
                    activeOpacity={.8}
                >

                    {/* Song Banner */}
                    <Image style={{
                        height: 42,
                        width: 42,
                        marginStart: 12,
                        borderRadius: 50,
                    }}
                        source={item.artwork}
                    />

                    {/* Container - Title & Artist */}
                    <View style={{
                        width: SIZES.width * 0.5,
                        marginStart: 20,
                        paddingVertical: 14,
                    }}>

                        {/* Song Title */}
                        <Text style={{
                            color: COLORS.white,
                            ...FONTS.title2,
                        }}
                            numberOfLines={1}
                        >{item.title}</Text>

                        {/* Song Artist */}
                        <Text style={{
                            color: COLORS.gray,
                            ...FONTS.desc,
                        }}
                            numberOfLines={1}
                        >{item.artist}</Text>

                    </View>

                    {/* Button: Play / Pause (Child) */}
                    <PlayChildButton style={{
                        flex: 1,
                        width: 24,
                        height: 24,
                        justifyContent: 'center',
                        alignSelf: 'center'
                    }}
                        onPressPlay={async () => {
                            // Tıklanılan şarkıya geçer
                            await TrackPlayer.skip(item.id - 1);
                            await TrackPlayer.play();
                        }}
                        onPressPause={async () => {
                            await TrackPlayer.pause();
                        }}
                        currentTrackId={item.id}
                    />

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