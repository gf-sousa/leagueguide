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
                        Rotas:  </Text>
         <Text style={{ flex: 1, color: 'white', textAlign: 'justify', marginHorizontal: 5}}>   
                   TOP = rota superior
                   JG/Jungle = caçador, rota da selva
                   MID = rota do meio
                   BOT/ADC = rota inferior, carregador de dano físico, atirador
                   SUP = Suporte, rota inferior</Text>  
        <Image source={imgb} style={{width: 100, height: 100}}/>
       
        <Text style={{ flex: 1, color: 'white', textAlign: 'justify', marginHorizontal: 5}}>
                       Givar: </Text>
        <Text style={{ flex: 1, color: 'white', textAlign: 'justify', marginHorizontal: 5}}> Entregar alguma coisa no jogo, exemplo tem 2 jogadores do time inimigo mortos e vcs startam barão, é melhor eles givar do que ir lá e morrer</Text>

        <Text style={{ flex: 1, color: 'white', textAlign: 'justify', marginHorizontal: 5}}> Harass: </Text>
        <Text style={{ flex: 1, color: 'white', textAlign: 'justify', marginHorizontal: 5}}> Colocar pressão sobre um campeão inimigo, causando danos com pouco risco de retaliação.</Text>
        
        <Text style={{ flex: 1, color: 'white', textAlign: 'justify', marginHorizontal: 5}}>
                       Chase: </Text>
        <Text style={{ flex: 1, color: 'white', textAlign: 'justify', marginHorizontal: 5}}> Perseguição - Ficar indo de um alvo pra matar ele. </Text>               
        
        <Text style={{ flex: 1, color: 'white', textAlign: 'justify', marginHorizontal: 5}}>All win: </Text>
        <Text style={{ flex: 1, color: 'white', textAlign: 'justify', marginHorizontal: 5}}>Significa você investir com tudo contra seu adversário na lane. Basicamente, gastar tudo que você tem pra garantir kill.</Text>
        
        <Text style={{ flex: 1, color: 'white', textAlign: 'justify', marginHorizontal: 5}}> Trade </Text>
        <Text style={{ flex: 1, color: 'white', textAlign: 'justify', marginHorizontal: 5}}> Quando jogadores de cada lado possui dano equivalente a outro durante um confronto. </Text>
        
        <Text style={{ flex: 1, color: 'white', textAlign: 'justify', marginHorizontal: 5}}> Cover </Text>
        <Text style={{ flex: 1, color: 'white', textAlign: 'justify', marginHorizontal: 5}}> Convidar outro companheiro de equipe para segurar a lane do jogador enquanto ele não estão lá. </Text>

        <Text style={{ flex: 1, color: 'white', textAlign: 'justify', marginHorizontal: 5}}> Zoning </Text>
        <Text style={{ flex: 1, color: 'white', textAlign: 'justify', marginHorizontal: 5}}> criar zonas com habilidades, de modo que seu inimigo irá chegar em um local/situação desfavorável </Text>

        <Text style={{ flex: 1, color: 'white', textAlign: 'justify', marginHorizontal: 5}}> Poke </Text>
        <Text style={{ flex: 1, color: 'white', textAlign: 'justify', marginHorizontal: 5}}> Uma forma de atacar que utiliza ataques de longa distância para causar dano pequeno ou moderado, a fim de enfraquecer um inimigo, mantendo uma posição segura. </Text>

        <Text style={{ flex: 1, color: 'white', textAlign: 'justify', marginHorizontal: 5}}> CC </Text>
        <Text style={{ flex: 1, color: 'white', textAlign: 'justify', marginHorizontal: 5}}> “Crowd Control” ou controle de multidão, são algumas habilidades que os campeões possuem para desferir lentidões e atordoamentos. </Text>

        <Text style={{ flex: 1, color: 'white', textAlign: 'justify', marginHorizontal: 5}}> Wave </Text>
        <Text style={{ flex: 1, color: 'white', textAlign: 'justify', marginHorizontal: 5}}> Um grupo de minions que nascem ao mesmo tempo. </Text>

        <Text style={{ flex: 1, color: 'white', textAlign: 'justify', marginHorizontal: 5}}> Gank </Text>
        <Text style={{ flex: 1, color: 'white', textAlign: 'justify', marginHorizontal: 5}}> Emboscar um ou mais inimigos desavisados com um ou mais campeões (geralmente com o jungler aliado). </Text>

        <Text style={{ flex: 1, color: 'white', textAlign: 'justify', marginHorizontal: 5}}> Counter Jungle </Text>
        <Text style={{ flex: 1, color: 'white', textAlign: 'justify', marginHorizontal: 5}}> Para neutralizar no lado inimigo da selva, privando a equipe inimiga de buffs, ouro e experiência. </Text>

        <Text style={{ flex: 1, color: 'white', textAlign: 'justify', marginHorizontal: 5}}> Counter pick </Text>
        <Text style={{ flex: 1, color: 'white', textAlign: 'justify', marginHorizontal: 5}}> Escolher um campeão durante a seleção para neutralizar uma habilidade de outro campeão inimigo em especial </Text>

        <Text style={{ flex: 1, color: 'white', textAlign: 'justify', marginHorizontal: 5}}> Counter gank </Text>
        <Text style={{ flex: 1, color: 'white', textAlign: 'justify', marginHorizontal: 5}}> Configurando uma emboscada em resposta imediata a uma emboscada inimiga com a intenção de negar ou frustrar a vantagem obtida pelo ataque do inimigo. </Text>

        <Text style={{ flex: 1, color: 'white', textAlign: 'justify', marginHorizontal: 5}}> River </Text>
        <Text style={{ flex: 1, color: 'white', textAlign: 'justify', marginHorizontal: 5}}> A cruzada de aguas no centro das lanes em Summoner’s Rift. </Text>

        <Text style={{ flex: 1, color: 'white', textAlign: 'justify', marginHorizontal: 5}}> Swap </Text>
        <Text style={{ flex: 1, color: 'white', textAlign: 'justify', marginHorizontal: 5}}> Altere as linhas, por exemplo, o topo vai para o bot e os dois do bot vão para a linha superior. </Text>

        <Text style={{ flex: 1, color: 'white', textAlign: 'justify', marginHorizontal: 5}}> Red </Text>
        <Text style={{ flex: 1, color: 'white', textAlign: 'justify', marginHorizontal: 5}}> Time Vermelho ou monstro da selva denominado “Azuporã” que dá o buff “red” de regeneração de vida. </Text>

        <Text style={{ flex: 1, color: 'white', textAlign: 'justify', marginHorizontal: 5}}> Blue </Text>
        <Text style={{ flex: 1, color: 'white', textAlign: 'justify', marginHorizontal: 5}}> Time Azul ou monstro da selva denominado “Azuporã” que dá o buff “blue” de regeneração de mana. </Text>

        <Text style={{ flex: 1, color: 'white', textAlign: 'justify', marginHorizontal: 5}}> B </Text>
        <Text style={{ flex: 1, color: 'white', textAlign: 'justify', marginHorizontal: 5}}> A área murada onde a loja, Respawn, Nexus e Inibidores estão situados. </Text>

        <Text style={{ flex: 1, color: 'white', textAlign: 'justify', marginHorizontal: 5}}> Dive </Text>
        <Text style={{ flex: 1, color: 'white', textAlign: 'justify', marginHorizontal: 5}}> Perseguir um alvo específico em uma área altamente perigosa, tipicamente abaixo de uma torre inimiga. </Text>

        <Text style={{ flex: 1, color: 'white', textAlign: 'justify', marginHorizontal: 5}}> Freeze </Text>
        <Text style={{ flex: 1, color: 'white', textAlign: 'justify', marginHorizontal: 5}}> Freezar a lane é uma técnica muito avançada é muito eficiente. Se você fizer isso direito, você pode efetivamente negar todos os avanços para o seu adversário, enquanto consegue aquisição livre de pontuação/influência sem ameaça. </Text>

        <Text style={{ flex: 1, color: 'white', textAlign: 'justify', marginHorizontal: 5}}> Push </Text>
        <Text style={{ flex: 1, color: 'white', textAlign: 'justify', marginHorizontal: 5}}> O termo "push" é frequentemente utilizado para se referir a "avançar a lane" </Text>


        
        
        
        
        
        
        
        
        
        
        
        </View>
      </SafeAreaView>
         </ImageBackground>
  )
}

GlossarioScreen.navigationOptions = {
  header: null,
};
