/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


function App(): JSX.Element {
  
  return (
    <>
      <ScrollView style={{marginBottom: 20}}>
        <View>
          <View style={{flexDirection: 'row'}}>
            <Image 
              style={styles.banner}
              source={require('./assets/img/bg.jpg')}
            />
          </View>

          <View style={styles.contenedor}>
            <Text style={styles.titulo}>Qué hacer en París?</Text>
            <ScrollView
              horizontal
            >
              <View>
                <Image 
                  style={styles.ciudad}
                  source={require('./assets/img/actividad1.jpg')}
                />
              </View>
              <View>
                <Image 
                  style={styles.ciudad}
                  source={require('./assets/img/actividad2.jpg')}
                />
              </View>
              <View>
                <Image 
                  style={styles.ciudad}
                  source={require('./assets/img/actividad3.jpg')}
                />
              </View>
              <View>
                <Image 
                  style={styles.ciudad}
                  source={require('./assets/img/actividad4.jpg')}
                />
              </View>
              <View>
                <Image 
                  style={styles.ciudad}
                  source={require('./assets/img/actividad5.jpg')}
                />
              </View>
            </ScrollView>
            <Text style={styles.titulo}>Los mejores alojamientos</Text>
            <View>
              <View>
                <Image 
                  style={styles.mejores}
                  source={require('./assets/img/mejores1.jpg')}
                />
              </View>
              <View>
                <Image 
                  style={styles.mejores}
                  source={require('./assets/img/mejores2.jpg')}
                />
              </View>
              <View>
                <Image 
                  style={styles.mejores}
                  source={require('./assets/img/mejores3.jpg')}
                />
              </View>
            </View>
            <Text style={styles.titulo}>Hospedajes en LA</Text>
            <View style={styles.listado}>
              <View style={styles.listadoItem}>
                <Image 
                  style={styles.mejores}
                  source={require('./assets/img/hospedaje1.jpg')}
                />
              </View>
              <View style={styles.listadoItem}>
                <Image 
                  style={styles.mejores}
                  source={require('./assets/img/hospedaje2.jpg')}
                />
              </View>
              <View style={styles.listadoItem}>
                <Image 
                  style={styles.mejores}
                  source={require('./assets/img/hospedaje3.jpg')}
                />
              </View>
              <View style={styles.listadoItem}>
                <Image 
                  style={styles.mejores}
                  source={require('./assets/img/hospedaje4.jpg')}
                />
              </View>
            </View>
          </View>
          
          
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'cornflowerblue',
    flex: 1
  },
  banner: {
    height: 250,
    flex: 1
  },
  contenedor: {
    marginHorizontal: 10
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 20
  },
  ciudad: {
    width: 250,
    height: 300,
    marginRight: 10
  },
  mejores: {
    width: '100%',
    height: 200,
    marginVertical: 5
  },
  listado: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  listadoItem: {
    flexBasis: '49%'
  }
});

export default App;
