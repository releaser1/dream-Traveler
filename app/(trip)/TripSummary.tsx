import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

interface TripSummaryProps {
  title: string;
  transportation: string;
  country: string;
  fromDate: Date;
  toDate: Date;
  note: string;
}

const TripSummary: React.FC<TripSummaryProps> = ({ title, transportation, country, fromDate, toDate, note }) => {
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

  return (
    <View className="mt-8 p-5 bg-white rounded-lg">
      <Text className="text-2xl font-bold text-black text-center mb-6">Trip Summary</Text>

      <Text className="text-lg font-semibold text-orange-600 mb-1">Title:</Text>
      <Text className="text-xl font-bold text-blue-700 mb-4">{title}</Text>

      <Text className="text-lg font-semibold text-orange-600 mb-2">Transportation:</Text>
      <View className="mb-4 flex items-center justify-center border border-gray-300 p-3 rounded-lg bg-gray-100">
        {renderTransportIcon(transportation)}
      </View>

      <Text className="text-lg font-semibold text-orange-600 mb-2">Country:</Text>
      <Text className="text-lg font-semibold text-blue-600 mb-4">{country}</Text>

      <Text className="text-lg font-semibold text-purple-600 mb-1">From:</Text>
      <Text className="text-lg text-blue-800 mb-4">{fromDate.toDateString()}</Text>

      <Text className="text-lg font-semibold text-purple-600 mb-1">To:</Text>
      <Text className="text-lg text-blue-800 mb-4">{toDate.toDateString()}</Text>

      <Text className="text-lg font-semibold text-purple-600 mb-1">Note:</Text>
      <Text className="text-lg text-blue-800">{note}</Text>
    </View>
  );
};

export default TripSummary;
