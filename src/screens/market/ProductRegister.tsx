import React from 'react';
import { Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function ProductRegister(): JSX.Element {
  const [title, onChangeTitle] = React.useState('');
  const [expirationDate, onChangeExpirationDate] = React.useState('');
  const [stock, onChangeStock] = React.useState('');
  const [regularPrice, onChangeRegularPrice] = React.useState('');
  const [discountPrice, onChangeDiscountPrice] = React.useState('');
  const [address, onChangeAddress] = React.useState('');
  const [description, onChangeDescription] = React.useState('');
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
        placeholder="글 제목"
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
        placeholder="유통기한"
        style={{
          padding: 20,
          borderBottomWidth: 1,
          borderBottomColor: '#78787850',
        }}
        editable
        maxLength={10}
        onChangeText={(text) => onChangeExpirationDate(text)}
        value={expirationDate}
      />
      <TextInput
        placeholderTextColor={'#787878'}
        placeholder="재고수량"
        style={{
          padding: 20,
          borderBottomWidth: 1,
          borderBottomColor: '#78787850',
        }}
        editable
        maxLength={10}
        onChangeText={(text) => onChangeStock(text)}
        value={stock}
      />
      <TextInput
        placeholderTextColor={'#787878'}
        placeholder="정가"
        style={{
          padding: 20,
          borderBottomWidth: 1,
          borderBottomColor: '#78787850',
        }}
        editable
        maxLength={10}
        onChangeText={(text) => onChangeRegularPrice(text)}
        value={regularPrice}
      />
      <TextInput
        placeholderTextColor={'#787878'}
        placeholder="할인가"
        style={{
          padding: 20,
          borderBottomWidth: 1,
          borderBottomColor: '#78787850',
        }}
        editable
        maxLength={10}
        onChangeText={(text) => onChangeDiscountPrice(text)}
        value={discountPrice}
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
        placeholder="상품 설명"
        style={{
          padding: 20,
          paddingBottom: 100,
          borderBottomWidth: 1,
          borderBottomColor: '#78787850',
        }}
        editable
        multiline
        numberOfLines={4}
        onChangeText={(text) => onChangeDescription(text)}
        value={description}
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
