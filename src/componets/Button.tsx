// src/components/Button.tsx
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { createGlobalStyles } from '../styles/global';

interface ButtonProps {
  label: string;
  onPress: () => void;
  type?: "number" | "operator" | "special";  // Type of button (optional)
}

const Button: React.FC<ButtonProps> = ({ label, onPress, type = "number" }) => {
  const { isDarkMode } = useTheme()!; 
  const Styles = createGlobalStyles(isDarkMode);  

  
  const getButtonStyle = () => {
    if (type === "operator") {
      return Styles.blueBtn;
    } else if (type === "special") {
      return Styles.greyBtn;
    }
    return Styles.numBtn;  // Default to numeric button
  };

  return (
    <TouchableOpacity onPress={onPress} style={[Styles.button, getButtonStyle()]}>
      <Text style={Styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;

