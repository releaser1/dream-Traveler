import React from 'react';
import { View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { useLocalSearchParams, useRouter  } from 'expo-router';
import Icon from 'react-native-vector-icons/FontAwesome5';


const TripDetail: React.FC = () => {
    const router = useRouter();
    const { place } = useLocalSearchParams();

    const parsedPlace = Array.isArray(place) ? JSON.parse(place[0]) : place ? JSON.parse(place) : null;

    const renderTransportIcon = (type: string) => {
      switch (type.toLowerCase()) {
        case 'plane':
          return <Icon name="plane" size={30} color="#4A90E2" />;
        case 'car':
          return <Icon name="car" size={30} color="#E94E77" />;
        case 'train':
          return <Icon name="train" size={30} color="#50C878" />;
        default:
          return null;
      }
    };

    if (!parsedPlace) {
      return <Text className="text-center text-lg font-bold mt-4">No details available</Text>;
    }

    return (
      <ImageBackground source={require('@/assets/sky2.jpg')} className="flex-1 p-4">
        <View className="flex-1 p-4 bg-white/80 rounded-xl shadow-lg">
          <Text className="text-2xl font-bold text-center my-4 text-gray-800">Trip Details</Text>
          
          <Image source={parsedPlace.image} className="w-full h-48 rounded-xl mb-4 border-2 border-gray-300" resizeMode="cover" />
          
          <View className="mb-4 p-4 bg-gray-100 rounded-lg border border-gray-200">
            <Text className="text-lg font-bold text-gray-600 mb-2">Country: <Text className="font-normal text-gray-800">{parsedPlace.name}</Text></Text>
            <Text className="text-lg font-bold text-gray-600 mb-2">Year: <Text className="font-normal text-gray-800">{parsedPlace.year || 'Year not available'}</Text></Text>
            <Text className="text-lg font-bold text-gray-600 mb-2">Transportation:</Text>
            <View className="mb-2 items-center">{renderTransportIcon(parsedPlace.transportationType || 'plane')}</View>
            <Text className="text-lg font-bold text-gray-600 mb-2">Trip Days: <Text className="font-normal text-gray-800">{parsedPlace.tripDays || 'N/A'}</Text></Text>
          </View>
          
          <TouchableOpacity onPress={() => router.back()} className="mt-5 p-3 bg-blue-500 rounded-lg shadow">
            <Text className="text-white text-center font-bold text-lg">Back</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  };

  export default TripDetail;
