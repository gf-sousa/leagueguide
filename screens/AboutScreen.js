import React from 'react';
import { Text, SafeAreaView, Platform, StatusBar, Image, ImageBackground } from 'react-native';
import background from '../assets/images/bg_img.png';
import logo from '../assets/images/logo.png';

export default function AboutScreen() {
  return (
    <ImageBackground source={background} style={ {flex: 1} }>
    <SafeAreaView style= { { flex: 1, paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0 }}>
    <Image source={logo} style={{width: 250, height: 100, alignSelf: 'center', marginVertical: 25}}/>
    </SafeAreaView>
    </ImageBackground>
  );
}

AboutScreen.navigationOptions = {
  header: null,
};