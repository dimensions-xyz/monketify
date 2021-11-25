import React from 'react';
import { View, Text, StatusBar, FlatList, Image, TouchableOpacity } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../constants/theme';
import { Header, Player } from '../components'
import songs from '../data/songs';
import { IconPlayChild } from '../assets/svg';

const MainScreen = () => {

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

export default MainScreen;