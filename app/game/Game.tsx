import React, { useState } from 'react';
import { View, Text, FlatList, ImageBackground } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '@/components/CustomButton';
import { continentCountries } from '@/data/continent.data'
import { useRouter } from 'expo-router';
import NavBar from '@/components/NavBar';


const NatureMeditate: React.FC = () => {
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);

  const router = useRouter()

  const handleSelectCountry = (country: string) => {
    if (country && !selectedCountries.includes(country)) {
      setSelectedCountries([...selectedCountries, country]);
    }
  };

  const renderCountryItem = ({ item }: { item: string }) => (
    <View style={{ padding: 8, backgroundColor: '#E5E7EB', borderRadius: 8, marginBottom: 8 }}>
      <Text>{item}</Text>
    </View>
  );

  return (
    <ImageBackground
      source={require('@/assets/europe.jpg')}
      resizeMode="cover"
      style={{ flex: 1 }}
    >
      <SafeAreaView style={{ flex: 1, padding: 16 }}>
        <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: 16, borderRadius: 8, marginBottom: 16}}>
          <Text style={{ fontSize: 26, color: 'white', textAlign: 'center' }}>Choose how many countries have you visited from:</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 16 }}>
          <Text className='text-center text-white font-bold text-4xl px-3'>
             Europe
          </Text>
          <RNPickerSelect
            onValueChange={(value) => handleSelectCountry(value as string)}
            items={continentCountries
              .filter((country) => !selectedCountries.includes(country)) // Exclude țările selectate
              .map((country) => ({
                label: country,
                value: country,
              }))}
            placeholder={{ label: 'Select a country', value: '' }}
            style={{
              inputIOS: {
                paddingVertical: 12,
                paddingHorizontal: 10,
                borderWidth: 1,
                borderColor: 'white',
                borderRadius: 4,
                color: 'white',
                paddingRight: 30,
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
              },
              inputAndroid: {
                paddingVertical: 12,
                paddingHorizontal: 10,
                borderWidth: 1,
                borderColor: 'white',
                borderRadius: 4,
                color: 'white',
                width: 220,
                paddingRight: 30,
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
              },
              placeholder: {
                color: 'white',
              },
            }}
            useNativeAndroidPickerStyle={false}
          />
        </View>
        <FlatList
          data={selectedCountries}
          renderItem={renderCountryItem}
          keyExtractor={(item) => item}
          contentContainerStyle={{ paddingBottom: 100 }}
          style={{ marginTop: 8 }}
        />
         <View>
          <CustomButton 
            onPress={ () => router.push({
              pathname: './result-game',
              params: { selectedCountries: JSON.stringify(selectedCountries) }, 
            })} 
            title="Get your result"
            disabled={selectedCountries.length === 0}
            >
          </CustomButton>
        </View> 
      </SafeAreaView>
        <SafeAreaView>
          <NavBar />
        </SafeAreaView>
    </ImageBackground>
  );
};

export default NatureMeditate;
