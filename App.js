import { useState } from 'react';
import { StyleSheet, Text, View, Button, Dimensions, TextInput} from 'react-native';
import axios from 'axios'
import DisplayTwentyFour from './components/DisplayTwentyFour';

export default function App() {
  const key = '064a54a0814160d4d2420274d017654e'
  const [ num, setNum ] = useState(0);

  const [ display, setDisplay ] = useState(false);

  const [text, setText] = useState('');

  const [ query, setQuery ] =useState('98034');
  const [ weatherData, setWeatherData ] = useState({})
  const geoTranslate = `http://api.openweathermap.org/geo/1.0/zip?zip=${query}&appid=${key}`

  const search = () => {
    axios({
      method: 'get',
      url: geoTranslate
  }).then(res => {
    const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${res.data.lat}&lon=${res.data.lon}&appid=${key}&units=imperial`;
    console.log(url)
      axios({
        method: 'get',
        url : url
      }).then(res => { 
        console.log(res.data)
        setWeatherData(weatherData => ({
          ...weatherData,
          ...res.data
        }))
        setTimeout(e => {setDisplay(true)}, 2000)
      })
  })
  }

  const displayWeather = () => {
    if(display) {
      console.log('ooga')
      return true
    } else if(!display) {
      console.log('booga')
      return false
    }
  }

  return (
    <>
      <View style={styles.container}>
        {!displayWeather() ? 
          <>
            <View style={styles.buttons}>
              <TextInput
                style={{height: 40}}
                placeholder="Type your zip code here"
                onChangeText={newText => setText(newText)}
                defaultValue={text}
              />
              <View>
                <Button title="Search" onPress={search} style={{flex: 1, height: 10}}></Button>
              </View>
            </View>
          </> 
        : 
          <DisplayTwentyFour current={weatherData.current}/>
        }
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    textAlignment: 'center',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: Dimensions.get('window').height
  },
  buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 200
  }
});
