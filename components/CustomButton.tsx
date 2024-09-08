import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

interface CustomButtonProps {
    onPress: () => void;
    title: string;
    textStyles?: string;
    containerStyles?: string;
    disabled?: boolean;
}

const CustomButton = ({
    onPress,
    title,
    textStyles = "",
    containerStyles = "",
    disabled = false,
}: CustomButtonProps) => {
  return (
    <TouchableOpacity 
      activeOpacity={0.7}
      className={`rounded-xl min-h-[62px] justify-center items-center px-4 ${
        disabled ? 'bg-gray-400' : 'bg-white'
      } ${containerStyles}`}
      onPress={disabled ? undefined : onPress}
      disabled={disabled}
    >
      <Text className={`font-semibold text-lg ${
        disabled ? 'text-gray-700' : 'text-black'
      } ${textStyles}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton