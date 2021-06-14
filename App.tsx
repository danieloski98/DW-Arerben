import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, Platform } from 'react-native'
import { RecoilRoot} from 'recoil'
import { QueryClientProvider, QueryClient } from 'react-query'
import Navigation from './src/Navigation'


export const queryClient = new QueryClient();


export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, paddingTop: Platform.OS === 'android' ? 0:0 }}>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <Navigation />
        </RecoilRoot>
      </QueryClientProvider>
    </SafeAreaView>
  )
}

