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
import background from "../components/Background";
import Table from '../components/GlossaryTable';
import Anchor from '../components/LinkAnchor'

export default class GlossarioScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: null
    }
  };

  componentDidMount(){

    return fetch('http://localhost:1337/')
    .then( (response)=> response.json())
    .then( (responseJson) => {
      this.setState({
        isLoading: false,
        dataSource: responseJson.glossarios
      })
    })
    .catch((error) => {
      console.log(`O erro foi: ${error}`)
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
          <ScrollView style={styles.scrollView}>
            <View>
            <FlatList
              data={this.state.data}
              renderItem={({item}) => (
                <View>
                  <Text>{item.termo}/</Text>
              <Text>{item.significado}</Text>
                </View>
              )}
            />
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
