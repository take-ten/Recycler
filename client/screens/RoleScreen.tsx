import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { CheckBox } from 'react-native-elements';
import { useDispatch } from 'react-redux';
import { login } from '../store/authSlice';



const RoleScreen = () => {
  const navigation = useNavigation();
 

  const [isProviderChecked, setIsProviderChecked] = useState(false);
  const [isCollecteurChecked, setIsCollecteurChecked] = useState(false);
  const dispatch = useDispatch();
  const handleLogin = () => {
    dispatch(login());
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Back button */}
      

      {/* Centered text and checkboxes */}
      <View style={styles.centerContainer}>
        <Text style={styles.text}>vous êtes ?</Text>
        <View style={styles.checkboxContainer}>
          <CheckBox
            title="Provider"
            checked={isProviderChecked}
            onPress={() => {
              setIsProviderChecked(true);
              setIsCollecteurChecked(false);
            }}
            containerStyle={styles.checkbox}
            textStyle={styles.checkboxText}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checkedColor="black"
          />
          <CheckBox
            title="Collecteur"
            checked={isCollecteurChecked}
            onPress={() => {
              setIsCollecteurChecked(true);
              setIsProviderChecked(false);
            }}
            containerStyle={styles.checkbox}
            textStyle={styles.checkboxText}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checkedColor="black"
          />
        </View>
      </View>

      {/* Bottom button */}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Enregistrer</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  backButton: {
    marginTop: 10,
    marginLeft: 10,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
  },
  checkboxContainer: {
    width: '80%',
  },
  checkbox: {
    backgroundColor: 'white',
    borderWidth: 0,
    padding: 0,
    margin: 0,
  },
  checkboxText: {
    fontSize: 18,
    fontWeight: 'normal',
    color: 'black',
  },
  button: {
    backgroundColor: 'green',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default RoleScreen;