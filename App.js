import { StateProvider } from './AppState';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import Layout from './_Layout';
import React, { useState , useCallback} from 'react';
import {
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useFonts } from 'expo-font';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SplashScreen } from 'expo-router';





function App() {
  library.add(fab)
  library.add(fas)
  const [fontsLoaded, fontError] = useFonts({
    'amaranth': require('./assets/fonts/amaranth.ttf'),
    'roboto': require('./assets/fonts/roboto.ttf'),
    'montserrat': require('./assets/fonts/montserrat.ttf'),
    'palatino-linotype': require('./assets/fonts/palatino-linotype.ttf'),
    'museo-moderno': require('./assets/fonts/museo-moderno.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (

    <StateProvider>
     <SafeAreaView style={{backgroundColor:'black'}}>
      <View className="w-screen h-full flex justify-center items-center" onLayout={onLayoutRootView}>
        {/* <NavigationContainer> */}
        <Layout />
        {/* <View>
        <Text className="">asdadsf</Text>
      </View> */}
        {/* </NavigationContainer> */}
      </View>
      </SafeAreaView>
    </StateProvider>

  );
}
export default App;
