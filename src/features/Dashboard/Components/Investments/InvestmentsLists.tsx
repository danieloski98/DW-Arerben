import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View, Text, ActivityIndicator, RefreshControl, ScrollView } from 'react-native'
import GradientButton from '../../../../Components/GradientButton';
import useUserDetails from '../../../../Hooks/useUserDetails';
import { Theme } from '../../../../theme';
import { IINvestment } from '../../../../Types/Investment';
import UserInvesmentCard from './UserInvesmentCard';
import {URL} from '../../../../utils/Url'

export default function InvestmentsLists() {
  const [loading, setLoading] = React.useState(true);
  const [investments, setInvestments] = React.useState(
    [] as Array<IINvestment>
  );
  const [refreshing, setRefreshing] = React.useState(false);
  const user = useUserDetails();
  const navigation = useNavigation();


  React.useEffect(() => {
    (async function () {
      // const res = await fetch(`${URL}/userprofile/dashboard/`);
      // const j = await res.json();
      // console.log(j);
      const result = await fetch(`${URL}/investment/`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${user.user.access}`,
        },
      });

      const json = await result.json();
      console.log(json);
      setInvestments(json.data);
      setLoading(false);
    })();
  }, []);

  const onRefresh = async () => {
    setRefreshing(true);
    setLoading(true);
    // const res = await fetch(`${URL}/userprofile/dashboard/`, {method: 'GET', headers: {'Content-Type': 'application/json', accept: 'application/json'}}, );
    //   const j = await res.json();
    //   console.log(j);

    const result = await fetch(`${URL}/investment/`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${user.user.access}`,
      },
    });

    const json = await result.json();
    console.log(json);
    setInvestments(json.data);
    setLoading(false);
    setRefreshing(false);
  };
  return (
    <ScrollView
          contentContainerStyle={{ zIndex: 1, paddingBottom: 55 }}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              colors={[Theme.primaryColor]}
              tintColor={Theme.primaryColor}
              title="fetching your investments"
            />
          }
        >
          {loading ? (
            <View
              style={{
                width: "100%",
                height: (Theme.height / 100) * 60,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ActivityIndicator color={Theme.primaryColor} size="large" />
            </View>
          ) : (
            <View
              style={{
                flex: 1,
                paddingHorizontal: 20,
                paddingTop: 20,
                marginBottom: 20,
              }}
            >
              {investments.length < 1 ? (
                <View
                  style={{
                    width: "100%",
                    height: (Theme.height / 100) * 20,
                    backgroundColor: "white",
                    borderRadius: 10,
                    justifyContent: "center",
                    paddingHorizontal: 20,
                  }}
                >
                  <Text
                    style={{
                      fontSize: Theme.header,
                      fontWeight: "500",
                      textAlign: "center",
                    }}
                  >
                    You have no current investments
                  </Text>
                  <View style={{ width: "100%", height: 50, marginTop: 20 }}>
                    <GradientButton
                      text="Create Investment"
                      onPress={() => alert('clicked')}
                    />
                  </View>
                </View>
              ) : (
                <View>
                  <View style={{ marginTop: 20 }}>
                    {investments.map((item, index) => (
                      <UserInvesmentCard key={index} {...item} />
                    ))}
                  </View>
                </View>
              )}
            </View>
          )}
        </ScrollView>
  )
}
