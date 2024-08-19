import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  HomeScreen: undefined;
  MapScreen: undefined;
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'HomeScreen'>;

export default function HomeScreen() {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <View className="flex-1 bg-gray-100 p-4">
      {/* Header */}
      <View className="flex-row items-center justify-between p-4 bg-white border-b border-gray-200">
        <Text className="text-xl font-bold text-blue-500">Dashboard</Text>
      </View>

      {/* Buttons */}
      <View className="flex-1 justify-center items-center">
        <TouchableOpacity
          className="flex-row items-center justify-center p-4 m-2 bg-white rounded-lg shadow"
          onPress={() => navigation.navigate('MapScreen')}
        >
          <Icon name="map" size={30} color="blue" />
          <Text className="ml-2 text-lg text-blue-500">Map</Text>
        </TouchableOpacity>
        {/* Add more buttons with icons as needed */}
      </View>
      <View className="flex-1 justify-center items-center">
        <TouchableOpacity
          className="flex-row items-center justify-center p-4 m-2 bg-white rounded-lg shadow"
          onPress={() => navigation.navigate('Mohssen')}
        >
          <Icon name="eye" size={30} color="blue" />
          <Text className="ml-2 text-lg text-blue-500">Mohssen</Text>
        </TouchableOpacity>
        {/* Add more buttons with icons as needed */}
      </View>
    </View>
  );
}