// app/App.tsx
import React from 'react';
import { View, Text, ImageBackground, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import AppGradient from '@/components/AppGradient';
import NavBar from '@/components/NavBar';
import { continentInfo } from '../data/continent.data';

const App: React.FC = () => {
  const router = useRouter();

  // Function whih send data to ExploreContinent
  const handleCardClick = (continent: any) => {
    router.push({
      pathname: '../homeScreen/ContinentDetail', // Route for ExploreContinent
      params: { name: continent.name, description: continent.description, image: continent.image, description2: continent.description2},
    });
  };

  return (
    <View className='flex-1'>
      <ImageBackground
        source={require('../assets/sky.jpg')} 
        resizeMode='cover'
        className='flex-1'
      >
        <AppGradient colors={["rgba(0, 0, 0, 0.4)", "rgba(0, 0, 0, 0.8)"]}>
          <SafeAreaView className='flex-1 my-12 justify-between'>
            <View>
              <Text className='text-center text-white font-bold text-4xl'>
                Are you ready for your next Trip?
              </Text>
              <Text className='text-center text-white text-regular text-2xl mt-3'>
                Which continent do you want to visit next?
              </Text>
            </View>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingVertical: 20 }}
              className='rounded-lg'
            >
              {continentInfo.map((continent, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => handleCardClick(continent)} 
                  className='mr-4 w-40 h-40 bg-[#d8d3d1] rounded-lg overflow-hidden'
                  style={{ elevation: 3 }} 
                >
                  <Image 
                    source={continent.image} 
                    className='w-full h-24' 
                    resizeMode='cover' 
                  />
                  <View className='p-2 m-auto'>
                    <Text className='text-center text-lg font-bold'>{continent.name}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </SafeAreaView>
            <StatusBar style="light" />
              <SafeAreaView>
                <NavBar />
              </SafeAreaView>
        </AppGradient>
      </ImageBackground>
    </View>
  );
};

export default App;
