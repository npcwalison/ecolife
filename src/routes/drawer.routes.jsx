import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

const AppDrawer = createDrawerNavigator();

import Home from '../pages/Home';
import Logout from "../pages/Logout";
import New from "../pages/New";

export default function DrawerRoutes() {
    return (
        <AppDrawer.Navigator
            screenOptions={{
                headerShown: false,

                drawerStyle: {
                    backgroundColor: "#121222",
                    paddingTop: 20,
                },

                drawerActiveBackgroundColor: "#f15104",
                drawerActiveTintColor: "#fff",

                //drawerInactiveBackgroundColor: "#353566",
                drawerInactiveTintColor: "#fff"
            }}
        >
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
                name="New"
                component={New}
            />
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
                name="Logout"
                component={Logout}
            />
        </AppDrawer.Navigator>
    )
}