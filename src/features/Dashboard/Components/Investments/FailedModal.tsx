import React from 'react'
import { View, Text, Modal, StyleSheet, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { Theme } from '../../../../theme'
import {  } from 'react-native-gesture-handler'

export default function FailedModal(props: { visible: boolean, close: Function }) {
  return (
    <Modal visible={props.visible}  transparent>
      <View style={{ width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.603)', justifyContent: 'center', paddingHorizontal: 20}}>
        <View style={{ width: '100%', borderRadius: 10, backgroundColor: 'white', height: '40%', alignItems: 'center', justifyContent: 'center', padding: 20 }}>
            <Feather name="x" color="red" size={60} />

            <Text style={style.headerText}>Your Investment Application was not successful!</Text>
            <Text style={style.normalText}>Please contact our support centre for assistance</Text>

            <TouchableOpacity onPress={() => props.close()} style={{ width: 100, height: 40, borderRadius: 10, backgroundColor: 'lightgrey', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
              <Text>Close</Text>
            </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}


const style = StyleSheet.create({
  headerText: {
    fontSize: Theme.header,
    color: 'black',
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 10
  },

  normalText: {
    fontSize: Theme.normalText,
    color: 'grey',
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 10
  }
});
