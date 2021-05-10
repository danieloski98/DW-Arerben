import React from 'react'
import { View, Text } from 'react-native'
import Animated from 'react-native-reanimated'

// components
import Tabbar from '../../../Components/Tabbar'
import ChangePasswordCard from '../Components/ChangePasswordCard'
import UpdateProfileCard from '../Components/UpdateProfileCard'
import UploadDocumentsCard from '../Components/UploadDocuments'

export default function Account() {
    return (
       <Animated.ScrollView>
           <Tabbar />
           <View style={{ width: '100%', paddingHorizontal: 20, paddingTop: 20, paddingBottom: 20}}>
               <UpdateProfileCard />
               {/* <UploadDocumentsCard /> */}
               <ChangePasswordCard />
           </View>
       </Animated.ScrollView>
    )
}
