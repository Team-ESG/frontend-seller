import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import RootStack from '@navigation/RootStack';
import Login from '@screens/Auth/Login';
import { useRecoilValue } from 'recoil';
import { userState } from '@recoil/auth';
function App(): JSX.Element {
  const user = useRecoilValue(userState);

  return (
    <NavigationContainer>
      {user ? <RootStack /> : <Login />}
    </NavigationContainer>
  );
}

export default App;
