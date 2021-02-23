import React, {useState, useEffect} from 'react';
import {View} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';

import AsyncStorage from '@react-native-async-storage/async-storage';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

import OnboardingScreen from '../screens/OnboardingScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';

const Stack = createStackNavigator();

const AuthStack = () => {
  const [isFirstLouch, setIsFirstLouch] = useState(null);
  let routeName;

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then((value) => {
      if (value === null) {
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setIsFirstLouch(true);
      } else {
        setIsFirstLouch(false);
      }
    });
  }, []);

  if (isFirstLouch === null) {
    return null;
  } else if (isFirstLouch === true) {
    routeName = 'Onboarding';
  } else {
    routeName = 'Login';
  }

  return (
    <Stack.Navigator initialRouteName={routeName}>
      <Stack.Screen
        name="Onboarding"
        component={OnboardingScreen}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="Signup"
        component={SignUpScreen}
        options={({navigation}) => ({
          title: '',
          headerStyle: {
            backgroundColor: '#f9fafd',
            shadowColor: '#f9fafd',
            elevation: 0,
          },
          // headerLeft: () => {
          //   <View>
          //     <FontAwesome.Button
          //       name="long-arrow-left"
          //       size={25}
          //       backgroundColor="#f9fafd"
          //       color="#333"
          //       onPress={() => navigation.navigate('Login')}
          //     />
          //   </View>;
          // },
        })}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
