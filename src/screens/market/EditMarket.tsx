import React from 'react';
import { Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function EditMarket({ route }: any): JSX.Element {
  const marketInfo = route.params;
  const [title, onChangeTitle] = React.useState('');
  const [address, onChangeAddress] = React.useState('');
  const [openTime, onChangeOpenTime] = React.useState('');
  const [closeTime, onChangeCloseTime] = React.useState('');
  const [dayOff, onChangeDayOff] = React.useState('');
  const [phoneNumber, onChangePhoneNumber] = React.useState('');
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: '#FFF',
      }}
    >
      <View
        style={{
          marginTop: 20,
          paddingBottom: 20,
          borderBottomWidth: 1,
          borderBottomColor: '#78787850',
        }}
      >
        <View
          style={{
            margin: 20,
            marginTop: 0,
            marginBottom: 0,
            borderWidth: 1,
            borderColor: '#78787850',
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
            aspectRatio: 1,
          }}
        >
          <Icon name="add-a-photo" size={48} color={'#787878'} />
        </View>
      </View>
      <TextInput
        placeholderTextColor={'#787878'}
        placeholder={marketInfo?.title ? marketInfo?.title : '가게 이름'}
        style={{
          padding: 20,
          borderBottomWidth: 1,
          borderBottomColor: '#78787850',
        }}
        editable
        maxLength={10}
        onChangeText={(text) => onChangeTitle(text)}
        value={title}
      />
      <TextInput
        placeholderTextColor={'#787878'}
        placeholder="주소"
        style={{
          padding: 20,
          borderBottomWidth: 1,
          borderBottomColor: '#78787850',
        }}
        editable
        maxLength={10}
        onChangeText={(text) => onChangeAddress(text)}
        value={address}
      />
      <TextInput
        placeholderTextColor={'#787878'}
        placeholder="영업 시작"
        style={{
          padding: 20,
          borderBottomWidth: 1,
          borderBottomColor: '#78787850',
        }}
        editable
        maxLength={10}
        onChangeText={(text) => onChangeOpenTime(text)}
        value={openTime}
      />
      <TextInput
        placeholderTextColor={'#787878'}
        placeholder="영업 종료"
        style={{
          padding: 20,
          borderBottomWidth: 1,
          borderBottomColor: '#78787850',
        }}
        editable
        maxLength={10}
        onChangeText={(text) => onChangeCloseTime(text)}
        value={closeTime}
      />
      <TextInput
        placeholderTextColor={'#787878'}
        placeholder="휴무일"
        style={{
          padding: 20,
          borderBottomWidth: 1,
          borderBottomColor: '#78787850',
        }}
        editable
        maxLength={10}
        onChangeText={(text) => onChangeDayOff(text)}
        value={dayOff}
      />
      <TextInput
        placeholderTextColor={'#787878'}
        placeholder="전화번호"
        style={{
          padding: 20,
          borderBottomWidth: 1,
          borderBottomColor: '#78787850',
        }}
        editable
        maxLength={10}
        onChangeText={(text) => onChangePhoneNumber(text)}
        value={phoneNumber}
      />
      <Pressable
        style={{ backgroundColor: 'green', padding: 20, alignItems: 'center' }}
      >
        <Text style={{ color: 'white', fontSize: 16, fontWeight: '600' }}>
          완료
        </Text>
      </Pressable>
    </ScrollView>
  );
}
