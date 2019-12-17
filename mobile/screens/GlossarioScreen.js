import React from "react";
import {
  View,
  Text,
  Platform,
  StatusBar,
  SafeAreaView,
  ImageBackground,
  StyleSheet,
  ScrollView,
  FlatList
} from "react-native";
import { DataTable } from "react-native-paper";
import background from "../components/Background";
import Anchor from "../components/LinkAnchor";

export default class GlossarioScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: null
    };
  }

  componentDidMount() {
    return fetch("http://10.11.33.125:1337/glossarios")
      .then(response =>
        response.json().then(responseJson => {
          console.log(responseJson);
          this.setState({
            isLoading: false,
            dataSource: responseJson
          });
        })
      )
      .catch(error => {
        console.log(`O erro foi: ${error}`);
      });
  }

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
          {!this.state.isLoading ? (
            <ScrollView style={styles.scrollView}>
              <View style={{ backgroundColor: "#f0f0f0", borderWidth: 2 }}>
                <DataTable style={{}}>
                  <DataTable.Header>
                    <DataTable.Title>Termo</DataTable.Title>
                    <DataTable.Title>Significados</DataTable.Title>
                  </DataTable.Header>
                  {this.state.dataSource.map(row => {
                    return (
                      <DataTable.Row key={row.id}>
                        <DataTable.Cell>{row.termo}</DataTable.Cell>
                        <DataTable.Cell>{row.significado}</DataTable.Cell>
                      </DataTable.Row>
                    );
                  })}
                </DataTable>
              </View>
              {/* <Anchor href="http://ifms.edu.br/">
                Conhece algum termo que está faltando? Entre em contato conosco!
              </Anchor> */}
            </ScrollView>
          ) : (
            <Text>Carregando</Text>
          )}
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
