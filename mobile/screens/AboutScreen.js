import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  ImageBackground
} from "react-native";
import background from "../components/Background";
import logo from "../assets/images/logo.png";

export default function AboutScreen() {
  return (
    <ImageBackground source={background} style={{ flex: 1 }}>
      <SafeAreaView
        style={{
          flex: 1,
          paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0
        }}
      >
        <View style={{ flex: 1, alignSelf: "center", alignItems: "center" }}>
          <Image
            source={logo}
            style={{
              width: 250,
              height: 100,
              alignSelf: "center",
              marginVertical: 25
            }}
          />
          <Text
            style={{
              flex: 1,
              color: "white",
              marginHorizontal: 25,
              textAlign: "center"
            }}
          >
            Projeto 'League Guide' tem o proposito de catalogar informações
            sobre League of Legends.
          </Text>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

AboutScreen.navigationOptions = {
  header: null
};
