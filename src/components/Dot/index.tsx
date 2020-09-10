import React from 'react';
import { TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

interface DotProps {
  color: string;
}

const Dot: React.FC<DotProps> = ({ color }) => {
  return (
    <TouchableOpacity style={[styles.container, { backgroundColor: color }]} />
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width * 0.05,
    height: Dimensions.get('window').width * 0.05,
    borderRadius: (Dimensions.get('window').width * 0.05) / 2,
    marginHorizontal: '2.5%',
    elevation: 5,
  },
});

export default Dot;
