import React from 'react';
import { View, SafeAreaView, Platform, StatusBar, ImageBackground, Image} from 'react-native';
import background from '../assets/images/bg_img.png';
import imageteste from '../assets/images/imgtst.jpg';

export default function StarterScreen() {
  return (
    <ImageBackground source={background} style={ {width:'100%', height:'100%'} }>
    <SafeAreaView style= { { flex: 1, paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0 }}>
    <View style={{flex:1}}>
    <Image source={imageteste} style={{width: 300, height: 200, alignSelf: 'center', marginVertical: 20, marginHorizontal: 10}}/>
    </View>
    </SafeAreaView>
    </ImageBackground>
  );
}

StarterScreen.navigationOptions = {
  header: null,
};