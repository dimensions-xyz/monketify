import React from 'react';
import { View, Text, Modal, StatusBar } from 'react-native';
import { COLORS } from '../../constants/theme';

const CurrentSongScreen = () => {

    return (
        <Modal style={{
            color: COLORS.black
        }}
            animationType="slide"
        >

            <StatusBar
                barStyle={'light-content'}
                translucent
                backgroundColor={COLORS.gray}
            />

            <View style={{
                flex: 1,
                backgroundColor: COLORS.gray,
                justifyContent: 'center',
                alignItems: 'center'
            }}>

                <Text>Current Song Screen</Text>

            </View>

        </Modal>
    );

}

export default CurrentSongScreen;