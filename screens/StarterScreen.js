import React from 'react';
import { Text, View, SafeAreaView, Platform, StatusBar, ImageBackground, Image, StyleSheet, FlatList} from 'react-native';
import background from '../assets/images/bg_img.png';
// import { Video } from 'expo-av';
// import VideoPlayer from 'expo-video-player';
import imageteste from '../assets/images/gif-combo.gif';

export default function StarterScreen() {
  return (
  <ImageBackground source={background} style={ {width:'100%', height:'100%'} }>
    <SafeAreaView style= { { flex: 1, paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0 }}>
      <View style={{flex:1}}>
        <Image source={imageteste} style={{ width: 300, height: 200, alignSelf: 'center', marginVertical: 20, marginHorizontal: 10}}/>
      {/* <VideoPlayer
      videoProps={{
        shouldPlay: true,
        resizeMode: Video.RESIZE_MODE_CONTAIN,
        source: {
          uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        },
      }}
      inFullscreen={true} */}
      {/* /> */}
       <View style={styles.container, {flex: 1, alignSelf: 'center'}}>
        <FlatList
          data={[
            { key: 'Tópicos auxiliares:' },
            { key: '1 - Genero MOBA: Multiplayer Online Battle Arena, duas equipes irão se enfrentar para destruir o Nexus inimigo;' },
            { key: '2 - O principal mapa de League of Legends se chama Summoners Rift;'},
            { key: '3 - O jogador deve escolher um campeão para entrar em uma partida gerenciada;' },
            { key: '4 - Existem mais de 146 campeões disponíveis para jogar;' },
            { key: '5 - Os jogadores tem disponivel Feitiços de Invocador para poder auxilar seu campeão em partida;' },
            { key: '6 - Todas as partidas gerenciadas são únicas, seja ela na fila Normal ou Ranqueada;' },
            { key: '7 - Para obter OURO é necessario causar o ultimo golpe nas tropas' }
            ]}
            renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
          />
        </View>
      </View>
    </SafeAreaView>
  </ImageBackground>
);
}

// function saveStorage (){
//   _storeData = async () => {
//     try {
//       await AsyncStorage.setItem('keyVideo', 'Video');
//     } catch (error) {
//       // Error saving data
//     }
//   };
// }

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

StarterScreen.navigationOptions = {
header: null,
};