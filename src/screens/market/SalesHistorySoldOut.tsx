import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

export default function SalesHistorySoldOut(): JSX.Element {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#FFF' }}>
      <View
        style={{
          padding: 20,
          flexDirection: 'row',
          gap: 20,
          backgroundColor: '#FFF',
          shadowColor: '#787878',
          shadowOpacity: 0.25,
          shadowOffset: {
            height: 5,
            width: 0,
          },
        }}
      >
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
    </ScrollView>
  );
}
