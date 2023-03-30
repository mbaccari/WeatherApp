import React from 'react';
import {StyleSheet, Text, Dimensions, View, Image} from 'react-native';

const DisplayTwentyFour = (props) => {


  return (
    <View style={styles.container}>
      <View style={styles.mainPanel}>
          <Image
            style={{
              resizeMode: 'contain',
              height: 100,
              width: 200,
            }}
            source={require('../assets/cloud.png')}
          />
          <Text
            style={{
              fontSize: 'xx-large',
              fontWeight: 'x-bold'
            }}
          >
            {Math.floor(props.current.temp)}F
          </Text>
          <Text>date</Text>
          <Text>weather</Text>
          <Text>Location</Text>
      </View>
      <Text>Weather: {props.current.weather[0].description}</Text>
      <Text>Temperature: {Math.floor(props.current.temp)}</Text>
      <Text>Feels Like: {Math.floor(props.current.feels_like)}F</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    flexDiretion: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  },
  mainPanel: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center'
  },
  weatherLogo: {
    height: 300,
    widht: 300,
  }
})

export default DisplayTwentyFour;