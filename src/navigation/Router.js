import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { CurrentSongScreen, MainScreen } from '../screens'

const Stack = createStackNavigator();

const options = {
    headerShown: false,
}

const Router = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={options}>

                <Stack.Screen
                    component={MainScreen}
                    name="MainScreen"
                />

                <Stack.Screen
                    component={CurrentSongScreen}
                    name="CurrentSongScreen"
                />

            </Stack.Navigator>
        </NavigationContainer>
    );

}

export default Router;