import React, { useState } from 'react';
import { Text, View } from 'react-native';
import Input from '../../components/Input/Input';
import globalStyle from '../../assets/style/globalStyle';
import style from './style';
import Button from '../../components/Button/Button';
import Icon from 'react-native-vector-icons/FontAwesome';

const SignUp = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  return (
    <View style={style.container}>
      <View style={style.backConatainer}>
        <Icon name="arrow-left" size={16} style={style.backIcon}></Icon>
        <View style={style.backButton}>
          <Button
            title={'Back'}
            textColor={'#0a0000'}
            onPress={() => navigation.goBack()}
          ></Button>
        </View>
      </View>
      <View style={style.container}>
        <View style={globalStyle.marginToBottom24}>
          <Input
            keybordType={'email-address'}
            label={'UserName'}
            placeHolder={'Enter your email'}
            onChangeText={value => setEmail(value)}
          ></Input>
        </View>
        <View style={globalStyle.marginToBottom24}>
          <Input
            secureTextEntry={true}
            label={'Password'}
            placeHolder={'******'}
            onChangeText={value => setPassword(value)}
          ></Input>
        </View>
        <View style={globalStyle.marginToBottom24}>
          <Input
            secureTextEntry={true}
            label={'Confirm Password'}
            placeHolder={'******'}
            onChangeText={value => setConfirmPassword(value)}
          ></Input>
        </View>
        <View style={globalStyle.marginToBottom24}>
          <Button title={'Sign Up'} backgroundColor={'#de4a4a'}></Button>
        </View>
      </View>
    </View>
  );
};

export default SignUp;
