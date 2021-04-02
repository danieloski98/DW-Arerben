import React from 'react'
import { View, Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import CustomizableTabber from '../../../Components/CustomizableTabbar'
import { Theme } from '../../../theme'
import MeansOfIdentification from '../Components/MeansOfIdentification/MeansOfIdentification'
import NextOfKin from '../Components/NextOfKin/NextofKin'
import HeadersScrollView from '../Components/UpdateProfile/HeadersScrollView'
import UpdateProfileForm from '../Components/UpdateProfile/UpdateProfileForm'
import { CancelButton } from './UpdatePage'


const SwitchForm = (props: {value: number}) => {
    switch(props.value) {
        case 0: {
            return <UpdateProfileForm /> as JSX.Element|null
        }
        case 1: {
            return <MeansOfIdentification /> as JSX.Element|null
        }
        case 2: {
            return <NextOfKin /> as JSX.Element|null
        }
    }
}


export default function UploadDocumentPage() {
    const [page, setPage] = React.useState(1);
    const headers = ["Profile Picture", "Valid I.D Card", "Signature"];

    const setPageIndex = (pageNo: number) => {
        setPage(pageNo);
    }

    return (
        <View style={{ flex: 1 }}>
            <CustomizableTabber name="Upload Documents" rightItem={<CancelButton />} />
            <ScrollView style={{ flex: 1, paddingTop: 30, paddingHorizontal: Theme.majorSpace }}>

                <View style={{ flex: 1, backgroundColor: 'white', width: '100%', height: '100%', borderRadius: 10, overflow: 'hidden',}}>
                    <HeadersScrollView index={1} items={headers} onChange={setPageIndex} />

                    <View style={{ width: '100%', height: 'auto', backgroundColor: 'white', padding: Theme.majorSpace, overflow: 'visible', marginBottom: 50 }}>
                    
                           {<SwitchForm value={page} /> as JSX.Element|null }
                       
                    </View>
                </View>
                
            </ScrollView>
        </View>
    )
}
