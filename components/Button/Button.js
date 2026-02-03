import React from 'react';
import { Pressable, Text } from 'react-native';
import style from '../Button/style';
import PropTypes from 'prop-types';

const Button = props => {
  return (
    <Pressable
      disabled={props.isDisabled}
      backgroundColor={props.backgroundColor}
      style={[style.button, props.isDisabled && style.disabled]}
      onPress={props.onPress}
    >
      <Text style={[style.title, { color: props.textColor ?? '#FFFFFF' }]}>
        {props.title}
      </Text>
    </Pressable>
  );
};

Button.defaultProps = {
  isDisabled: false,
  onPress: () => {},
  backgroundColor: '#2979F2',
  textColor: '#FFFFFF',
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
  onPress: PropTypes.func,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
};

export default Button;
