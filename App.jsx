/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';


function App(): React.JSX.Element {
  const [data, setData] = useState(0);
  const [name, setName] = useState(null);
  const alertData = (proops) => {
    setData(data + 1);
  }
  const refreshData = () => {
    setData(0);
    console.warn('Refreshing data');
  }

  return (
     <View  style={[
      styles.content,
    ]}>
        <View
        style={[
          styles.container,
        ]}>
        <View style={{flex: 1,}} >
          <Text style={{ color:'green',fontSize: 28 }}>{name} </Text>
          <Text style={{ borderRadius: 20,borderColor:'red',borderWidth: 2,padding: 10,width:50,textAlign:'center',fontSize: 18 }}>{data}</Text>
        </View>
        <View style={{flex: 1,}} >
          <Button
            color= 'green'
          title='Press Here' 
          style={[styles.btn]}
          onPress={()=>alertData('Hello world')}
          />
          <Button
            color= 'red'
          title='Refresh' 
          style={[styles.btn]}
          onPress={()=>refreshData()}
          />
        </View>
      </View>
        <View style={{ flexDirection: 'column',flex: 3 }}>

        </View>
     </View>
  );
}
const styles = StyleSheet.create({
  content: {
    padding: 20,
    color: 'red',
    height: 1000,
  },
  container: {
    flex: 1,
    padding: 20,
    flexDirection: 'row',
    color: 'red',
    height: 1000,
  },
  btn:{
    padding: 10,
    borderRadius: 10,
    margin: 10,
    marginTop: 5,
  }
});


export default App;
