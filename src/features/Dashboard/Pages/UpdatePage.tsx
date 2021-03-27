import React from 'react'
import { View, Text } from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack'
import { RouteProp, useNavigation } from '@react-navigation/native'
import CustomizableTabber from '../../../Components/CustomizableTabbar';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Theme } from '../../../theme';
import HeadersScrollView from '../Components/UpdateProfile/HeadersScrollView';
import TextBox from '../Components/TextBox';
import UpdateProfileForm from '../Components/UpdateProfile/UpdateProfileForm';

export const CancelButton = () => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.goBack()} style={{ width: Theme.width / 100 * 30, height: '50%', borderWidth: 2, borderColor: 'grey', justifyContent: 'center', alignItems: 'center', borderRadius: 10}}>
            <Text>Cancel</Text>
        </TouchableOpacity>
    )
}

export default function UpdatePage(props: { navigation: StackNavigationProp<any>, route: RouteProp<{params: {section: number}}, "params">}) {

    const [index, setIndex] = React.useState(props.route.params.section);
    const [page, setPage] = React.useState(1);
    const headers = ["Personal Information", "Means of Identification", "Next of Kin"];
    
    const setPageIndex = (pageNo: number) => {
        setPage(pageNo);
    }

    return (
        <View style={{ flex: 1 }}>
            <CustomizableTabber name="Update Profile" rightItem={<CancelButton />} />
            <ScrollView style={{ flex: 1, paddingTop: 30, paddingHorizontal: Theme.majorSpace, }} showsVerticalScrollIndicator={false} scrollEventThrottle={0}>

                <View style={{ flex: 1, backgroundColor: 'white', width: '100%', height: '100%', borderRadius: 10, marginBottom: Theme.height/100*31}}>

                   <HeadersScrollView index={index} items={headers} onChange={setPageIndex}/>

                    <View style={{ width: '100%', height: 'auto', backgroundColor: 'white', padding: Theme.majorSpace, overflow: 'visible', marginBottom: 50 }}>
                    
                           <UpdateProfileForm />
                       
                    </View>

                </View>

            </ScrollView>
        </View>
    )
}
