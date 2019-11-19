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
                        Rotas </Text>
         <Text style={{ flex: 1, color: 'white'}}>   
                   TOP = rota superior
                   JG/Jungle = caçador, rota da selva
                   MID = rota do meio
                   BOT/ADC = rota inferior, carregador de dano físico, atirador
                   SUP = Suporte, rota inferior</Text>  
        <Image source={imgb} style={{width: 100, height: 100}}/>
       
        <Text style={{ flex: 1, color: 'white'}}>
                       Givar }}</Text>
        <Text style={{ flex: 1, color: 'white'}}> Entregar alguma coisa no jogo, exemplo tem 2 jogadores do time inimigo mortos e vcs startam barão, é melhor eles givar do que ir lá e morrer</Text>

        <Text style={{ flex: 1, color: 'white'}}> harass </Text>
        <Text style={{ flex: 1, color: 'white'}}> É quando alguém fica incomodando um personagem adversário, causando dano nele sempre que possível para deixá-lo desconfortável. Pode ser corporal ou à distância, o importante é ficar fazendo o adversário perder vida sempre que
        possível, seja com auto ataque ou com habilidades. A ideia é tentar fazer o adversário sair da lane ou se sentir intimidado na hora de ir farmar ou destruir alguma coisa.</Text>
        
        <Text style={{ flex: 1, color: 'white'}}>
                       Chase }}</Text>
        <Text style={{ flex: 1, color: 'white'}}> Perseguição - Ficar indo de um alvo pra matar ele. </Text>               
        
        <Text style={{ flex: 1, color: 'white'}}>All win </Text>
        <Text style={{ flex: 1, color: 'white'}}>Significa você investir com tudo contra seu adversário na lane. Basicamente, gastar tudo que você tem pra garantir kill.</Text>
        </View>
      </SafeAreaView>
         </ImageBackground>
  )
}

GlossarioScreen.navigationOptions = {
  header: null,
};
