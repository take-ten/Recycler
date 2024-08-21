import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from '../screens/SignUp';
import Onboarding from '../screens/Onboarding';
import SignIn from '../screens/SignIn';
import RoleScreen from '../screens/RoleScreen';
import ProviderDef from '../screens/ProviderDef';
import CollectorDef from '../screens/CollectorDef';





const Stack = createStackNavigator();

const OnboardingNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Onboarding">
    <Stack.Screen name="Onboarding" component={Onboarding} />
    <Stack.Screen name="SignUp" component={SignUp} />
    <Stack.Screen name="SignIn" component={SignIn} />
    <Stack.Screen name="RoleScreen" component={RoleScreen} />
    <Stack.Screen name="ProviderDef" component={ProviderDef} />
    <Stack.Screen name="CollectorDef" component={CollectorDef} />


      
    </Stack.Navigator>
  );
};

export default OnboardingNavigation;