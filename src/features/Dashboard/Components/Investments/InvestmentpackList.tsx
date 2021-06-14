import React from 'react'
import { View, ActivityIndicator, Platform, StyleSheet } from 'react-native'
import Animated from 'react-native-reanimated'


// components
import useUserDetails from '../../../../Hooks/useUserDetails'
import { Theme } from '../../../../theme'
import { INvestmentPackage } from '../../../../Types/Investmentpackage.type'
import { URL } from '../../../../utils/Url'
import PackageCard from '../PackageCard'
import { useNavigation } from '@react-navigation/native'


export default function InvestmentpackList() {
  const [loading, setLoading] = React.useState(false);
  const packages = React.useRef([] as Array<INvestmentPackage>);
  const user = useUserDetails();
  const navigation = useNavigation();

  React.useMemo(() => {
    if (packages.current.length < 1) {
      setLoading(true);
     (async function() {
       const result = await fetch(`${URL}/investment/investmentpack/`, {
         method: 'GET',
         headers: {
           authorization: `Bearer ${user.user.access}`
         }
       })

       const json = await result.json();
      //  setPackages(json.data.results);
      packages.current = json.data.results
       setLoading(false);

     })();
    }else {
      setLoading(false);
    }
   }, []);

  const navigate = (pack_id: number) => {
    navigation.navigate("invest", { package: pack_id });
  };


  return (
      <View>
         <Animated.ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingTop: 0}}>
          {
            loading ?
            <View style={style.loadingView}>
              <ActivityIndicator color={Theme.primaryColor} size="large" />
            </View>
            :
            <View style={style.packagesView}>
            {/* <CongratulationCard /> */}
            {packages.current.map((item,index) => <PackageCard properties={item} navigate={navigate} key={index} />)}
            </View>
          }
       </Animated.ScrollView>
      </View>
  )
}


const style = StyleSheet.create({
  topbar: {
    width: '100%',
    height: 50,
    paddingHorizontal: 20,
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginTop: Platform.OS === 'ios' ? 50:0
  },
  closeBtn: {
    width: 25,
    height: 25,
    borderRadius: 15,
    backgroundColor: Theme.primaryColor,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loadingView: {
    width: '100%',
    height: Theme.height/100* 60,
    justifyContent: 'center',
    alignItems: 'center'
  },
  packagesView: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    marginBottom: 20
  }
});
