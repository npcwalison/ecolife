import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

const AppDrawer = createDrawerNavigator();

import Home from '../pages/Home';

export default function DrawerRoutes() {
    return (
        <AppDrawer.Navigator>
            <AppDrawer.Screen
                options={{
                    headerStyle: {
                        backgroundColor: "#353566",
                        borderBottomColor: "#222"
                    },
                    headerTintColor: '#fff',
                    headerTitle: '',
                    headerBackTitleVisible: false
                }}
                name="Home"
                component={Home}
            />
        </AppDrawer.Navigator>
    )
}