import React from 'react'
import { View, Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import CustomizableTabber from '../../../Components/CustomizableTabbar'
import { Theme } from '../../../theme'
import HeadersScrollView from '../Components/UpdateProfile/HeadersScrollView'
import { CancelButton } from './UpdatePage'

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
                </View>
                
            </ScrollView>
        </View>
    )
}
