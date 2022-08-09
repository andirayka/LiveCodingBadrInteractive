import React, {FC, useContext, useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {Login} from 'screens';
import {AppStackParams} from './routeTypes';

const AppStack = createStackNavigator<AppStackParams>();

// Main router of the App
export const AppRouter: FC = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{headerShown: false}}>
        <AppStack.Screen name="Login" component={Login} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};
