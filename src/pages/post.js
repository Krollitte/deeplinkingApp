// Post.js
import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
const Post = ({route}) => {
  const {post} = route.params;
  const {container, quote, image} = styles;
  return (
    <View style={container}>
      <Image style={image} source={post.pic} />
      <Text style={quote}>"{post.quote}"</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    height: 200,
    width: '100%',
  },
  quote: {
    fontSize: 16,
    color: 'black',
    margin: 20,
    textAlign: 'center',
    fontStyle: 'italic',
  },
});
export default Post;
