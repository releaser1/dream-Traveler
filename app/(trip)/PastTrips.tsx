import React from 'react';
import { View, Text, ImageBackground, ScrollView, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';
import NavBar from '@/components/NavBar';
import { trips } from '@/data/tripsData';

const TripHistory: React.FC = () => {
  const router = useRouter();

  const handlePlacePress = (place: any, year: any) => {
    router.push({
      pathname: '/TripDetail',
      params: { place: JSON.stringify({...place, year}) }
    });
  };

  return (
    <ImageBackground source={require('@/assets/sky2.jpg')} style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <Text style={{ textAlign: 'center', fontSize: 24, fontWeight: 'bold', marginVertical: 16 }}>TRIP HISTORY</Text>
        {trips.map((trip, index) => (
          <View key={index} style={{ marginBottom: 32 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center', color: '#003284', marginBottom: 8 }}>{trip.year}</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ flexDirection: 'row', marginBottom: 8 }}>
              {trip.places.map((place, idx) => (
                <TouchableOpacity 
                  key={idx} 
                  onPress={() => handlePlacePress(place, trip.year)} 
                  style={{ 
                    alignItems: 'center', 
                    marginRight: 8, 
                    padding: 12, 
                    borderRadius: 8, 
                    backgroundColor: '#ffffff', 
                    flexDirection: 'row', 
                    elevation: 2,
                  }}
                >
                  <View style={{ flex: 2, paddingRight: 8 }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#003284' }}>{place.name}</Text>
                    <Text style={{ fontSize: 14, color: '#707070', marginTop: 4 }}>20% complete</Text>
                  </View>
                  <Image 
                    source={place.image} 
                    style={{ 
                      width: 60, 
                      height: 60, 
                      borderRadius: 8, 
                      marginLeft: 'auto',
                      flex: 1
                    }} 
                    resizeMode="cover" 
                  />
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        ))}
        <TouchableOpacity onPress={() => router.push('/AddTrip')} className="mt-5 p-3 bg-green-500 rounded-lg shadow">
          <Text className="text-white text-center font-bold text-lg">Add Trip</Text>
        </TouchableOpacity>
      </ScrollView>
      <SafeAreaView>
          <NavBar iconColor='black'/>
        </SafeAreaView>
    </ImageBackground>
  );
};

export default TripHistory;
