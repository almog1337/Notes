import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/homeScreen/homeScreen';
import IntervalIdentify from './components/intervalIdentify/intervalIdentify';

type AppStackParamList = {
  homeScreen: undefined,
  intervalIdentify: undefined
}

export default function App() {
  const Stack = createNativeStackNavigator<AppStackParamList>();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='intervalIdentify'>
        <Stack.Screen
        name='intervalIdentify'
        component={IntervalIdentify}
        options={{
          title: "Interval Identification",
          statusBarColor: "#181818",
          headerStyle: {
            backgroundColor: "#181818"
          },
          headerTitleStyle: {
            color: "rgb(188, 183, 174)"
          },
          headerTitleAlign: "center"
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}