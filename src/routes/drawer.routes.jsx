import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

const AppDrawer = createDrawerNavigator();

import Home from '../pages/Home';

export default function DrawerRoutes() {
    return (
        <AppDrawer.Navigator>
            <AppDrawer.Screen
                name="Home"
                component={Home}
            />
        </AppDrawer.Navigator>
    )
}