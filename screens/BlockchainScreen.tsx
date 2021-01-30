import * as React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

import { View } from '../components/Themed';
import Timeline from 'react-native-timeline-flatlist'

const backgroundImage = '../assets/images/blockchain_page.png'
const date = '2021/01/31'
const data = [
  { time: '30 Jan 09:00', title: 'Lab Status Update', description: 'The Lab has started processing your specimen' },
  { time: '30 Jan 10:45', title: 'Lab Status Update', description: 'The Lab has started PCR of your specimen' },
  { time: '30 Jan 12:00', title: `COVID-19 Test Result: ${date}`, description: 'Negative' },
]

const isTestPositive = () => {
  const testResult = data.find(block => block?.description == "Positive")
  if (testResult == null) {
    return false
  } else {
    return true
  }
}

export default function BlockchainScreen() {


  return (
    <View style={styles.container}>
      <ImageBackground source={require(backgroundImage)} style={styles.image}>
        <Timeline style={styles.list} circleSize={20}
          renderFullLine
          circleColor='rgb(45,156,219)'
          lineColor='rgb(45,156,219)'
          innerCircle={'dot'}
          descriptionStyle={isTestPositive() ? { color: 'red' } : { color: 'green' }}
          options={{
            style: { paddingTop: 5, paddingLeft: 15 }
          }}
          data={data} />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  list: {
    flex: 1,
    marginTop: 20,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});
