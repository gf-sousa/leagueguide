import React from 'react';
import { View, Text, Platform, StatusBar, SafeAreaView, ImageBackground, Image, StyleSheet, FlatList} from 'react-native';
import background from '../assets/images/bg_img.png';
import imga from '../assets/images/rotas.jpg';
import imgb from '../assets/images/invade.png';

export default function GlossarioScreen() {
  return(
    <ImageBackground source={background} style={ {width:'100%', height:'100%'} }>
      <SafeAreaView style= { { flex: 1, paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0 }}>
       <View style={{flex:1}}>
        <Text style={{color:'white'}}>Glossario</Text>
         <Image source={imga} style={{ width: 300, height: 200, alignSelf: 'center', marginVertical: 20, marginHorizontal: 10}}/>
          <View style={styles.container, {flex: 1, alignSelf: 'center'}}>
          <FlatList
                data={[
                  { key: ' - Rotas: TOP = rota superior JG/Jungle = caçador, rota da selva MID = rota do meio BOT/ADC = rota inferior, carregador de dano físico, atirador SUP = Suporte, rota inferior;'},
                  { key: ' - Invade: ir em um território inimigo, particularmente a jungle;'},
                  { key: ' - Trade: Trade Damage: quando jogadores de cada lado possui dano equivalente a outro durante um confronto.;' },
                  { key: ' - Cover: Convidar outro companheiro de equipe para te proteger;' },
                  { key: ' - Harass: Colocar pressão sobre um campeão inimigo, causando danos com pouco risco de retaliação;' },
                  { key: ' - Zoning: criar zonas com habilidades, de modo que seu inimigo irá chegar em um local/situação desfavorável;' },
                  { key: ' - Poke: Uma forma de atacar que utiliza ataques de longa distância para causar dano pequeno ou moderado, a fim de enfraquecer um inimigo, mantendo uma posição segura;'},
                  { key: ' - CC: “Crowd Control” ou controle de multidão, são algumas habilidades que os campeões possuem para desferir lentidões e atordoamentos;'}, 
                  { key: ' - Chase: Perseguição - Ficar indo de um alvo pra matar ele.;'},
                  { key: ' - Wave: Um grupo de minions que nascem ao mesmo tempo.;'},
                  { key: ' - Gank: Emboscar um ou mais inimigos desavisados com um ou mais campeões (geralmente com o jungler aliado);'},
                  { key: ' - Counte Jungle: Para neutralizar no lado inimigo da selva, privando a equipe inimiga de buffs, ouro e experiência;'},
                  { key: ' - Counter pick: Escolher um campeão durante a seleção para neutralizar uma habilidade de outro campeão inimigo em especial;'},
                  { key: ' - Counter gank: Configurando uma emboscada em resposta imediata a uma emboscada inimiga com a intenção de negar ou frustrar a vantagem obtida pelo ataque do inimigo.;'},
                  { key: ' - River: A cruzada de aguas no centro das lanes em Summoner’s Rift;'},
                  { key: ' - Swap: Altere as linhas, por exemplo, o topo vai para o bot e os dois do bot vão para a linha superior;'},
                  { key: ' - Red: Termo utilizado para citar o bônus que o Rubrivira (monstro neutro da selva) disponibiliza ao ser feito;'},
                  { key: ' - Blue: Time Azul ou monstro da selva denominado “Azuporã” que dá o buff “blue” de regeneração de mana;'},
                  { key: ' - B: A área murada onde a loja, Respawn, Nexus e Inibidores estão situados;'},
                  { key: ' - dive: Perseguir um alvo específico em uma área altamente perigosa, tipicamente abaixo de uma torre inimiga;'},
                  { key: ' - Freeze: Freezar a lane é uma técnica muito avançada é muito eficiente.;'},
                  { key: ' - Push: O termo "push" é frequentemente utilizado para se referir a "avançar a lane";'},
                  { key: ' - All win: Significa você investir com tudo contra seu adversário na lane. Basicamente, gastar tudo que você tem pra garantir kill.;'},
                  ]}
                  renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
                />
              </View>
          </View>
      </SafeAreaView>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 22,
  },
  item: {
    fontSize: 14,
    height: 44,
    color: 'white',
    textAlign: 'center',

  },
});


GlossarioScreen.navigationOptions = {
  header: null,
};
