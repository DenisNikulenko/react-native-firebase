import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Button, Image} from 'react-native';

import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';
import SocialButton from '../components/SocialButton';

import Icon from 'react-native-vector-icons/AntDesign';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState()

  return (
    <View style={styles.container}>
      <Image 
        source={require('../assests/images/rn-social-logo.png')}
        style={styles.logo}
      />
      <Text style={styles.text}>RN social App</Text>

     <FormInput
        labelValue={email}
        onChangeText={(userEmail) => setEmail(userEmail)}
        placeholderText="Email"
        iconType="user"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <FormInput
        labelValue={password}
        onChangeText={(userPassword) => setPassword(userPassword)}
        placeholderText="Password"
        iconType="lock"
        secureTextEntry={true}
      />

      <FormButton 
        buttonTitle='Sign in'
        onPress={() => alert('sign in clicked')}
      />

      <TouchableOpacity style={styles.forgotButton} onPress={() => {}}>
        <Text style={styles.navButtonText}>Forgot Password</Text>
      </TouchableOpacity>

      <SocialButton 
        buttonTitle='Sign in with Facebook'
        btnType='facebook'
        color='#4867aa'
        backgroundColor='#e6eaf4'
        onPress={() => {}}
      />

      <SocialButton 
        buttonTitle='Sign in with Google'
        btnType='google'
        color='red'
        backgroundColor='#e6eaf4'
        onPress={()=>{}}
      />

      <TouchableOpacity style={styles.forgotButton} onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.navButtonText}>Don`t have an account? Create here</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 50
  },
  logo: {
    height: 150,
    width: 150,
    resizeMode: 'cover',
  },
  text: {
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 35,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
  },
});

export default LoginScreen;