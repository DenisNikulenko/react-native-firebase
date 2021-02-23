import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import FormButton from '../components/FormButton';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>HomeScreen</Text>
      <FormButton buttonTitle='Logout' onPress={() => {}} /> 
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9fafd'
  },
  
  text: {
    fontSize: 20,
    color: '#333'
  }
});

export default HomeScreen;