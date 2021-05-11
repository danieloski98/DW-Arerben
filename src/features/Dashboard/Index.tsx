import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons'
import { Theme } from '../../theme';

// components
import Home from './Pages/Home';
import Investments from './Pages/Investments';
import Account from './Pages/Account';
import ROI_History from './Pages/ROI-History';
import More from './Pages/More';
import Notifications from './Pages/Notifications'
import SearchPage from './Pages/SearchPage';
import UpdatePage from './Pages/UpdatePage';
import UploadDocumentPage from './Pages/UploadDocumentPage';
import ChanePassword from './Pages/ChanePassword';
import RegisterAgent from './Pages/RegisterAgent';
import Referrals from './Pages/Referrals';
import CreateInvestment from './Pages/CreateInvestment';
import UpdateUserModal from './Components/Home/UpdateUserModal';


function Icon(props: {iconName: any, name: string, focused: boolean}) {
    return(
        <View style={{alignItems: 'center', paddingVertical: 5}}>
            <Feather name={props.iconName} size={25} color={props.focused ? Theme.primaryColor:'grey'}/>
            <Text style={{ color: props.focused ? 'grey':'lightgrey', fontSize: Theme.normalText -5, fontWeight: '400', marginTop: 5}}>{props.name}</Text>
        </View>
    )
}


const Stack = createStackNavigator();
const Bottomtabs = createBottomTabNavigator();

function Tabs() {
    return (
        <Bottomtabs.Navigator initialRouteName="Home" tabBarOptions={{labelStyle: { color: 'grey'}, showLabel: false, tabStyle: {paddingVertical: 0, backgroundColor: 'white', height: 80, marginTop: -30,}}} >

            <Bottomtabs.Screen name="Home" component={Home} options={{ tabBarIcon: ({ focused }) =>  <Icon name="Home" iconName="home" focused={focused} />, tabBarLabel:'Home', title: "" }}/>


            <Bottomtabs.Screen name="Investments" component={Investments} options={{ tabBarIcon: ({ focused }) =>  <Icon name="Investments" iconName="pie-chart" focused={focused} />  }} />


            <Bottomtabs.Screen name="Account" component={Account} options={{ tabBarIcon: ({ focused }) =>  <Icon iconName="user" name="Account" focused={focused} />,  }} />


            {/* <Bottomtabs.Screen name="Roi" component={ROI_History} options={{ tabBarIcon: ({ focused }) =>  <Icon iconName="award" name="ROI" focused={focused} />,  }} /> */}


            <Bottomtabs.Screen name="More" component={More} options={{ tabBarIcon: ({ focused }) =>  <Icon iconName="more-horizontal" name="More" focused={focused} />, }} />


        </Bottomtabs.Navigator>
    )
}

const StackNavigator = () => (
    <Stack.Navigator initialRouteName="dashboard">
        <Stack.Screen name="dashboard" component={Tabs} options={{ headerShown: false }} />
        <Stack.Screen name="notifications" component={Notifications} options={{ headerShown: false }} />
        <Stack.Screen name="search" component={SearchPage} options={{ headerShown: false }} />
        <Stack.Screen name="update" component={UpdatePage} options={{ headerShown: false }} />
        <Stack.Screen name="uploaddocument" component={UploadDocumentPage} options={{ headerShown: false }} />
        <Stack.Screen name="changepassword" component={ChanePassword} options={{ headerShown: false }} />
        <Stack.Screen name="registeragent" component={RegisterAgent} options={{ headerShown: false }} />
        <Stack.Screen name="referrals" component={Referrals} options={{ headerShown: false }} />
        <Stack.Screen name="invest" component={CreateInvestment} options={{ headerShown: false }} />
        <Stack.Screen name="initialupdate" component={UpdateUserModal} options={{ headerShown: false }} />
    </Stack.Navigator>
)

export default function Index() {
    return <StackNavigator />
}
