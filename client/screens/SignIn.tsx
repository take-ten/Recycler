import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../store/authSlice';

export default function SignIn() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login());
  };

  return (
    <View style={styles.container}>
      {/* <TouchableOpacity style={styles.backButton}>
        <Text style={styles.backButtonText}>{'<'}</Text>
      </TouchableOpacity> */}
      <Text style={styles.headerText}>Toujours heureux de vous revoir</Text>
      <TextInput style={styles.input} placeholder="Mail ou Tel" />
      <TextInput style={styles.input} placeholder="Votre mot de passe" secureTextEntry={true} />
      <TouchableOpacity style={styles.forgotPassword}>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signInButton} onPress={handleLogin}>
        <Text style={styles.signInButtonText}>Entrer</Text>
      </TouchableOpacity>
      <Text style={styles.orText}>ou se connecter avec</Text>
      <View style={styles.socialButtons}>
        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialButtonText}>f</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialButtonText}>G</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialButtonText}>🍎</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.noAccountText}>Vous n'avez pas de compte ?</Text>
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.signUpText}>Inscrivez-vous maintenant !</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  backButton: {
    marginTop: 40,
    marginBottom: 20,
  },
  backButtonText: {
    fontSize: 24,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  forgotPasswordText: {
    color: '#888',
  },
  signInButton: {
    backgroundColor: '#34C759',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  signInButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  orText: {
    textAlign: 'center',
    marginBottom: 20,
    color: '#888',
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  socialButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialButtonText: {
    fontSize: 24,
    color: '#888',
  },
  noAccountText: {
    textAlign: 'center',
    color: '#888',
  },
  signUpText: {
    textAlign: 'center',
    color: '#34C759',
    fontWeight: 'bold',
  },
})