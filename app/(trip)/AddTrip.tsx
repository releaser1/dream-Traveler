import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView, ImageBackground } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useRouter } from 'expo-router';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { trips } from '@/data/tripsData';

const AddTrip: React.FC = () => {
  const router = useRouter();
  const [country, setCountry] = useState('');
  const [year, setYear] = useState('');
  const [transportation, setTransportation] = useState('plane');
  const [tripDays, setTripDays] = useState('');
  const [image, setImage] = useState<any>(null);
  
  const handleChooseImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleAddTrip = () => {
    if (country && year && transportation && image && tripDays) {
      const newTrip = {
        name: country, 
        year: parseInt(year),
        transportationType: transportation,
        tripDays: parseInt(tripDays), // This can be changed as needed
        image: { uri: image },
      };

      const yearExists = trips.find(trip => trip.year === newTrip.year);

      if (yearExists) {
        yearExists.places.push(newTrip);
      } else {
        trips.push({ year: newTrip.year, places: [newTrip] });
      }

      router.push('/');
    } else {
      alert('Please fill all fields');
    }
  };

  return (
    <ImageBackground source={require('@/assets/sky2.jpg')} className="flex-1 bg-cover p-3">
    <ScrollView className="flex-1 p-4">
      <Text className="text-2xl font-bold text-center mb-4">Add New Trip</Text>

      <TouchableOpacity onPress={handleChooseImage} className="mb-4 bg-blue-500 p-3 rounded-lg">
        <Text className="text-white text-center font-bold">Choose Image</Text>
      </TouchableOpacity>

      {image && (
        <Image source={{ uri: image }} className="w-full h-48 rounded-lg mb-4" resizeMode="cover" />
      )}

      <TextInput
        placeholder="Country"
        value={country}
        onChangeText={setCountry}
        className="border border-gray-300 p-3 rounded-lg mb-4"
      />

      <TextInput
        placeholder="Year"
        value={year}
        onChangeText={setYear}
        keyboardType="numeric"
        className="border border-gray-300 p-3 rounded-lg mb-4"
      />
            <TextInput
        placeholder="Number of days, spent on vacation"
        value={tripDays}
        onChangeText={setTripDays}
        keyboardType="numeric"
        className="border border-gray-300 p-3 rounded-lg mb-4"
      />

      <Text className="text-lg font-bold mb-2">Transportation</Text>
      <View className="flex-row justify-around mb-4">
        <TouchableOpacity onPress={() => setTransportation('plane')} className={`p-3 rounded-lg ${transportation === 'plane' ? 'bg-blue-500' : 'bg-gray-200'}`}>
          <Icon name="plane" size={30} color={transportation === 'plane' ? '#FFF' : '#4A90E2'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setTransportation('car')} className={`p-3 rounded-lg ${transportation === 'car' ? 'bg-blue-500' : 'bg-gray-200'}`}>
          <Icon name="car" size={30} color={transportation === 'car' ? '#FFF' : '#E94E77'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setTransportation('train')} className={`p-3 rounded-lg ${transportation === 'train' ? 'bg-blue-500' : 'bg-gray-200'}`}>
          <Icon name="train" size={30} color={transportation === 'train' ? '#FFF' : '#50C878'} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={handleAddTrip} className="mt-5 p-3 bg-green-500 rounded-lg shadow">
        <Text className="text-white text-center font-bold text-lg">Add Trip</Text>
      </TouchableOpacity>
    </ScrollView>
    </ImageBackground>
  );
};

export default AddTrip;
