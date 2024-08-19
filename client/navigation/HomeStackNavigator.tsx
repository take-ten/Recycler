import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import MapScreen from '../screens/MapScreen';
import Mohssen from '../screens/Mohssen';

const Stack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="MapScreen" component={MapScreen} />
      <Stack.Screen name="Mohssen" component={Mohssen} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;