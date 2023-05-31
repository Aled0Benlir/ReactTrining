/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler'
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

// React Navigation
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Inicio from './Views/Inicio';
import Nosotros from './Views/Nosotros';

const Stack = createStackNavigator()

function App(): JSX.Element {

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Inicio'
          screenOptions={{
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#F4511E'
            },
            headerTintColor: '#FFF',
            headerTitleStyle: {
              fontWeight: 'bold'
            }
          }}
        >
          <Stack.Screen
            name='Inicio'
            component={Inicio}
            options={{
              title: 'Componente Principal',
            }}
          />
          <Stack.Screen
            name='Nosotros'
            component={Nosotros}
            options={({route}) => ({
              title: route.params.clienteId,
              headerStyle: {
                backgroundColor: 'blue'
              }
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  
});

export default App;
