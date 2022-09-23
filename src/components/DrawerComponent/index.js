import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

import {
  EvilIcons,
  Feather,
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";

export function DrawerComponent({ ...props }) {
  const navigation = useNavigation();
  const RouteNavigationPages = props.state.routes;
  const [activeH, setActiveH] = useState(false);
  const [activeP, setActiveP] = useState(false);
  const [activeD, setActiveD] = useState(false);

  // funcao para navegaçao da telas
  function handleNavigationPages(r) {
    if (r.name === "Home") {
      navigation.navigate("Home");
      setActiveH(true);
      setActiveD(false);
      setActiveP(false);
    } else if (r.name === "Profile") {
      navigation.navigate("Profile");
      setActiveP(true);
      setActiveH(false);
      setActiveD(false);
    } else if (r.name === "Details") {
      navigation.navigate("Details");
      setActiveD(true);
      setActiveP(false);
      setActiveH(false);
    } else {
      Alert.alert("Essa tela não esta disponivel!!");
    }
  }

  // funcao que retorna os icones das opcoes de menu
  function iconPages(r) {
    if (r.name === "Home") {
      return activeH ? (
        <Ionicons name="home" size={24} color="#FFF" />
      ) : (
        <Ionicons name="home-outline" size={24} color="#FFF" />
      );
    } else if (r.name === "Profile") {
      return activeP ? (
        <FontAwesome name="user-circle" size={24} color="#FFF" />
      ) : (
        <FontAwesome name="user-circle-o" size={24} color="#FFF" />
      );
    } else if (r.name === "Details") {
      return activeD ? (
        <MaterialCommunityIcons
          name="card-account-details"
          size={24}
          color="#FFF"
        />
      ) : (
        <MaterialCommunityIcons
          name="card-account-details-outline"
          size={24}
          color="#FFF"
        />
      );
    } else {
      Alert.alert("Icon não encontrado!!");
    }
  }

  // funcao queretorna se a opcao de menu esta ativa ou nao
  function layoutOpionsNavigation(r) {
    if (r.name === "Home") {
      return activeH ? styles.buttonH : styles.buttonHDesactivated;
    } else if (r.name === "Profile") {
      return activeP ? styles.buttonP : styles.buttonPDesactivated;
    } else if (r.name === "Details") {
      return activeD ? styles.buttonD : styles.buttonDDesactivated;
    } else {
      return styles.button;
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        {RouteNavigationPages.map((r) => {
          return (
            <TouchableOpacity
              key={r.key}
              style={layoutOpionsNavigation(r)}
              onPress={() => handleNavigationPages(r)}
            >
              {iconPages(r)}
              <Text style={styles.textButton}>{r.name}</Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <View style={{ width: "100%", marginHorizontal: 15 }}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => Alert.alert("Quer mesmo Sair ?")}
        >
          <SimpleLineIcons name="logout" size={24} color="#FFF" />

          <Text style={styles.textButton}>Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  button: {
    width: "90%",
    height: 50,
    borderRadius: 3,
    alignItems: "center",
    backgroundColor: "#D32F2F",
    flexDirection: "row",
    paddingLeft: 20,
    marginTop: 10,
  },

  buttonH: {
    width: "90%",
    height: 50,
    borderRadius: 3,
    alignItems: "center",
    backgroundColor: "#0288D1",
    flexDirection: "row",
    paddingLeft: 20,
    marginTop: 10,
  },

  buttonHDesactivated: {
    width: "90%",
    height: 50,
    borderRadius: 3,
    alignItems: "center",
    backgroundColor: "#29B6F6",
    // backgroundColor: "#FFF",
    flexDirection: "row",
    paddingLeft: 20,
    marginTop: 10,
  },

  buttonP: {
    width: "90%",
    height: 50,
    borderRadius: 3,
    alignItems: "center",
    backgroundColor: "#2E7D32",
    flexDirection: "row",
    paddingLeft: 20,
    marginTop: 10,
  },

  buttonPDesactivated: {
    width: "90%",
    height: 50,
    borderRadius: 3,
    alignItems: "center",
    backgroundColor: "#66BB6A",
    flexDirection: "row",
    paddingLeft: 20,
    marginTop: 10,
  },

  buttonD: {
    width: "90%",
    height: 50,
    borderRadius: 3,
    alignItems: "center",
    backgroundColor: "#ED6C02",
    flexDirection: "row",
    paddingLeft: 20,
    marginTop: 10,
  },

  buttonDDesactivated: {
    width: "90%",
    height: 50,
    borderRadius: 3,
    alignItems: "center",
    backgroundColor: "#FFA726",
    flexDirection: "row",
    paddingLeft: 20,
    marginTop: 10,
  },

  textButton: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFF",
    paddingHorizontal: 10,
  },
  iconButton: {
    color: "#FFF",
  },
});
