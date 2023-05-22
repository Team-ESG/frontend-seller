import { userState } from '@recoil/auth';
import React from 'react';
import { useSetRecoilState } from 'recoil';
import { Pressable, ScrollView, Text, View } from 'react-native';

export default function Setting(): JSX.Element {
  const setUser = useSetRecoilState(userState);

  return (
    <ScrollView style={{ backgroundColor: '#FFF', flex: 1 }}>
      <View>
        <Pressable
          onPress={() => setUser(null)}
          style={{ padding: 20, borderColor: '#78787850', borderWidth: 1 }}
        >
          <Text style={{ fontSize: 16 }}>로그아웃</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}
