import React from 'react';
import { View, Switch, SafeAreaView } from 'react-native';
import { ThemeProvider, useTheme } from './src/context/ThemeContext';
import { createGlobalStyles } from './src/styles/global';
import Keyboard from './src/componets/Keyboard';


const CalculatorScreen = () => {
  const { isDarkMode, toggleTheme } = useTheme()!;  
  const Styles = createGlobalStyles(isDarkMode);   

  return (
    <SafeAreaView style={Styles.safeArea}>
        <View style={Styles.container}>
          <View style={Styles.switchContainter}>
            <Switch
               value={isDarkMode}
               onValueChange={toggleTheme}
            />
          </View>
          <Keyboard 
          />
       </View>

    </SafeAreaView>
       

    
  );
};


// The App component wraps everything in ThemeProvider
export default function App() {
  return (
    <ThemeProvider>
      <CalculatorScreen />
    </ThemeProvider>
  );
}

