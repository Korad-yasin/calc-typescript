// src/components/Keyboard.tsx
import React, {useState} from "react";
import { View, Text } from "react-native";
import { createGlobalStyles } from '../styles/global';
import { useTheme } from '../context/ThemeContext';
import Button from "./Button";

export default function Keyboard() {

    const { isDarkMode } = useTheme()!;  
    const Styles = createGlobalStyles(isDarkMode);
    

    const [currentInput, setCurrentInput] = useState('');
    const [previousValue, setPreviousValue] = useState('');
    const [operator, setOperator] = useState('');
    const [result, setResult] = useState('');

    const displaySequence = `${previousValue} ${operator} ${currentInput}`.trim();

    

    const clearInput = () => {
        setCurrentInput('');
        setPreviousValue('');
        setOperator('');
        setResult('');
    };

    const handleInput = (input: string) => {
        if (["+", "-", "×", "÷"].includes(input)) {
          setOperator(input);
          if (result) {
            setPreviousValue(result);  
            setResult('');  
          } else {
            setPreviousValue(currentInput);
          }
          setCurrentInput('');  
        } else if (input === "%") {
          setCurrentInput((prev) => (parseFloat(prev) / 100).toString());  
        } else if (input === "+/-") {
          setCurrentInput((prev) => (parseFloat(prev) * -1).toString());  
        } else if (input === "⌫") {
          setCurrentInput((prev) => prev.slice(0, -1));  
        } else {
          setCurrentInput((prev) => prev + input); 
        }
    };

    const calculateResult = (): void => {
        if (!previousValue || !currentInput || !operator) {
          setResult("Error");
          return;
        }
      
        let calculation: number | undefined;  // Calculation will be a number or undefined
        const prev = parseFloat(previousValue);
        const curr = parseFloat(currentInput);
      
        // Perform calculation
        if (operator === "+") calculation = prev + curr;
        if (operator === "-") calculation = prev - curr;
        if (operator === "×") calculation = prev * curr;
        if (operator === "÷") calculation = prev / curr;
      
        if (calculation !== undefined && !isNaN(calculation)) {
          setResult(calculation.toString());
          setPreviousValue(calculation.toString());  
          setCurrentInput('');  
          setOperator('');  
        } else {
          setResult("Error");
        }
    };

    const formatResult = (result: string) => {
      if (result.length > 12) {
        return parseFloat(result).toPrecision(12);  // Limit total number of digits
      }
      return result;
    };
      

    

    



    return (
        <View style={Styles.keyboardContainer}>
            <View style={Styles.displayContainer}>
                 <View style={Styles.calculation}>
                    <Text style={Styles.calculationText} >{displaySequence}</Text>
                </View>
                <View style={Styles.resultsCalc} >
                     <Text style={Styles.resultText} >{result ? formatResult(result) : "0"}</Text>
                </View>
            </View>
            <View style={Styles.buttonContainer}>
                <View style={Styles.row}>
                    <Button label="C" onPress={clearInput} type="special"/>
                    <Button label="+/-" onPress={() => handleInput("+/-")} type="special"/>
                    <Button label="%" onPress={() => handleInput("%")} type="special"/>
                    <Button label="×" onPress={() => handleInput("×")} type="operator"/>

                </View>
                <View style={Styles.row} >
                    <Button label="7" onPress={() => handleInput("7")} type="number" />
                    <Button label="8" onPress={() => handleInput("8")} type="number"/>
                    <Button label="9" onPress={() => handleInput("9")} type="number"/>
                    <Button label="÷" onPress={() => handleInput("÷")} type="operator"/>

                </View>
                <View style={Styles.row}>
                    <Button label="4" onPress={() => handleInput("4")} type="number"/>
                    <Button label="5" onPress={() => handleInput("5")} type="number"/>
                    <Button label="6" onPress={() => handleInput("6")} type="number"/>
                    <Button label="-" onPress={() => handleInput("-")} type="operator"/>

                </View>
                <View style={Styles.row}>
                    <Button label="1" onPress={() => handleInput("1")} type="number"/>
                    <Button label="2" onPress={() => handleInput("2")} type="number"/>
                    <Button label="3" onPress={() => handleInput("3")} type="number"/>
                    <Button label="+" onPress={() => handleInput("+")} type="operator"/>

                </View>
                <View style={Styles.row}>
                    <Button label="." onPress={() => handleInput(".")} type="number"/>
                    <Button label="0" onPress={() => handleInput("0")} type="number"/>
                    <Button label="⌫" onPress={() => handleInput("⌫")} type="number"/>
                    <Button label="=" onPress={calculateResult} type="operator"/>

                </View>
            

            </View>

        </View>

    );
}






