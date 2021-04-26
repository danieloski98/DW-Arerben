import React from 'react'
import { View, Text, ActivityIndicator, Modal, TouchableOpacity } from 'react-native'
import Animated, {useSharedValue, useAnimatedStyle} from 'react-native-reanimated'
import { Feather } from '@expo/vector-icons'

// components
import Tabbar from '../../../../Components/Tabbar'
import useUserDetails from '../../../../Hooks/useUserDetails'
import { Theme } from '../../../../theme'
import { INvestmentPackage } from '../../../../Types/Investmentpackage.type'
import { ILocation } from '../../../../Types/Location.type'
import { URL } from '../../../../utils/Url'
import PackageCard from '../PackageCard'


export default function InvestmentCards(props: {open: boolean, navigate: Function, close: Function}) {
  const [loading, setLoading] = React.useState(true);
  const [packages, setPackages] = React.useState([] as Array<INvestmentPackage>);
  const user = useUserDetails();

  React.useEffect(() => {
    (async function() {
      const result = await fetch(`${URL}/investment/investmentpack/`, {
        method: 'GET',
        headers: {
          authorization: `Bearer ${user.user.access}`
        }
      })

      const json = await result.json();
      setPackages(json.data.results);
      setLoading(false);

    })();
  }, []);


    return (
       <Modal visible={props.open} animationType="slide">
         <View style={{ width: '100%', height: 50, paddingHorizontal: 20, alignItems: 'flex-end', justifyContent: 'center'}}>
           <TouchableOpacity onPress={() => props.close()} style={{ width: 25, height: 25, borderRadius: 15, backgroundColor: Theme.primaryColor, justifyContent: 'center', alignItems: 'center'}}>
             <Feather name="x" size={15} color="white" />
           </TouchableOpacity>
         </View>
         <Animated.ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingTop: 0}}>
          {
            loading ?
            <View style={{ width: '100%', height: Theme.height/100* 60, justifyContent: 'center', alignItems: 'center'}}>
              <ActivityIndicator color={Theme.primaryColor} size="large" />
            </View>
            :
            <View style={{ flex: 1, paddingHorizontal: 20, paddingTop: 20, marginBottom: 20}}>
            {/* <CongratulationCard /> */}
            {packages.map((item,index) => <PackageCard properties={item} navigate={props.navigate} key={index} />)}
       </View>
          }
       </Animated.ScrollView>
       </Modal>
    )
}
