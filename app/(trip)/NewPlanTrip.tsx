import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import TripSummary from './TripSummary'; 
import { continentCountries } from '@/data/continent.data'

const TravelForm: React.FC = () => {
  const [transportation, setTransportation] = useState<string>('Plane');
  const [country, setCountry] = useState<string>('France');
  const [title, setTitle] = useState<string>('');
  const [fromDate, setFromDate] = useState<Date | null>(null);
  const [toDate, setToDate] = useState<Date | null>(null);
  const [note, setNote] = useState<string>('');
  const [showFromDatePicker, setShowFromDatePicker] = useState<boolean>(false);
  const [showToDatePicker, setShowToDatePicker] = useState<boolean>(false);
  const [isTripAdded, setIsTripAdded] = useState<boolean>(false);

  const handleAddTrip = () => {
    if (fromDate && toDate) {
      setIsTripAdded(true);
    }
  };

  return (
    <ImageBackground source={require('@/assets/sky2.jpg')} style={{ flex: 1 }}>
    <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }} className="p-5">
      {isTripAdded ? (
        <TripSummary
          title={title}
          transportation={transportation}
          country={country}
          fromDate={fromDate}
          toDate={toDate}
          note={note}
        />
      ) : (
        <>
          <Text className="text-2xl font-bold text-black mt-8 mb-5 text-center">Add Travel Log</Text>

          <Text className="text-xl font-bold text-black mb-2">Select Transportation</Text>
          <View className="border border-gray-300 rounded mb-4 bg-white">
            <Picker
              selectedValue={transportation}
              onValueChange={(itemValue) => setTransportation(itemValue)}
              style={{ height: 50 }}
            >
              <Picker.Item label="Plane" value="plane" />
              <Picker.Item label="Car" value="car" />
              <Picker.Item label="Train" value="train" />
            </Picker>
          </View>

          <Text className="text-xl font-bold text-black mb-2">Select Country</Text>
          <View className="border border-gray-300 rounded mb-4 bg-white">
              <Picker
                  selectedValue={country}
                  onValueChange={(itemValue) => setCountry(itemValue)}
                  style={{ height: 50 }}
              >
                  {continentCountries.map((country) => (
                      <Picker.Item key={country} label={country} value={country} />
                  ))}
              </Picker>
          </View>

          <Text className="text-xl font-bold text-black mb-2">Title</Text>
          <TextInput
            value={title}
            onChangeText={setTitle}
            placeholder="Enter trip title"
            placeholderTextColor="#A0AEC0"
            className="mb-5 p-3 bg-white rounded"
          />

          <Text className="text-xl font-bold text-black mb-2">From</Text>
          <TouchableOpacity onPress={() => setShowFromDatePicker(true)} className="mb-5 p-3 bg-white rounded">
            <Text className="text-black">
              {fromDate ? fromDate.toDateString() : 'Select start date'}
            </Text>
          </TouchableOpacity>
          {showFromDatePicker && (
            <DateTimePicker
              value={fromDate || new Date()}
              mode="date"
              display="default"
              onChange={(event, selectedDate) => {
                setShowFromDatePicker(false);
                if (selectedDate) {
                  setFromDate(selectedDate);
                }
              }}
            />
          )}

          <Text className="text-xl font-bold text-black mb-2">To</Text>
          <TouchableOpacity onPress={() => setShowToDatePicker(true)} className="mb-5 p-3 bg-white rounded">
            <Text className="text-black">
              {toDate ? toDate.toDateString() : 'Select end date'}
            </Text>
          </TouchableOpacity>
          {showToDatePicker && (
            <DateTimePicker
              value={toDate || new Date()}
              mode="date"
              display="default"
              onChange={(event, selectedDate) => {
                setShowToDatePicker(false);
                if (selectedDate) {
                  setToDate(selectedDate);
                }
              }}
            />
          )}

          <Text className="text-xl font-bold text-black mb-2">Add Note</Text>
          <TextInput
            value={note}
            onChangeText={setNote}
            placeholder="Add a note about your trip"
            placeholderTextColor="#A0AEC0"
            className="mb-5 p-3 bg-white rounded h-24"
            multiline
          />

          <TouchableOpacity onPress={handleAddTrip} className="mt-5 p-3 bg-blue-500 rounded-lg shadow">
            <Text className="text-white text-center font-bold text-lg">Add Trip</Text>
          </TouchableOpacity>
        </>
      )}
    </ScrollView>
    </ImageBackground>
  );
};

export default TravelForm;
