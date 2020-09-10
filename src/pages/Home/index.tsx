/* eslint-disable global-require */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import { MaterialIcons as Icon } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Shoes from '../../components/Shoes';

const Home: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../assets/banner.png')}
          style={styles.image}
        />

        <View style={styles.textContainer}>
          <Text style={styles.text}>TÊNIS</Text>
          <Text style={[styles.text, { color: '#DDD' }]}> - </Text>
          <Text style={[styles.text, { color: '#DDD' }]}>MASCULINO</Text>
          <TouchableOpacity
            style={{ position: 'absolute', right: 0, alignSelf: 'center' }}
          >
            <Icon name="filter-list" size={24} color="#000" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.line} />

      <ScrollView>
        <Text style={styles.text}>LANÇAMENTOS</Text>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Shoes
            onClick={() => navigation.navigate('Detail')}
            img={require('../../assets/2.png')}
            cost="180,90"
          >
            Nike Kyrie 6
          </Shoes>
          <Shoes
            onClick={() => navigation.navigate('Detail')}
            img={require('../../assets/1.png')}
            cost="140,90"
          >
            Nike Air Max Dia
          </Shoes>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Shoes
            onClick={() => alert('Clicou')}
            img={require('../../assets/3.png')}
            cost="120,90"
          >
            Adidas
          </Shoes>
          <Shoes
            onClick={() => alert('Clicou')}
            img={require('../../assets/4.png')}
            cost="190,99"
          >
            Topzeira
          </Shoes>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Shoes
            onClick={() => alert('Clicou')}
            img={require('../../assets/5.png')}
            cost="120,90"
          >
            Adidas
          </Shoes>
          <Shoes
            onClick={() => alert('Clicou')}
            img={require('../../assets/6.png')}
            cost="190,99"
          >
            CodeLive
          </Shoes>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
  },
  header: {
    marginBottom: 8,
  },
  image: {
    width: '100%',
  },
  textContainer: {
    flexDirection: 'row',
    marginVertical: '5%',
    marginHorizontal: '5%',
  },
  text: {
    fontFamily: 'Anton_400Regular',
    fontSize: 26,
    marginHorizontal: '1%',
    color: '#000',
  },
  line: {
    borderBottomColor: '#d8d8d8',
    borderBottomWidth: 1,
  },
});

export default Home;
