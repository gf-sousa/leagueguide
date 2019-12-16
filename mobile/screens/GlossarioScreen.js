import React from "react";
import {
  View,
  Text,
  Platform,
  StatusBar,
  SafeAreaView,
  ImageBackground,
  StyleSheet,
  ScrollView
} from "react-native";
import background from "../components/Background";
import { Table, Row, Rows } from "react-native-table-component";
import Anchor from '../components/LinkAnchor'

export default class GlossarioScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ["Termo", "Significado"],
      tableData: [
        [
          "Role",
          "Termo utilizado para se referir a rota que você está jogando. Por exemplo, minha role é mid."
        ],
        ["Top", "Nos referimos a rota do topo"],
        ["Jungle", "Nos referimos a selva."],
        ["Mid", "Nos referimos a rota do meio."],
        ["Bot / Adc", "Nos referimos a rota inferior, e a role de atirador."],
        ["Sup", "Nos referimos a rota inferior, e a role de suporte."],
        [
          "Invade",
          "É uma ação que um jogador faz, no caso, de entrar na selva inimiga."
        ],
        ["Wave", "Nos refirimos a onda de tropas."],
        [
          "Push",
          "É uma ação que um jogador faz, no caso, de empurrar a wave. Essa ação faz com que as tropas avancem mais rápido."
        ],
        [
          "Gank",
          "É uma ação que um jogador faz, no caso, ele ajuda um companheiro de equipe fazendo uma emboscada para abater o inimigo."
        ],
        [
          "Swap",
          "É uma ação que a equipe faz, no caso, eles invertem a rota que estão"
        ],
        [
          "Dive",
          "É uma ação que a equipe faz, no caso, eles 'mergulham' para abater os inimigos de baixo da torre."
        ],
        [
          "Harass",
          "É uma ação que um jogador faz, no caso, ele irá causar um dano explosivo no inimigo, com a intenção de reduzir sua barra de vida."
        ],
        [
          "Tracking",
          "Se trata de você reconhecer o posicionamento do inimigo na Névoa de Guerra."
        ],
        [
          "Névoa de Guerra",
          "É um detalhe do mapa que impede de você enxergar, a não ser que você ou algum aliado esteja para dar visão, ou uma ward, ou uma torre."
        ],
        [
          "Ward",
          "Ward é o termo para se referir a totem de sentinela. Ela dá visão para sua equipe em uma determinada área na Fog."
        ],
        ["Fog", "Termo para se referir a Névoa de Guerra."],
        [
          "Pink",
          "É uma sentinela de controle que pode ser comprada por 75 de ouro, e ela controla uma área revelando totens de sentinelas inimigas e bloqueando elas."
        ],
        ["Pathing", "É você ter reconhecimento do caminho que o oponente fez."],
        [
          "Shadow",
          "É o ato de um jogador dar cover na fog enquanto um aliado está fazendo Split. "
        ],
        [
          "Cover",
          "É uma ação de um jogador dar cobertura para um aliado na rota, objetivo ou split."
        ],
        [
          "Freeze",
          "É a ação de manipular a wave de maneira que as tropas fiquem se enfrntando em um ponto especifico da rota."
        ],
        [
          "Trade",
          "É uma decisão em equipe de abandonar um objetivo para pegar outro. Este termo também é utilizado para se referir a uma troca de dano entre dois jogadores."
        ],
        [
          "All win",
          "Um termo importado do poker, se trata de usar todos os recursos disponíveis para abater o oponente."
        ],
        [
          "Poke",
          "É a ação de causar pouco de dano no inimigo ao decorrer do tempo com suas habilidades."
        ],
        [
          "Split",
          "É a ação de um jogador empurrar uma rota lateral para danificar uma torre."
        ]
      ]
    };
  };
  render() {
    const state = this.state;
    return (
      <ImageBackground
        source={background}
        style={{ width: "100%", height: "100%" }}
      >
        <SafeAreaView
          style={{
            flex: 1,
            paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0
          }}
        >
          <ScrollView style={styles.scrollView}>
            <View>
              <Table borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }}>
                <Row
                  data={state.tableHead}
                  style={styles.head}
                  textStyle={styles.text}
                />
                <Rows data={state.tableData} textStyle={styles.text} />
              </Table>
            </View>
            <Anchor href="http://ifms.edu.br/">Conhece algum termo que está faltando? Entre em contato conosco!</Anchor>
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    );
  }
}
GlossarioScreen.navigationOptions = {
  header: null
};





const styles = StyleSheet.create({
  container: { flex: 1, padding: 12, paddingTop: 2, width: 120 },
  head: { height: 40, backgroundColor: "#7852ff" },
  text: {
    textAlign: "justify",
    margin: 6,
    color: "#fff",
    fontSize: 14,
    alignSelf: "center"
  },
  scrollView: { marginHorizontal: 20 }
});
