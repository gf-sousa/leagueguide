import React from 'react';
import { View, Text, Platform, StatusBar, SafeAreaView, ImageBackground, Image} from 'react-native';
import background from '../assets/images/bg_img.png';
import imga from '../assets/images/rotas.jpg';
import imgb from '../assets/images/invade.png';

export default function GlossarioScreen() {
  return(
    <ImageBackground source={background} style={ {width:'100%', height:'100%'} }>
      <SafeAreaView style= { { flex: 1, paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0 }}>
       
        <View style={{flex: 1, flexDirection: 'column', }}>
        <Text style={{color:'white'}}>Glossario</Text>
        <Image source={imga} style={{width: 100, height: 100}}/>
         <Text style={{ flex: 1, color: 'white'}}>   
                   TOP = rota superior
                   JG/Jungle = caçador, rota da selva
                   MID = rota do meio
                   BOT/ADC = rota inferior, carregador de dano físico, atirador
                   SUP = Suporte, rota inferior</Text>  
        <Image source={imgb} style={{width: 100, height: 100}}/>
        <Text>Ato onde o time inimigo adentra a selva adversária</Text>
        </View>
      </SafeAreaView>
         </ImageBackground>
  )
}

GlossarioScreen.navigationOptions = {
  header: null,
};
