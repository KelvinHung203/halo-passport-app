import * as React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import { Button, Image } from 'react-native-elements';


import { Text, View } from '../components/Themed';

export default function WelcomeScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/images/blockchain_page.png')} style={styles.backgroundImage}>
        <Image source={require('../assets/images/appIcon.png')} style={styles.logo}></Image>
        <Text style={styles.title}>Welcome,</Text>
        <Text style={styles.name}>Chan Tai Man</Text>
        <Button title="Access your Blockchain" onPress={() => navigation.navigate('Blockchain', { screen: 'BlockchainScreen' })} buttonStyle={styles.button} type="outline" />
        <Button title="Halo Passport" onPress={() => navigation.navigate('Passport', { screen: 'Passport' })} buttonStyle={styles.button} type="outline" disabled />
      </ImageBackground>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 30
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 60
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  logo: {
    marginBottom: 10,
    alignSelf: 'center',
    width: '100%',
    height: 130,
    resizeMode: 'contain'
  },
  button: {
    paddingVertical: 10,
    marginHorizontal: 100,
    borderRadius: 5,
    height: 60,
    marginVertical: 15,
  }
});
