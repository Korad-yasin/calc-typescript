// src/styles/global.ts
import { StyleSheet } from 'react-native';
import {light, dark} from './Colors'

// This function will return the appropriate styles based on the theme
export const createGlobalStyles = (isDarkMode: boolean) => 
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDarkMode ? dark.background : light.background,  
      justifyContent: 'center', 
      alignItems: 'center', 
    },
  });
