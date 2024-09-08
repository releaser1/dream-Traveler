import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router'; 
import NavBar from '@/components/NavBar';
import { trips } from '@/data/tripsData';

const Trips: React.FC = () => {
  const router = useRouter();
  const totalNames = trips.flatMap((item => item.places)).map((item) => item.name).length

  return (
    <ImageBackground source={require('@/assets/sky2.jpg')} className="flex-1 bg-cover p-3">
      <View className="flex-1 justify-center items-center">
        <Text className="text-center text-white text-2xl font-bold mb-8">
          Your journey around the world
        </Text>

        <TouchableOpacity 
          onPress={() => router.push('/PastTrips')} 
          className="w-full mb-6"
          activeOpacity={0.7} // Adds a visual effect when pressed
        >
          <View style={{ width: '95%', backgroundColor: '#ffffff', borderRadius: 12, flexDirection: 'row', alignItems: 'center', padding: 42, shadowColor: '#000', shadowOpacity: 0.2, shadowRadius: 4, shadowOffset: { width: 0, height: 2 }, alignSelf: 'center' }}>
            <View style={{ flex: 2 }}>
              <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#003284', marginBottom: 8 }}>
                Trip History
              </Text>
              <Text style={{ fontSize: 14, color: '#707070' }}>{ totalNames } Registered Trips</Text>
            </View>
            <ImageBackground
              source={require('@/assets/rome.jpg')}
              style={{ width: 120, height: 120, borderRadius: 8 }}
              resizeMode="cover"
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity 
          onPress={() => router.push('/NewPlanTrip')} 
          className="w-full"
          activeOpacity={0.7} // Adds a visual effect when pressed
        >
          <View style={{ width: '95%', backgroundColor: '#ffffff', borderRadius: 12, flexDirection: 'row', alignItems: 'center', padding: 42, shadowColor: '#000', shadowOpacity: 0.2, shadowRadius: 4, shadowOffset: { width: 0, height: 2 }, alignSelf: 'center' }}>
            <View style={{ flex: 2 }}>
              <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#003284', marginBottom: 8 }}>
                Trip Planning
              </Text>
              <Text style={{ fontSize: 14, color: '#707070' }}>1 Trip is waiting</Text>
            </View>
            <ImageBackground
              source={require('@/assets/rome.jpg')}
              style={{ width: 120, height: 120, borderRadius: 8 }}
              resizeMode="cover"
            />
          </View>
        </TouchableOpacity>
      </View>
        <SafeAreaView>
          <NavBar iconColor='black'/>
        </SafeAreaView>
    </ImageBackground>
  );
};

export default Trips;
