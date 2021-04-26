import React from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import useUserDetails from '../../../../Hooks/useUserDetails';
import { Theme } from '../../../../theme';
import { ILocation } from '../../../../Types/Location.type';
import { URL } from '../../../../utils/Url';

export default function LocationIdentifier(props: {location: number, locations: Array<ILocation>}) {

  return (
    <View style={{ width: '100%', marginBottom: 20, backgroundColor: 'whitesmoke', borderRadius: 10}}>
        <Text style={{ margin: 10 }}>{props.locations.filter((item) => item.id === props.location)[0].name}</Text>
    </View>
  )
}
