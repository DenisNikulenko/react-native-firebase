import React from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';

const OnboardingScreen = ({navigation}) => {
  return (
    <Onboarding
      onSkip={() => navigation.replace('Login')}
      onDone={() => navigation.navigate('Login')}
      pages={[
        {
          backgroundColor: '#a6e4d0',
          image: <Image source={require('../assests/images/onboarding-img1.png')} />,
          title: 'Connect to the World',
          subtitle: 'A New Way yo connect with the World',
        },
        {
          backgroundColor: '#fdeb93',
          image: <Image source={require('../assests/images/onboarding-img2.png')} />,
          title: 'Share your favorites',
          subtitle: 'Share your thoughts with similar kind of people',
        },
        {
          backgroundColor: '#e9bcbe',
          image: <Image source={require('../assests/images/onboarding-img3.png')} />,
          title: 'Become the star',
          subtitle: 'Let the spot light capture yoy',
        },
      ]}
    />
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});

export default OnboardingScreen;
