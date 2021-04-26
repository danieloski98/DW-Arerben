import React from 'react'
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import { useNavigation } from '@react-navigation/native'

// svg icons
import OrangeDiamond from '../../../../assets/svgs/Orangediamond'
import BlackDiamond from '../../../../assets/svgs/BlackDiamond'
import BlueDiamond from '../../../../assets/svgs/BlueDiamond'
import { Theme } from '../../../theme'
import GradientButton from '../../../Components/GradientButton'
import { INvestmentPackage } from '../../../Types/Investmentpackage.type'
import LocationIdentifier from './Investments/LocationIdentifier'
import { ILocation } from '../../../Types/Location.type'
import useUserDetails from '../../../Hooks/useUserDetails'
import { URL } from '../../../utils/Url'


interface IProps {
    type: "Classic" | "Premium" | "Platnium";
    duration: string;
    packages: Array<any>;
    ROI: Array<any>;
}

export default function PackageCard(props: {properties: INvestmentPackage, navigate: Function}) {
  const [locations, setLoactions] = React.useState([] as Array<ILocation>);
  const [loading, setLoading] = React.useState(true);
  const user = useUserDetails();

  React.useEffect(() => {
    (async function() {
     const result = fetch(`${URL}/userprofile/location/`, {
       method: 'GET',
       headers: {
         authorization: `Bearer ${user.user.access}`
       }
     });

     const json = await (await result).json();

     console.log(json);

     setLoactions(json.data.results);
     setLoading(false);
    //  console.log(locations);

    })();
   }, []);

    const navigation = useNavigation()

    const checkType = (type: string) => {
        switch(type) {
            case "Classic (Monthly)": {
                return <OrangeDiamond />;
            }
            case "Premium (Quarterly)": {
                return <BlueDiamond />;
            }
            case "Platium (Annual)": {
                return <BlackDiamond />
            }
        }
    }

    const typeText = (type: string) => {
        switch(type) {
            case "Classic (Monthly)": {
                return "Classic (Monthly)";
            }
            case "Premium (Quarterly)": {
                return "Premium (Quarterly)";
            }
            case "Platium (Annual)": {
                return "Platium (Annual)";
            }
        }
    }

    const backColor = (type: string) => {
        switch(type) {
            case "Classic (Monthly)": {
                return "#FFE3D6";
            }
            case "Premium (Quarterly)": {
                return "#A0EBFF";
            }
            case "Platium (Annual)": {
                return "#E6E6E6";
            }
            default: {
              return 'red';
            }
        }
    }

    const textColor = (type: string) => {
        switch(type) {
            case "Classic": {
                return "#F46929";
            }
            case "Premium": {
                return "#0073AA";
            }
            case "Platnium": {
                return "#222222";
            }
            default: {
              return 'red';
            }
        }
    }
    return (
        <View style={[style.parent, {borderWidth: props.properties.name === "Platnium" ? 2: 0, borderColor: props.properties.name=== "Platnium (Annual)" ? Theme.primaryColor: 'transparent'}]}>
            <View>
                {checkType(props.properties.name)}
            </View>
            <Text style={{ fontWeight: '400', fontSize: Theme.header }}>{typeText(props.properties.name)}</Text>
            <View style={{ padding: 3, backgroundColor: backColor(props.properties.name), borderRadius: 20, width: '50%', marginTop: 10}}>
            <Text style={{ color: textColor(props.properties.name), marginLeft: 10}}>{typeText(props.properties.name)}</Text>
            </View>

            <View style={{ width: '100%', height: 30, backgroundColor: 'transparent', marginTop: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <Text style={{ fontSize: Theme.normalText + 3, fontWeight: '700', color: 'grey'}}>Availiable Locations</Text>
            </View>

            <View style={{ width: '100%', backgroundColor: 'white', marginTop: 10}}>

              {
                loading ?
                <ActivityIndicator color={Theme.primaryColor} size="small" />
                :
                props.properties.location.map((item, index) => (
                    <LocationIdentifier location={item} locations={locations} key={index} />
                ))
              }

            </View>
            <View style={{ width: '100%', height: 50, alignItems: 'center', marginBottom: 20}}>
                <View style={{ width: '100%', height: 50}}>
                    <GradientButton text="Choose package" onPress={() => props.navigate(props.properties.id)} />
                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    parent: {
        width: '100%',
        height: 'auto',
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        marginBottom: 20
    }
})

