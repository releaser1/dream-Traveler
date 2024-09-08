import React from 'react';
import { View, Text } from 'react-native';
import { styled } from 'nativewind';


interface ProgressBarProps {
  percentage: number;
}


const Container = styled(View);
const BarContainer = styled(View);
const ProgressBarFill = styled(View);

const ProgressBar: React.FC<ProgressBarProps> = ({ percentage }) => {
  return (
    <Container className="w-full my-4">
      <Text className="text-center font-bold mb-2">{percentage.toFixed(2)}%</Text>
      <BarContainer className="h-4 w-full bg-gray-300 rounded-full overflow-hidden">
        <ProgressBarFill
          className="h-full bg-blue-500 rounded-full"
          style={{ width: `${percentage}%` }}
        />
      </BarContainer>
    </Container>
  );
};

export default ProgressBar;