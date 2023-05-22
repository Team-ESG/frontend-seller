import { userState } from '@recoil/auth';
import React from 'react';
import { Text, View } from 'react-native';
import { useSetRecoilState } from 'recoil';

export default function Setting(): JSX.Element {
  const setUser = useSetRecoilState(userState);
  return (
    <View>
      <Text
        onPress={() => {
          setUser(null);
        }}
      >
        세팅
      </Text>
    </View>
  );
}
