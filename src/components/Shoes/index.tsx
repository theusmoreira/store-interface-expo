/* eslint-disable global-require */
import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
} from 'react-native';

interface ShoesProps {
  img: ImageSourcePropType;
  cost: string;
  children: string;
  onClick(): void;
}
const Shoes: React.FC<ShoesProps> = ({ cost, img, children, onClick }) => {
  function filterDesc(desc: string) {
    if (desc.length < 27) return desc;

    return `${desc.substring(0, 15)}...`;
  }
  return (
    <TouchableOpacity onPress={onClick} style={styles.container}>
      <Image source={img} style={styles.image} />
      <Text style={styles.text}>{filterDesc(children)}</Text>
      <Text style={(styles.text, { opacity: 0.4 })}>
        R$
        {cost}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: '2%',
  },
  text: {
    fontSize: 16,
  },
  image: {
    width: 175,
    height: 175,
  },
});

export default Shoes;
