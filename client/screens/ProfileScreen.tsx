import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../store/authSlice';

export default function ProfileScreen() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.profileText}>Profile Screen</Text>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  profileText: {
    fontSize: 24,
    marginBottom: 20,
  },
  logoutButton: {
    backgroundColor: '#ff3b30',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});