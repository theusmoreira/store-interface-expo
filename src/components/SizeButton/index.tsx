import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

interface SizeButtonProps {
  bgColor?: string;
  color?: string;
}

const SizeButton: React.FC<SizeButtonProps> = ({
  bgColor,
  color,
  children,
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: bgColor || '#fff' }]}
    >
      <Text style={[styles.text, { color: color || '#000' }]}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: '#e6e6e6',
    borderWidth: 3,
    marginHorizontal: 10,
    backgroundColor: '#000',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#fff',
  },
});

export default SizeButton;
