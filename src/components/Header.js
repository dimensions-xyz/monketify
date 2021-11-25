import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { COLORS, FONTS } from '../../constants/theme';

const Header = ({ title }) => {

    return (
        <View style={{
            marginTop: StatusBar.currentHeight,
            borderBottomWidth: 0.5,
            borderBottomColor: COLORS.gray,
        }}>

            <Text style={{
                marginVertical: 16,
                ...FONTS.title,
                color: COLORS.white,
                textAlign: 'center',
            }}>{title}</Text>

        </View>
    );

}

export default Header;