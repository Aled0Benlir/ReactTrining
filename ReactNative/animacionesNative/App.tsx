import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
// import Animación1 from './components/Animación1';
// import Animación2 from './components/Animación2';
// import Animación3 from './components/Animación3';
// import Animación4 from './components/Animación4';
// import Animación5 from './components/Animación5';
// import Animación6 from './components/Animación6';
import Animación7 from './components/Animación7';

function App(): JSX.Element {
  
  return (
    <>
      <View style={styles.contenido}>
        {/* <Animación1 /> */}
        {/* <Animación2 /> */}
        {/* <Animación3 /> */}
        {/* <Animación4 /> */}
        {/* <Animación5 /> */}
        {/* <Animación6 /> */}
        <Animación7 />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  contenido: {
    marginTop: 100
  }
});

export default App;
