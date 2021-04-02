import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import CustomizableTabber from '../../../Components/CustomizableTabbar'
import GradientButton from '../../../Components/GradientButton'
import { Theme } from '../../../theme'
import HeadersScrollView from '../Components/UpdateProfile/HeadersScrollView'
import { SwitchForm } from './UploadDocumentPage'

export default function RegisterAgent() {
    const [page, setPage] = React.useState(1);
    const headers = ["Stage 01", "Stage 02", "Stage 03"];

    const setPageIndex = (pageNo?: number) => {
        if(pageNo) {
            setPage(pageNo as number);
        }else {
            if(page === 2) {
                alert("saving");
            }else {
                setPage(page => page+1);
            }
        }
    }

    return (
        <View style={{ flex: 1}}>
           <CustomizableTabber name="DW-Investment Agent Form" />
           <ScrollView style={{ flex: 1, paddingTop: 30, paddingHorizontal: Theme.majorSpace, paddingBottom: 30 }} contentContainerStyle={{ marginBottom: 30}}>

                <View style={{ flex: 1, backgroundColor: 'white', width: '100%', height: '100%', borderRadius: 10, overflow: 'hidden', paddingBottom: 20}}>
                    <HeadersScrollView index={1} items={headers} onChange={setPageIndex} />

                    <View style={{ width: '100%', height: 'auto', backgroundColor: 'white', padding: Theme.majorSpace, overflow: 'visible', marginBottom: 50 }}>
                    
                           {<SwitchForm value={page} /> as JSX.Element|null }
                       
                    </View>
                </View>
                
            </ScrollView>
            <View style={{ flex: 0.1, backgroundColor: 'white', paddingHorizontal: 10}}>
                <View style={{ width: '100%', height: '80%', bottom: 15}}>
                    <GradientButton onPress={() => setPageIndex()} text={page === 3 ? "Submit":"Next"} />
                </View>
            </View>
        </View>
    )
}
