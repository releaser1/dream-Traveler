import React, { useState } from 'react';
import { View, Text, ImageBackground, ScrollView, Image, TouchableOpacity, Modal } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { continentInfo, continentCountryCount} from '@/data/continent.data';


const ExploreContinent: React.FC = () => {
  const { name, description, image, description2 } = useLocalSearchParams(); // Getting the data from index.js
  const [selectedImage, setSelectedImage] = useState<string | null>(null); // to handle the selected image
 
  
  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };


  const selectedContinent = continentInfo.find(continent => continent.name === name);
  const gallery = selectedContinent?.gallery || [];
  
  //Checking if it is a string
  const countryCount = typeof name === 'string' ? continentCountryCount[name] || '' : '';

  return (
    <View className="flex-1">
      <ImageBackground
        source={image}
        className="h-64 justify-end rounded-xl overflow-hidden"
        resizeMode="cover"
      >
  
        <View className="bg-slate-200  py-3 px-4 flex-row justify-between items-center rounded-t-xl">
          <Text className="text-lg font-bold text-gray-800">Explore {name}</Text>
          <View className="flex-row items-center">
            <Text className="text-lg font-bold text-gray-600">
                {continentCountryCount[name] || ''}
            </Text>
          </View>
        </View>
      </ImageBackground>

      <View className="flex-1 justify-between">
  <View className="bg-white/85 p-4 rounded-xl m-4 flex-1">
    <Text className="text-2xl font-bold text-gray-800 mb-4">About</Text>
    <Text className="text-base text-gray-800 mb-4 text-justify leading-6">
      {description}
    </Text>
    <Text className="text-2xl font-bold text-gray-800 mb-4">Did You Know Facts:</Text>
    <Text className="text-base text-gray-800 mb-4 text-justify leading-6" style={{ textAlign: 'justify', lineHeight: 24 }}>
      {description2}
    </Text>
  </View>

  <View className="p-4">
    <Text className="text-xl font-bold px-4">Gallery</Text>
    <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row p-4">
      {gallery.map((image, index) => (
        <TouchableOpacity key={index} onPress={() => handleImageClick(image)}>
          <Image source={image} className="w-24 h-20 rounded-lg mr-2" />
        </TouchableOpacity>
      ))}
    </ScrollView>
  </View>
</View>

      {/* Modal for image */}
      {selectedImage && (
        <Modal visible={true} transparent={true} animationType="fade">
          <TouchableOpacity
            className="flex-1 justify-center items-center bg-black/80"
            onPress={() => setSelectedImage(null)} // Close modal onClick
          >
            <Image source={selectedImage} className="w-[90%] h-[70%] rounded-xl" resizeMode="contain" />
          </TouchableOpacity>
        </Modal>
      )}
    </View>
  );
};

export default ExploreContinent;
