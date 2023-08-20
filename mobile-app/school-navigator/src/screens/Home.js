import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import Catalog from "./Catalog";
import {globalStyles} from "../styles/globalStyles";
import SchoolPage from "./SchoolPage";
import { Image } from 'expo-image';

const Stack = createStackNavigator();

export default function Home() {
    const backArrow = () => (
        <Image
            source={require('../../assets/back-arrow.png')}
            style={{width: 25, height: 25, tintColor: '#ffffff', marginLeft: 20, padding: 13}}
        />
    );

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={"Catalog"} backBehavior={'history'} screenOptions={{
                headerStyle: globalStyles.header,
                headerTitleStyle: globalStyles.headerText,
                headerTitleAlign: "center",
                headerBackImage: backArrow,
                headerBackTitleVisible: false,
            }}>
                <Stack.Screen name={"Catalog"} component={Catalog} options={{
                    headerTitle: "Навигатор школ"
                }}/>
                <Stack.Screen name={"SchoolPage"} component={SchoolPage}
                              options={({route}) => (
                                  {
                                      title: route.params.school.name,
                                      headerTitleStyle: [globalStyles.headerText, {marginLeft: 25}],
                                  }
                              )
                }/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}