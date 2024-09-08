import { View, Text, ImageBackground } from 'react-native';
import React, { useState } from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';
import ProgressBar from './ProgressBar';
import NavBar from '@/components/NavBar'

const ResultGame = () => {
  const { selectedCountries } = useLocalSearchParams();
  const countries = selectedCountries ? JSON.parse(selectedCountries as string) : [];
  const totalNumber: number = 44;
  const percentageCalculator = (countries.length / totalNumber) * 100;
  const [percentage, setPercentage] = useState<number>(percentageCalculator);

  const router = useRouter();

  return (
    <ImageBackground
    source={require('@/assets/europe2.jpg')}
    resizeMode="cover"
    style={{ flex: 1 }}
  >
    <View className="flex-1 px-4 py-8">
      <View className="flex-1 justify-center items-center">
        <Text className="text-lg font-bold text-gray-800 mb-4 text-center">
          You have visited: <Text className="text-blue-600">{countries.length}</Text> {countries.length === 1 ? 'country' : 'countries'}
        </Text>
        <Text className="text-base font-bold text-gray-800 mb-6 text-center">
          That’s <Text className="font-semibold text-blue-600">{percentageCalculator.toFixed(2)}%</Text> of the countries in Europe!
        </Text>
        <ProgressBar percentage={percentage} />
      </View>


      <View style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
        <NavBar iconColor='black'/>
      </View>
    </View>
    </ImageBackground>
  );
};

export default ResultGame;
