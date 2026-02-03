import React, {useState} from "react";
import {Text, View, TextInput} from 'react-native';
import style from './style';
import PropTypes from 'prop-types';


const Input = props => {
const [value, setValue] = useState('');
return (
<View>
    <Text>{props.label}</Text>
    <TextInput style={style.input}
    placeholder={props.placeholder ? props.placeholder : null}
   // style={style.input}
    value={value}
    secureTextEntry={props.secureTextEntry}
    keyboardType={props.keyboardType}
    onChangeText={val => {
        setValue(val);
        props.onChangeText(val);
    }}
    ></TextInput>
</View>
);
};

export default Input;