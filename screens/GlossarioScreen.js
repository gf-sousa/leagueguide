import React from 'react';
import { Text, Platform, StatusBar, SafeAreaView, ImageBackground, Image, StyleSheet, } from 'react-native';
import background from '../assets/images/bg_img.png';

export default function GlossarioScreen() {
  return(
    <ImageBackground source={background} style={ {width:'100%', height:'100%'} }>
      <SafeAreaView style= { { flex: 1, paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0 }}>
       <Text style={{color:'white'}}>Glossario</Text>
        <Image source={require('../assets/images/rotas.png')}/>
         <Text>    TOP = rota superior
                   JG/Jungle = caçador, rota da selva
                   MID = rota do meio
                   BOT/ADC = rota inferior, carregador de dano físico, atirador
                   SUP = Suporte, rota inferior</Text>  
        <Image source={require('../assets/images/invade.png')}/>
        <Text>Ato onde o time inimigo adentra a selva adversária</Text>
      </SafeAreaView>
         </ImageBackground>
  )
}

GlossarioScreen.navigationOptions = {
  header: null,
};
