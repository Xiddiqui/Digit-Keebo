/** @format */

import {
    Login,

} from '../../screens';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const AuthStack = createStackNavigator();
const AuthApp = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={'Login'}>
      <AuthStack.Screen name={'Login'} component={Login} />
    </AuthStack.Navigator>
  );
};

export default AuthApp;
