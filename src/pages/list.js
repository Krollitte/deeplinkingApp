// Home.js
import React, {useEffect} from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
  Text,
  StyleSheet,
  Linking,
  Image,
  Platform,
} from 'react-native';

const MichaelScott = require('../assets/stevecarell.jpeg');

const DwightSchrute = require('../assets/dwightschrute.jpg');
const AndyBernard = require('../assets/andybernard.jpg');
const KellyKapoor = require('../assets/kellykapoor.jpg');
const KevinMalone = require('../assets/kevinmalone.jpg');
const AngelaMartin = require('../assets/angelamartin.jpeg');

const posts = [
  {
    id: 1,
    character: 'Michael Scott',
    quote: "That's what she said.",
    pic: MichaelScott,
  },
  {
    id: 2,
    character: 'Dwight Schrute',
    quote:
      "Any time I'm about to do something, I think to myself 'Would an idiot do that?' and if the answer is yes, I do not do that thing.",
    pic: DwightSchrute,
  },
  {
    id: 3,
    character: 'Andy Bernard',
    quote:
      "I'm always thinking one step ahead, like a carpenter who makes stairs.",
    pic: AndyBernard,
  },
  {
    id: 4,
    character: 'Kelly Kapoor',
    quote: 'I am one of the few people who looks hot eating a cupcake.',
    pic: KellyKapoor,
  },
  {
    id: 5,
    character: 'Kevin Malone',
    quote: 'When I President, they see. They see.',
    pic: KevinMalone,
  },
  {
    id: 6,
    character: 'Angela Martin',
    quote: 'I think green is kind of whorish.',
    pic: AngelaMartin,
  },
];

const Home = ({navigation}) => {
  useEffect(() => {
    Linking.getInitialURL().then(url => {
      navigateHandler(url);
    });
    if (Platform.OS === 'ios') {
      Linking.addEventListener('url', handleOpenURL);
    }
    return () => {
      if (Platform.OS === 'ios') {
        Linking.removeEventListener('url', handleOpenURL);
      }
    };
  }, []);

  const handleOpenURL = event => {
    navigateHandler(event.url);
  };
  const navigateHandler = async url => {
    if (url) {
      const {navigate} = navigation;
      const route = url.replace(/.*?:\/\//g, '');

      const id = route.match(/\/([^\/]+)\/?$/)[1];
      const post =
        posts &&
        posts.find(item => {
          return item.id === Number(id);
        });

      navigate('post', {post: post && post});
    }
  };
  const {row, image, title, separator, container} = styles;
  return (
    <View style={container}>
      <FlatList
        data={posts}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('post', {post: item})}>
            <View style={row}>
              <Image source={item.pic} style={image} />
              <Text style={title}>{item.character}</Text>
            </View>
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={() => <View style={separator} />}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: 80,
    width: 80,
  },
  title: {
    fontSize: 16,
    color: 'black',
    margin: 10,
  },
  separator: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    height: 0.5,
    width: '100%',
  },
});
export default Home;
