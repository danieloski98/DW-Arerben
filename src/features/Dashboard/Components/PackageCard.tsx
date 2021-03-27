import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

// svg icons
import OrangeDiamond from '../../../../assets/svgs/Orangediamond'
import BlackDiamond from '../../../../assets/svgs/BlackDiamond'
import BlueDiamond from '../../../../assets/svgs/BlueDiamond'
import { Theme } from '../../../theme'
import GradientButton from '../../../Components/GradientButton'


interface IProps {
    type: "Classic" | "Premium" | "Platnium";
    duration: string;
    packages: Array<any>;
    ROI: Array<any>;
}

export default function PackageCard(props: IProps) {
    const checkType = (type: string) => {
        switch(type) {
            case "Classic": {
                return <OrangeDiamond />;
            }
            case "Premium": {
                return <BlueDiamond />;
            }
            case "Platnium": {
                return <BlackDiamond />
            }
        }
    }

    const typeText = (type: string) => {
        switch(type) {
            case "Classic": {
                return "Classic (Monthly)";
            }
            case "Premium": {
                return "Premium (Quaterly)";
            }
            case "Platnium": {
                return "Platium (Annual)";
            }
        }
    }

    const backColor = (type: string) => {
        switch(type) {
            case "Classic": {
                return "#FFE3D6";
            }
            case "Premium": {
                return "#A0EBFF";
            }
            case "Platnium": {
                return "#E6E6E6";
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
        }
    }
    return (
        <View style={[style.parent, {borderWidth: props.type === "Platnium" ? 2: 0, borderColor: props.type=== "Platnium" ? Theme.primaryColor: 'transparent'}]}>
            <View>
                {checkType(props.type)}
            </View>
            <Text style={{ fontWeight: '400', fontSize: Theme.header }}>{typeText(props.type)}</Text>
            <View style={{ padding: 3, backgroundColor: backColor(props.type), borderRadius: 20, width: '50%', marginTop: 10}}>
            <Text style={{ color: textColor(props.type), marginLeft: 10}}>{props.duration}</Text>
            </View>

            <View style={{ width: '100%', height: 30, backgroundColor: 'transparent', marginTop: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <Text>Investment PKG</Text>
                <Text>ROI Profit</Text>
            </View>

            <View style={{ width: '100%', backgroundColor: 'whitesmoke', marginTop: 10}}>

                {
                    props.packages.map((item, index) => (
                        <View key={index} style={{ width: '100%', height: 30, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: index % 2 === 0 ? 'whitesmoke': 'white' }}>
                            <Text style={{ fontSize: Theme.normalText, fontWeight: '500'}}>{item}</Text>
                            <Text>{props.ROI[index]}</Text>
                        </View>
                    ))
                }

            </View>
            <View style={{ width: '100%', height: 50, alignItems: 'center', marginBottom: 20}}>
                <View style={{ width: '50%', height: '100%'}}>
                    <GradientButton text="Choose package" onPress={() => alert(props.type)} />
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