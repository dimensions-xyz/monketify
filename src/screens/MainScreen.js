import React from 'react';
import { View, Text, StatusBar, FlatList, Image, TouchableOpacity } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../constants/theme';
import { Header, Player } from '../components'
import songs from '../data/songs';
import { IconPlayChild } from '../assets/svg';
import TrackPlayer from 'react-native-track-player';

const MainScreen = ({ navigation }) => {

    const renderItem = ({ item }) => {

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
                    // Setup
                    await TrackPlayer.setupPlayer();
    
                    // Son sıraya şarkı ekler
                    await TrackPlayer.add({
                        id: item.id,
                        url: item.song,
                        title: item.title,
                        artist: item.artist,
                        artwork: item.image
                    });
    
                    // Şarkıyı başlatır
                    TrackPlayer.play();
    
                    navigation.navigate("CurrentSongScreen")
                }}
                activeOpacity={.8}
            >
    
                <Image style={{
                    height: 42,
                    width: 42,
                    marginStart: 12,
                    borderRadius: 50,
                }}
                    source={item.image}
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
                    onPress={() => console.log("asd")}
                    activeOpacity={.5}
                >
    
                    <IconPlayChild style={{
                        alignSelf: 'center'
                    }}
                        width={24}
                        height={24}
                        fill={COLORS.white}
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



export default MainScreen;