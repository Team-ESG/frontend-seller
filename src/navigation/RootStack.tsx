import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTab from './BottomTab';
import EditMarket from '@screens/market/EditMarket';

const Stack = createNativeStackNavigator();

export default function RootStack(): JSX.Element {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={BottomTab}
        options={{
          title: '홈',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="EditMarket"
        component={EditMarket}
        options={{
          title: '가게 정보 수정',
        }}
      />
    </Stack.Navigator>
  );
}
