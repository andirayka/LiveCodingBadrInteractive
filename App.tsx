// react-native-gesture-handler should be at the top and there's nothing else before it
import 'react-native-gesture-handler';

import React, {FC} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {AppRouter} from 'routes';
import AppContextProvider from 'context';

const App: FC = () => {
  return (
    <SafeAreaProvider>
      <PaperProvider theme={DefaultTheme}>
        <AppContextProvider>
          <AppRouter />
        </AppContextProvider>
      </PaperProvider>
    </SafeAreaProvider>
  );
};

export default App;
