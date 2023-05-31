/**
 * Installations:
 *    npm install @react-navigation/native
 *    npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-commun
ity/masked-view
 *    npm i @react-navigation/stack
 *    
 *    android/app/build.gradle // add in dependencies {...}
 *    implementation "androidx.appcompat:appcompat:1.1.0-rc01"
 *    implementation "androidx.swiperefreshlayout:swiperefreshlayout:1.0.0-alpha02"
 * 
 *    In app.js at file's top
 *    import 'react-native-gesture-handler'
 * 
 *    npm i react-native-vector-icons
 */
import 'react-native-gesture-handler';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import Inicio from './views/Inicio';
import NuevoCliente from './views/NuevoCliente';
import DetallesCliente from './views/DetallesCliente';
import BarraSuperior from './components/ui/Barra';

const Stack = createStackNavigator()

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#1774F2',
    accent: '#0655BF',
  }
}

function App(): JSX.Element {
  

  return (
    <>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName='Inicio'
            screenOptions={{
              headerStyle: {
                backgroundColor: theme.colors.primary
              },
              headerTintColor: theme.colors.surface,
              headerTitleStyle: {
                fontWeight: 'bold'
              },
              headerTitleAlign: 'center'
            }}
          >
            <Stack.Screen
              name='Inicio'
              component={Inicio}
              options={ ({navigation, route}) => ({
                // headerLeft: (props) => 
                //   <BarraSuperior {...props} 
                //     navigation={navigation} 
                //     route={route} 
                //   />
              })}
            />
            <Stack.Screen
              name='NuevoCliente'
              component={NuevoCliente}
              options={{
                title: 'Nuevo Cliente'
              }}
            />
            <Stack.Screen
              name='DetallesCliente'
              component={DetallesCliente}
              options={{
                title: 'Detalles Cliente'
              }}
            />
          </Stack.Navigator>
        </NavigationContainer> 
      </PaperProvider>
      
    </>
  );
}

const styles = StyleSheet.create({
  
});

export default App;
