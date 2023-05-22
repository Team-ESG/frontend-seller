// home screen component with tsx
import { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from 'react-native';

import { userState } from '@recoil/auth';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import testImg from '@lib/img/testImg.jpeg';

export default function MarketDetail({ navigation }: any) {
  const [user, setUser] = useRecoilState(userState);
  const [marketInfo, setMarketInfo] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://52.78.81.8:8080/market/${marketId}`,
          {
            headers: { authorization: `Bearer ${user?.accessToken}` },
          }
        );
        if (response.data.state !== 200) throw new Error();
        setMarketInfo(response.data.data);
      } catch (error) {}
    };
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={testImg} style={{ width: '100%', height: '100%' }} />
      </View>

      <ScrollView style={styles.infoContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{marketInfo ? marketInfo.name: '가게이름'}</Text>
        </View>
        <View style={styles.locInfoContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.textTitle}>위치정보</Text>
            <Text style={styles.textDetail}>
              {marketInfo
                ? `${marketInfo.address.firstAddr} ${marketInfo.address.secondAddr} ${marketInfo.address.thirdAddr}`
                : '없음'}
            </Text>
          </View>
        </View>
        <View style={styles.salesInfoContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.textTitle}>영업정보</Text>
          </View>
          <View style={styles.subTextContainer}>
            <Text style={styles.subTextTitle}>운영시간</Text>
            <Text style={styles.subTextDetail}>
              {marketInfo
                ? `${marketInfo.startTime} ~ ${marketInfo.endTime}`
                : '없음'}
            </Text>
          </View>
          <View style={styles.subTextContainer}>
            <Text style={styles.subTextTitle}>휴무일</Text>
            <Text style={styles.subTextDetail}>매주 일요일</Text>
          </View>
          <View style={styles.subTextContainer}>
            <Text style={styles.subTextTitle}>전화번호</Text>
            <Text style={styles.subTextDetail}>
              {marketInfo ? marketInfo.phoneNumber : '없음'}
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageContainer: {
    flex: 0.7,
  },
  infoContainer: {
    flex: 0.5,
    marginTop: 20,
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: '600',
    color: '#333',
    marginBottom: 20,
  },
  locInfoContainer: {
    marginBottom: 10,
    paddingBottom: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#eee',
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 25,
    marginBottom: 20,
  },
  textTitle: {
    flex: 0.24,
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  textDetail: {
    flex: 0.8,
    fontSize: 14,
    color: '#333',
    marginLeft: 15,
  },
  salesInfoContainer: {
    marginBottom: 30,
  },
  subTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 35,
    marginBottom: 10,
  },
  subTextTitle: {
    flex: 0.2,
    fontSize: 14,
    color: '#333',
  },
  subTextDetail: {
    flex: 0.8,
    fontSize: 14,
    color: '#333',
    marginLeft: 10,
  },
});
