import React from 'react';
import { Text, SafeAreaView, Platform, StatusBar, ImageBackground, } from 'react-native';
import background from '../assets/images/bg_img.png';

export default function LinksScreen() {
  return (
    <ImageBackground source={background} style={ {width:'100%', height:'100%'} }>
    <SafeAreaView style= { { flex: 1, paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0 }}>
    <Text></Text>
    </SafeAreaView>
    </ImageBackground>
  );
}

LinksScreen.navigationOptions = {
  header: null,
};