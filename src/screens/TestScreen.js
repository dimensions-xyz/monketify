import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { observer } from 'mobx-react';
import SongStateStore from '../store/SongStateStore';

@observer
export default class TestScreen extends Component {

    componentDidMount() {
        console.log(SongStateStore.getCurrentTrack());
    }

    render() {
        return (
            <View style={{
                flex: 1,
                backgroundColor: 'purple',
                justifyContent: 'center',
                alignItems: 'center'
            }}>

                <Button title="+" onPress={() => {
                    SongStateStore.updateCurrentTrack(2)
                    console.log(SongStateStore.getCurrentTrack());
                }} />

                <Button title="-" onPress={() =>{
                    SongStateStore.updateCurrentTrack(1)
                    console.log(SongStateStore.getCurrentTrack());
                }} />

                <Text style={{
                    color: 'white'
                }}> TestScreen </Text>

            </View>
        );
    }
}
