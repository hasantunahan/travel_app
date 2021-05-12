import React from 'react';
import Navigation from './src/core/init/navigation/navigation';
import { NavigationContainer } from '@react-navigation/native';
import { useColorScheme } from 'react-native';
import { DarkTheme } from './src/core/init/theme/color/dark_theme_color';
import { LightTheme } from './src/core/init/theme/color/light_theme_color';


const App = () => {

  const scheme = useColorScheme();
  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : LightTheme}>
      <Navigation />
    </NavigationContainer>
  )
}


export default App;