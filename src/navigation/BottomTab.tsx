import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Text } from 'react-native';
import SalesHistoryTopTab from './SalesHistoryTopTab';
import MarketDetail from '@screens/market/MarketDetail';
import ProductRegister from '@screens/market/ProductRegister';
import Setting from '@screens/user/Setting';

const Tab = createBottomTabNavigator();

export default function BottomTab(): JSX.Element {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          paddingBottom: 5,
        },
        tabBarStyle: {
          padding: 5,
        },
      }}
    >
      <Tab.Screen
        name="나의 판매 내역"
        component={SalesHistoryTopTab}
        options={{
          tabBarIcon: ({ focused }: any) =>
            focused ? <Text>판매내역</Text> : <Text>판매내역</Text>,
        }}
      />
      <Tab.Screen
        name="가게 정보"
        component={MarketDetail}
        options={{
          tabBarIcon: ({ focused }: any) =>
            focused ? <Text>가게정보</Text> : <Text>가게정보</Text>,
        }}
      />
      <Tab.Screen
        name="상품 등록"
        component={ProductRegister}
        options={{
          tabBarIcon: ({ focused }: any) =>
            focused ? <Text>상품등록</Text> : <Text>상품등록</Text>,
        }}
      />
      <Tab.Screen
        name="설정"
        component={Setting}
        options={{
          tabBarIcon: ({ focused }: any) =>
            focused ? <Text>설정</Text> : <Text>설정</Text>,
        }}
      />
    </Tab.Navigator>
  );
}
