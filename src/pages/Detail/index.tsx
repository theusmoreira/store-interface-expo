/* eslint-disable global-require */
import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import Dot from '../../components/Dot';
import SizeButton from '../../components/SizeButton';
import Button from '../../components/Button';
import Footer from '../../components/Footer';

interface DetailProps {
  navigation: NavigationProp<ParamListBase>;
}

const Detail: React.FC<DetailProps> = ({ navigation }) => {
  navigation.setOptions({
    title: 'Nike Kyrie 6',
  });

  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.image}
        resizeMode="cover"
        source={require('../../assets/detail.png')}
      />

      <View>
        <View>
          <Text style={[styles.title, { fontSize: 24 }]}>R$200,00</Text>
        </View>
        <View>
          <Text style={[styles.title, { fontSize: 30, opacity: 0.4 }]}>
            Nike Kyrie 6
          </Text>
        </View>

        <View style={styles.dotContainer}>
          <Dot color="#2379f4" />
          <Dot color="#fb6e53" />
          <Dot color="#ddd" />
          <Dot color="#000" />
        </View>

        <View style={{ flexDirection: 'row', width: '100%' }}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <SizeButton bgColor="#17181a" color="#fff">
              40
            </SizeButton>

            <SizeButton>39</SizeButton>
            <SizeButton>38</SizeButton>
            <SizeButton>37</SizeButton>
          </ScrollView>
        </View>

        <View style={styles.textContent}>
          <Text style={styles.textTitle}>Um flash do passado</Text>
          <Text style={styles.textContent}>
            Por anos, Kyrie Irving tem impressionado o público tanto na quadra
            quanto na loja de calçados. Com o lançamento do Nike Kyrie 6, a
            indústria de tênis foi mais uma vez deslumbrada com um novo design
            revolucionário. Puxando elementos do Kyrie 2, incluindo a tira na
            parte superior, bem como várias atualizações modernas, como o salto
            exterior moldado, o Nike Kyrie 6 é um amálgama de tecnologias de
            calçados antigas e modernas para um design que fará com que você
            tenha o melhor desempenho.
          </Text>
        </View>

        <Button />

        <View style={styles.line} />

        <Footer />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
  },
  title: {
    fontFamily: 'Anton_400Regular',
    paddingHorizontal: '2%',
  },
  dotContainer: {
    flexDirection: 'row',
    marginVertical: '7%',
  },
  textContent: {
    fontSize: 16,
    lineHeight: 25,
    marginVertical: '2%',
    paddingHorizontal: '2%',
  },
  textTitle: {
    fontWeight: 'bold',
    marginVertical: '2%',
    fontSize: 22,
    lineHeight: 25,
  },
  line: {
    borderWidth: 1,
    borderBottomColor: '#ddd',
    marginVertical: '2%',
  },
});

export default Detail;
