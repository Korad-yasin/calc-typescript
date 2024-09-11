import React from 'react';
import { View, Switch } from 'react-native';
import { ThemeProvider, useTheme } from './src/context/ThemeContext';
import { createGlobalStyles } from './src/styles/global';

// The CalculatorScreen is where you use the theme context
const CalculatorScreen = () => {
  const { isDarkMode, toggleTheme } = useTheme()!;  // Access the theme and toggle function from the context
  const styles = createGlobalStyles(isDarkMode);   // Apply styles based on the theme

  return (
    <View style={styles.container}>
      <Switch
        value={isDarkMode}
        onValueChange={toggleTheme}
      />
    </View>
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

