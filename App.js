import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import './global.css';

import FocusScreen from './app/screens/FocusScreen';
import StatisticsScreen from './app/screens/StaticsScreen';
import SettingsScreen from './app/screens/SettingsScreen'

const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Focus" component={FocusScreen} />
        <Tab.Screen name="Estadísticas" component={StatisticsScreen} />
        <Tab.Screen name="Configuraciones" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
