import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import List from '../pages/list.js';
import Post from '../pages/post.js';

const Stack = createStackNavigator();
function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="list" component={List} />
      <Stack.Screen name="post" component={Post} />
    </Stack.Navigator>
  );
}

export default Routes;
