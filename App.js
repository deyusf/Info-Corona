import React, { Component } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './Content/Main';
import Lengkap from "./Content/Lengkap";
import Berita from "./Content/Berita";
import Splash from "./Content/Splash";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ gestureEnabled: false }}
        initialRouteName="Splash"
        headerMode="screen"
      >
        <Stack.Screen 
          name="Splash"
          component={Splash}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen 
          name="Home"
          component={Main}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen 
          name="Lengkap"
          component={Lengkap}
          options={{
            title: "Daftar Provinsi",
            headerTitleStyle: {
              fontSize: 17,
              fontFamily: "IBM-Plex",
            },
            headerStyle: {
              elevation: 0,
              shadowOpacity: 0
            }
          }}
        />
        <Stack.Screen 
          name="Berita"
          component={Berita}
          options={
            ({route}) => ({
              title: route.params.judul,
              headerStyle: {
                elevation: 0,
                shadowOpacity: 0
              },
              headerTitleStyle: {
                fontSize: 16
              }
            })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App