import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import { Routes } from "./src/router/drawer.routes";

export default function App() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}
