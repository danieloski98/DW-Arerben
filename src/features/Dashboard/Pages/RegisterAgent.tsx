import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import Button from '../../../Components/Button'
import CustomizableTabber from '../../../Components/CustomizableTabbar'
import GradientButton from '../../../Components/GradientButton'
import { Theme } from '../../../theme'
import Stage1Form from '../Components/RegisterAgent/Stage1Form'
import Stage2Form from '../Components/RegisterAgent/Stage2Form'
import Stage3Form from '../Components/RegisterAgent/Stage3Form'
import HeadersScrollView from '../Components/UpdateProfile/HeadersScrollView'


export const SwitchForm = (props: {value: number}) => {
    switch(props.value) {
        case 0: {
            return <Stage1Form />
        }
        case 1: {
            return <Stage2Form />
        }
        case 2: {
            return <Stage3Form />
        }
        default: {
            return <Stage3Form />
        }
    }
}

const Buttons = () => (
    <View style={{ flex:1, flexDirection: 'row', justifyContent: 'space-between' }}>

       

    </View>
)


export default function RegisterAgent() {
    const [page, setPage] = React.useState(0);
    const headers = ["Stage 01", "Stage 02", "Stage 03"];

    const setPageIndex = (pageNo?: number) => {
        if(pageNo !== null || pageNo !== undefined) {
            setPage(pageNo as number);
        }else if (pageNo === undefined || pageNo === null) {
            if(page >= 2 ) {
                setPage(0);
            }else {
                setPage(page => page++);
            }
        }
    }

    const next = () => {
        if (page === 2) {
            // make request
        }else {
            setPage(page => page + 1);
        }
    }

    return (
        <View style={{ flex: 1}}>
           <CustomizableTabber name="DW-Investment Agent Form" />

           <ScrollView style={{ flex: 1, paddingTop: 30, paddingHorizontal: Theme.majorSpace, paddingBottom: 30 }} contentContainerStyle={{ marginBottom: 30}}>

                <View style={{ flex: 1, backgroundColor: 'white', width: '100%', height: '100%', borderRadius: 10, overflow: 'hidden', marginBottom: 20}}>
                    <HeadersScrollView index={page} items={headers} onChange={setPageIndex} />

                    <View style={{ width: '100%', height: 'auto', backgroundColor: 'white', padding: Theme.majorSpace, overflow: 'visible', marginBottom: 50 }}>
                    
                           <SwitchForm value={page} />
                       
                    </View>
                </View>
                
            </ScrollView>
            <View style={{ flex: 0.2, backgroundColor: 'white', paddingHorizontal: 20, justifyContent: 'center', elevation: 5,shadowColor: Theme.shadowColor, shadowOpacity: 0.7, shadowOffset: Theme.shadowOffset, shadowRadius: Theme.shadowRadius }}>

                <View style={{ width: '100%', height: '70%', justifyContent: 'center'}}>
                    {
                        page < 1 ? 

                        <View style={{ width: '100%', height: '70%', bottom: 20 }}>
                            <GradientButton onPress={() => setPageIndex(1)} text={page === 3 ? "Submit":"Next"} />
                        </View> 
                        
                        :

                        <View style={{ width: '100%', height: '70%', flexDirection: 'row', justifyContent: 'space-between' }}>
                             <View style={{ width: '45%', height: '100%'}}>
                                <Button text="Previous" onPress={() => setPage(prev => prev - 1)} />
                            </View>

                            <View style={{ width: '45%', height: '100%'}}>
                                <Button text={page === 1 ? "Next":"Submit"} onPress={next} color={Theme.primaryColor} />
                            </View>
                        </View>

                    }
                </View>
            
               
            </View>
        </View>
    )
}
