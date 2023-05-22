import axios from 'axios';
import React from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DatePicker from 'react-native-date-picker';
import { useRecoilValue } from 'recoil';
import { userState } from '@recoil/auth';
import { launchImageLibrary } from 'react-native-image-picker';

export default function ProductRegister(): JSX.Element {
  const user = useRecoilValue(userState);
  const [photo, setPhoto] = React.useState(null);
  const [title, setTitle] = React.useState('');
  const [expirationDate, setExpirationDate] = React.useState(new Date());
  const [stock, setStock] = React.useState('');
  const [regularPrice, setRegularPrice] = React.useState('');
  const [discountPrice, setDiscountPrice] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [showDatePicker, setShowDatePicker] = React.useState(false);

  const onPressRegister = () => {
    const formData = new FormData();
    formData.append('file', {
      name: photo.fileName,
      type: photo.type,
      uri: photo.uri,
    });

    axios
      .post(
        'http://52.78.81.8:8080/seller/item/register',
        {
          name: title,
          expirationDate: [
            expirationDate.getFullYear(),
            expirationDate.getMonth() + 1,
            expirationDate.getDate(),
            0,
            0,
          ],
          file: formData,
          itemDetail: description,
          originalPrice: regularPrice,
          discountPrice: discountPrice,
          itemQuantity: stock,
        },
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            authorization: `Bearer ${user?.accessToken}`,
          },
        }
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  const onPressChoosePhoto = () => {
    launchImageLibrary({ mediaType: 'photo' }, (response) => {
      if (response.didCancel) {
        console.log('유저가 취소했어요');
      } else if (response.errorCode) {
        console.log('에러', response.errorMessage);
      } else {
        console.log(response.assets[0]);
        setPhoto(response.assets[0]);
      }
    });
  };

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
        {photo ? (
          <Pressable onPress={onPressChoosePhoto}>
            <Image
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
              source={{ uri: photo.uri }}
            />
          </Pressable>
        ) : (
          <Pressable
            onPress={onPressChoosePhoto}
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
          </Pressable>
        )}
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
        onChangeText={(text) => setTitle(text)}
        value={title}
      />
      <TextInput
        inputMode="none"
        placeholderTextColor={'#787878'}
        placeholder="유통기한"
        onFocus={() => setShowDatePicker(true)}
        style={{
          padding: 20,
          borderBottomWidth: 1,
          borderBottomColor: '#78787850',
        }}
        editable
        maxLength={10}
        value={`유통기한 ${expirationDate.toLocaleDateString('ko-KR')}`}
      />
      <DatePicker
        mode="date"
        modal
        open={showDatePicker}
        date={expirationDate}
        onConfirm={(date) => {
          setShowDatePicker(false);
          setExpirationDate(date);
        }}
        onCancel={() => setShowDatePicker(false)}
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
        onChangeText={(text) => setStock(text)}
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
        onChangeText={(text) => setRegularPrice(text)}
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
        onChangeText={(text) => setDiscountPrice(text)}
        value={discountPrice}
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
        onChangeText={(text) => setDescription(text)}
        value={description}
      />
      <Pressable
        onPress={onPressRegister}
        style={{ backgroundColor: 'green', padding: 20, alignItems: 'center' }}
      >
        <Text style={{ color: 'white', fontSize: 16, fontWeight: '600' }}>
          완료
        </Text>
      </Pressable>
    </ScrollView>
  );
}
