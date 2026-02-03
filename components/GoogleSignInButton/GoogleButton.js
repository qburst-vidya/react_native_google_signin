import React from 'react';
import { Pressable, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import style from './style';

const GoogleButton = ({ onPress }) => {
  return (
    <Pressable style={style.button} onPress={onPress}>
      <Icon name="google" size={20} color="#b22c15"></Icon>
      <Text style={style.text}>Sign in with Google</Text>
    </Pressable>
  );
};

export default GoogleButton;
