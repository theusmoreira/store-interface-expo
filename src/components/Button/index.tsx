import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Button: React.FC = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btnContainer}>
        <Text style={styles.title}>Button</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnContainer: {
    width: '90%',
    height: 50,
    backgroundColor: '#17181a',
    borderRadius: 5,
    marginVertical: '5%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 17,
    color: '#fff',
  },
});

export default Button;
