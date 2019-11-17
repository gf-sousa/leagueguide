import React from 'react';
import { View, SafeAreaView, Platform, StatusBar, ImageBackground, Image} from 'react-native';
import background from '../assets/images/bg_img.png';

export default function StarterScreen() {
  return (
    <ImageBackground source={background} style={ {width:'100%', height:'100%'} }>
    <SafeAreaView style= { { flex: 1, paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0 }}>
    <View style={{flex:1}}>
    <Image source={{uri: 'enchttps://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiMkc6Xx_DlAhUDFLkGHcbBC4gQjRx6BAgBEAQ&url=https%3A%2F%2Fgiphy.com%2Fexplore%2Frengar&psig=AOvVaw22WAF2T3Q2adoGSI1-cy3h&ust=1574055945851645urtador.com.br/bjvK2'}} style={{width: '100%', height: '100%'}}/>
    </View>
    </SafeAreaView>
    </ImageBackground>
  );
}

StarterScreen.navigationOptions = {
  header: null,
};