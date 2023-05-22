import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SalesHistoryReservation from '@screens/market/SalesHistoryReservation';
import SalesHistorySale from '@screens/market/SalesHistorySale';
import SalesHistorySoldOut from '@screens/market/SalesHistorySoldOut';

const Tab = createMaterialTopTabNavigator();

export default function SalesHistoryTopTab(): JSX.Element {
  return (
    <Tab.Navigator>
      <Tab.Screen name="판매중" component={SalesHistorySale} />
      <Tab.Screen name="예약중" component={SalesHistoryReservation} />
      <Tab.Screen name="판매완료" component={SalesHistorySoldOut} />
    </Tab.Navigator>
  );
}
