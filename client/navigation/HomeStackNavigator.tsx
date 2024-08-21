import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ChatScreen from '../screens/ChatScreen';
import ProviderDef from '../screens/ProviderDef';
import CollectorDef from '../screens/CollectorDef';



const Stack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ChatScreen" component={ChatScreen} />
      <Stack.Screen name="ProviderDef" component={ProviderDef} />
      <Stack.Screen name="CollectorDef" component={CollectorDef} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;