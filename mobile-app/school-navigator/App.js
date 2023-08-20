import React, {useState, useEffect, useCallback} from "react";
import {SafeAreaView, StatusBar} from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from "expo-font";
import Home from "./src/screens/Home";
import {globalStyles} from "./src/styles/globalStyles";

SplashScreen.preventAutoHideAsync().catch((e) => console.warn(e));

export default function App() {
    const [appIsReady, setAppIsReady] = useState(false);

    useEffect(() => {
        Font.loadAsync({
            'os-regular': require('./assets/fonts/OpenSans-Regular.ttf'),
            'os-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
            'os-bold-it': require('./assets/fonts/OpenSans-BoldItalic.ttf'),
            'os-light': require('./assets/fonts/OpenSans-Light.ttf'),
            'os-light-it': require('./assets/fonts/OpenSans-LightItalic.ttf')
        }).then(() => {
            setAppIsReady(true);
        }).catch(e => console.warn(e));
    }, []);

    const onLayoutRootView = useCallback(async () => {
        if (appIsReady) {
            await SplashScreen.hideAsync();
        }
    }, [appIsReady]);

    if (!appIsReady) {
        return null;
    }

    return (
        <>
            <StatusBar barStyle={"light-content"}/>
            <SafeAreaView onLayout={onLayoutRootView} style={globalStyles.mainSafeArea}>
                <Home/>
            </SafeAreaView>
        </>
    );
}
