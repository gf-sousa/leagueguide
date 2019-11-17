import React from 'react';
import { Text, Platform, StatusBar, SafeAreaView, ImageBackground } from 'react-native';
import background from '../assets/images/bg_img.png';

export default function GlossarioScreen() {
  return(
    <ImageBackground source={background} style={ {width:'100%', height:'100%'} }>
      <SafeAreaView style= { { flex: 1, paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0 }}>
      <Text style={{color:'white'}}>Glossario</Text>
      </SafeAreaView>
    </ImageBackground>
  )
}

GlossarioScreen.navigationOptions = {
  header: null,
};
