import React, { useState, useEffect } from 'react';
import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { userState } from '@recoil/auth';
import axios from 'axios';
import { useSetRecoilState } from 'recoil';
import { getTokens, setTokens } from 'src/utils/storageHelper';

function Login(): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const setUser = useSetRecoilState(userState);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const tokens = await getTokens();
        if (!tokens) throw new Error('No tokens');
        const response = await axios.post('http://52.78.81.8:8080/autoLogin', {
          accessToken: tokens.accessToken,
          refreshToken: tokens.refreshToken,
        });
        setUser({
          accessToken: response.data.accessToken,
          refreshToken: response.data.refreshToken,
        });
        setTokens(response.data.accessToken, response.data.refreshToken);
      } catch (e) {
        console.log(e);
      }
    };
    fetchUser();
  }, []);

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://52.78.81.8:8080/login', {
        id: email,
        pwd: password,
      });
      setUser({
        accessToken: response.data.accessToken,
        refreshToken: response.data.refreshToken,
      });
      setTokens(response.data.accessToken, response.data.refreshToken);
    } catch (e) {
      Alert.alert('로그인 실패!', '아이디 혹은 비밀번호를 확인해주세요.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleText}>우리 동네 사장님</Text>
      <View style={styles.loginInputSection}>
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder="이메일"
          placeholderTextColor="#433518"
        />
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder="비밀번호"
          placeholderTextColor="#433518"
          secureTextEntry
        />
        <Pressable style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.buttonText}>로그인</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    paddingTop: 70,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#49ac6a',
    marginBottom: 40,
  },
  loginInputSection: {
    width: '60%',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#433518',
  },
  loginButton: {
    width: '100%',
    marginTop: 50,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#80c597',
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Inter-Bold',
  },
  boldText: {
    fontWeight: '600',
    fontSize: 16,
    color: '#433518',
  },
  commonText: {
    color: '#433518',
  },
});

export default Login;
