import React, { useEffect } from 'react';
import axios from 'axios';
import { Image, ScrollView, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { useRecoilValue } from 'recoil';
import { userState } from '@recoil/auth';
import { useFocusEffect } from '@react-navigation/native';

export default function SalesHistorySale(): JSX.Element {
  const user = useRecoilValue(userState);

  useFocusEffect(
    React.useCallback(() => {
      axios
        .get('http://52.78.81.8:8080/seller/itemList', {
          headers: {
            authorization: `Bearer ${user?.accessToken}`,
          },
        })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, [])
  );

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#FFF' }}>
      <View>
        <View style={{ padding: 20, flexDirection: 'row', gap: 20 }}>
          <Image
            style={{
              flex: 1,
              width: '100%',
              aspectRatio: 1,
              borderRadius: 10,
            }}
            source={require('@lib/img/testImg.jpeg')}
          />
          <View
            style={{
              flex: 1.5,
              justifyContent: 'center',
              gap: 10,
              marginLeft: 20,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: '600' }}>제육볶음</Text>
            <Text style={{ fontSize: 14, color: '#787878' }}>1개 5,000원</Text>
          </View>
          <Icon name="dots-three-vertical" size={20} color={'#787878'} />
        </View>
        <View
          style={{
            width: '100%',
            padding: 10,
            borderTopColor: '#78787850',
            borderTopWidth: 1,
            backgroundColor: '#FFF',
            shadowColor: '#787878',
            shadowOpacity: 0.25,
            shadowOffset: {
              height: 5,
              width: 0,
            },
            alignItems: 'center',
          }}
        >
          <Text style={{ fontSize: 14, color: '#787878' }}>재고 3개</Text>
        </View>
      </View>
    </ScrollView>
  );
}
