import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { NavigationProp, ParamListBase } from '@react-navigation/native';

interface DetailProps {
  navigation: NavigationProp<ParamListBase>;
}

const Detail: React.FC<DetailProps> = ({ navigation }) => {
  navigation.setOptions({
    title: 'Matheus',
  });

  return (
    <View style={styles.container}>
      <Image source={} />
      <Text style={styles.title}>Detail</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#312e38',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#fff',
  },
});

export default Detail;
