import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView } from 'react-native'
import { RecoilRoot} from 'recoil'

import Navigation from './src/Navigation'

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <RecoilRoot>
        <Navigation />
      </RecoilRoot>
    </SafeAreaView>
  )
}

