import { createDrawerNavigator } from "@react-navigation/drawer";

import { Home } from "../pages/Home";
import { Profile } from "../pages/Profile";
import { Details } from "../pages/Details";

import { DrawerComponent } from "../components/DrawerComponent";

const Drawer = createDrawerNavigator();

export function Routes() {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerComponent {...props} />}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Details" component={Details} />
    </Drawer.Navigator>
  );
}
