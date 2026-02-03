import React, { useState } from 'react';
import {
  View,
  Text,
  ActivityIndicator,
} from 'react-native';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import globalStyle from '../../assets/style/globalStyle';
import style from './style';
import Header from '../../components/Header/Header';
import GoogleAuth from './GoogleAuth';
import GoogleButton from '../../components/GoogleSignInButton/GoogleButton';
import { Routes } from '../../navigation/Routes';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { user, loading, error, signIn, signOut } = GoogleAuth();

  return (
    // <SafeAreaProvider style={[globalStyle.backgroundColor, globalStyle.flex]}>
    //   <ScrollView contentContainerStyle={style.container}>

    <View style={style.container}>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : user ? (
        <>
          <View style={globalStyle.marginToBottom24}>
            <Text>Welcome, {user?.user?.name}</Text>
          </View>

          <Button
            title="Sign Out"
            onPress={signOut}
            backgroundColor={'#d84646'}
          ></Button>
        </>
      ) : (
        <View >
          <View style={globalStyle.marginToBottom24}>
            <Header title={'Welcome Back'} type={1}></Header>
          </View>
          <View style={globalStyle.marginToBottom24}>
            <Input
              keybordType={'email-address'}
              label={'Email'}
              placeHolder={'Enter your email'}
              onChangeText={value => setEmail(value)}
            />
          </View>
          <View style={[globalStyle.marginToBottom24, style.itemContainer]}>
            <Input
              secureTextEntry={true}
              label={'Password'}
              placeHolder={'******'}
              onChangeText={value => setPassword(value)}
            ></Input>
          </View>
          <View style={globalStyle.marginToBottom24}>
            <Button title={'Login'}></Button>
          </View>
          <View style={[globalStyle.marginToBottom24, style.orContainer]}>
            <Text style={style.orText}>OR</Text>
          </View>
          <View style={globalStyle.marginToBottom24}>
            <GoogleButton onPress={signIn}></GoogleButton>
          </View>
          <View style={globalStyle.marginToBottom24}>
            <Button
              title={'SignUp'}
              onPress={() => navigation.navigate(Routes.SignUp)}
              backgroundColor={'#d84646'}
            ></Button>
          </View>
        </View>
      )}
      {error && <View style={style.errorView}> <Text style={style.errorText}>{error}</Text></View>}
    </View>
    //   </ScrollView>
    // </SafeAreaProvider>
  );
};
export default Login;
