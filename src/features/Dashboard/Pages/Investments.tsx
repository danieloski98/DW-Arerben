import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet, RefreshControl } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import Animated, {useSharedValue, useAnimatedStyle} from 'react-native-reanimated'
import GradientButton from '../../../Components/GradientButton'
import { Feather } from '@expo/vector-icons'

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
  const [refreshing, setRefreshing] = React.useState(false);
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

  const onRefresh = async() => {
    setRefreshing(true);
    // setLoading(true);
    const result = await fetch(`${URL}/investment/`, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${user.user.access}`
      }
    })

    const json = await result.json();
    console.log(json);
    setInvestments(json.data.results);
    // setLoading(false);
    const timer = setTimeout(() => {
      setRefreshing(false);
      clearTimeout(timer);
    }, 3000)

  };

    return (
       <View style={style.parent}>
           <Tabbar />
           <InvestmentCards open={showModal} navigate={navigate} close={closeModal}/>
         <View style={style.scrollContainer}>
            <ScrollView refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} colors={[Theme.primaryColor]} tintColor={Theme.primaryColor} title="fetching your investments" />
            }>
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
                  <View style={{ width: '100%', height: 50, alignItems: 'flex-end'}}>
                    <TouchableOpacity onPress={() => setShowModal(true)} style={{ width: 50, height: 50, borderRadius: 30, backgroundColor: Theme.primaryColor, justifyContent: 'center', alignItems: 'center', position: 'absolute', right: 10, top: Theme.height /100*61 }}>
                        <Feather name="plus" size={30} color="white" />
                    </TouchableOpacity>
                  </View>
                </View>
            }
            </View>
          }
            </ScrollView>
         </View>
       </View>
    )
}


const style = StyleSheet.create({
  parent: {
    flex: 1,
  },
  scrollContainer: {
    flex: 1,
  }
});
