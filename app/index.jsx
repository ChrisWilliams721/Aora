import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Image source={require('./assets/thrifty-high-resolution-logo-transparent.png')}/>
      </View>
      <View>
        <Text style={styles.create}>Create an Account</Text>
      </View>
      <View style={styles.signMessage}>
        <Text>Enter your email to sign up for this app</Text>
      </View>
      <TextInput style={styles.input} placeholder='email@domain.com'keyboardType='email-address'></TextInput>
      <View style={styles.signInBtn}>
      <Button title='Sign up with email' />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  create: {
    fontWeight: 'bold',
    fontSize: 25,

  },
  input:{
    borderWidth: 2,
    textDecorationLine: 'none',
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 327,
    height:40,
    borderRadius: 5,
  },
  signInBtn:{
    backgroundColor: '#085F63',
    width: 327,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  }
});
