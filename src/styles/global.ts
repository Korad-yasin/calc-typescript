// src/styles/global.ts
import { StyleSheet } from 'react-native';
import {light, dark} from './Colors'


export const createGlobalStyles = (isDarkMode: boolean) => 
  StyleSheet.create({
    safeArea: {
      flex: 1,
    },
    container: {
      flex: 1,
      backgroundColor: isDarkMode ? dark.background : light.background,  
      alignItems: 'center',
      
    },
    switchContainter: {
      flex: 2,
      alignItems: 'center', 
      justifyContent: 'center',

    },
    keyboardContainer: {
      flex: 8,
      justifyContent: 'space-around',
      
    },
    displayContainer : {
      flex: 2,
      alignItems: 'center',
      
    },
    calculation: {
      flex: 0.4,
      padding: 5,
      width: '100%',
      alignItems: 'flex-end', 
      justifyContent: 'center',

    },
    resultsCalc: {
      flex: 0.6,
      padding: 5,
      width: '100%',
      alignItems: 'flex-end', 
      justifyContent: 'flex-end',

    },
    buttonContainer: {
      flex: 8,
      justifyContent: 'center',
      alignItems: 'center',
      
    },
    button: {
      width: 80,
      height: 80,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 30, 
      elevation: 3,
      margin: 8,
    },

    numBtn: {
      backgroundColor: isDarkMode ? dark.numBtn : light.numBtn, 
    },

    blueBtn: {
      backgroundColor: isDarkMode ? dark.blueBtn : light.blueBtn, 
    },

    greyBtn: {
      backgroundColor: isDarkMode ? dark.greyBtn : light.greyBtn, 
    },

    
    buttonText: {
      fontSize: 32,
      color: isDarkMode ? dark.numTxt : light.numTxt, 
    },

    optText: {
      fontSize: 32,
      color: isDarkMode ? dark.optTxt : light.optTxt, 
    },
    calculationText: {
        fontSize: 24,  
        marginRight: 10, 
        color: isDarkMode ? dark.calcTxt : light.calcTxt,
        fontWeight: '500',
    },
    resultText: {
        fontSize: 48,  
        marginRight: 10,  
        color: isDarkMode ? dark.numTxt : light.numTxt,
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
 
    },
  });
