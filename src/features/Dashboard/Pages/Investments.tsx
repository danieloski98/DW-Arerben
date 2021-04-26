import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import Animated, {useSharedValue, useAnimatedStyle} from 'react-native-reanimated'
import GradientButton from '../../../Components/GradientButton'

// components
import Tabbar from '../../../Components/Tabbar'
import useUserDetails from '../../../Hooks/useUserDetails'
import { Theme } from '../../../theme'
import { INvestmentPackage } from '../../../Types/Investmentpackage.type'
import { ILocation } from '../../../Types/Location.type'
import { URL } from '../../../utils/Url'
import CongratulationCard from '../Components/CongratulationCard'
import InvestmentCards from '../Components/Investments/InvestmentsCardsModal'
import PackageCard from '../Components/PackageCard'

// interface
export interface INvestment extends INvestmentPackage {
  status: string;
  is_reviewed: string;
}


export default function Investments() {
  const [loading, setLoading] = React.useState(true);
  const [investments, setInvestments] = React.useState([] as Array<INvestment>);
  const [showModal, setShowModal] = React.useState(false);
  const user = useUserDetails();
  const navigation = useNavigation();

  React.useEffect(() => {
    (async function() {
      const result = await fetch(`${URL}/investment/`, {
        method: 'GET',
        headers: {
          authorization: `Bearer ${user.user.access}`
        }
      })

      const json = await result.json();
      setInvestments(json.data.results);
      setLoading(false);

    })();
  }, []);

  // methods
  const navigate = (pack_id: number) => {
    setShowModal(false);
    navigation.navigate('invest', {package: pack_id})
  }

  const closeModal = () => {
    setShowModal(false);
  }
    return (
       <Animated.ScrollView showsVerticalScrollIndicator={false}>
           <Tabbar />
           <InvestmentCards open={showModal} navigate={navigate} close={closeModal}/>
          {
            loading ?
            <View style={{ width: '100%', height: Theme.height/100* 60, justifyContent: 'center', alignItems: 'center'}}>
              <ActivityIndicator color={Theme.primaryColor} size="large" />
            </View>
            :
            <View style={{ flex: 1, paddingHorizontal: 20, paddingTop: 20, marginBottom: 20}}>
            {
              investments.length < 1 ?
                <View style={{ width: '100%', height: Theme.height/100* 20, backgroundColor: 'white', borderRadius: 10, justifyContent: 'center', paddingHorizontal: 20 }}>
                  <Text style={{ fontSize: Theme.header, fontWeight: '500', textAlign: 'center'}}>You have no current investments</Text>
                  <View style={{ width: '100%', height: 50 }}>
                  <GradientButton text="Create Investment" onPress={() => setShowModal(true)} />
                  </View>
                </View>
                :
                <View>
                  <Text>Your Investments</Text>
                </View>
            }
            </View>
          }
       </Animated.ScrollView>
    )
}
