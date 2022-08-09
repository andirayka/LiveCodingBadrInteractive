// react-native-gesture-handler should be at the top and there's nothing else before it
import 'react-native-gesture-handler';

import React, {FC} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider as PaperProvider} from 'react-native-paper';
import {AppRouter} from 'routes';

const App: FC = () => {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <AppRouter />
      </PaperProvider>
    </SafeAreaProvider>
  );
};

export default App;
