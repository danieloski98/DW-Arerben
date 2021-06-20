import React from 'react'
import { View, Text, ScrollView, Animated, StyleSheet, Alert } from 'react-native'
import Tabbar from '../../../Components/Tabbar'
import useUserDetails from '../../../Hooks/useUserDetails'
import { Theme } from '../../../theme'
import { useNavigation } from '@react-navigation/native'
import {URL} from '../../../utils/Url'

// components
import UpdateCard from '../Components/UpdateCard'
import VideoCard from '../Components/VideoCard'
import UpdateUserModal from '../Components/Home/UpdateUserModal'
import Stats from '../Components/Home/Stats'


export default function Home() {
    const user = useUserDetails();
    const navigation = useNavigation();
    const [showModal, setShowModal] = React.useState(false);

    // states
    const [showUpdateUserModal, setUpdateUserModal] = React.useState(false);
  // check if the user has registered

  React.useEffect(() => {
    console.log(user.user);
    (async function() {
      const request = await fetch(`${URL}/userprofile/`, {
        method: 'GET',
        headers: {accept: "application/json", authorization: `Bearer ${user.user.access}`}
      });
      const json = await request.json();
      if (request.status === 404) {
        Alert.alert(`Complete Profile Setup`, 'You have to create your user profile', [{text: 'Update', style: "default", onPress: () => navigation.navigate("initialupdate") }])
      }
      if (request.status === 200) {
        // update the user settings
        user.setUserAtom({...user.user, ...json.data.results[0]});

      }
      // request to check the user
    })()
  }, []);

  const navigate = () => {
    navigation.navigate('update')
  }

    return (
        <Animated.ScrollView bounces={false} scrollEventThrottle={16} showsVerticalScrollIndicator={false}>
            <Tabbar />

            <View style={style.parent}>
                <Stats />
                {/* <UpdateCard /> */}
                <VideoCard />

            </View>
        </Animated.ScrollView>
    )
}

const style = StyleSheet.create({
    parent: {
        flex: 1,
        paddingHorizontal: Theme.majorSpace + 10,
        paddingTop: Theme.majorSpace,
        paddingBottom: 50,
    },
    container: {
        width: '100%',
        height: 400,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 20
    },
    writeup: {
        fontSize: Theme.normalText,
        fontWeight: '500'
    },
    flexbox: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start'
    },
    box: {
        width:'45%',
        height: '50%',
        justifyContent: 'center'
    },
    borderBox: {
        width: '50%',
        height: '50%',
        borderRadius: 300,
        borderStyle: 'dashed',
        borderWidth: 2,
        borderColor: Theme.primaryColor,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
