import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Theme } from '../../../../theme'
import {Feather} from '@expo/vector-icons'

export default function Stats() {
  return (
    <View style={style.parent}>
      <View style={style.statsContainer}>
          <View style={[style.iconContainer, { backgroundColor: '#FBC3A9'}]}>
            <Feather name="dollar-sign" size={20} color="black" />
          </View>
          <Text style={style.headerText}>N12,000.00</Text>
          <Text style={style.normalText}>My Wallet</Text>
      </View>

      <View style={style.statsContainer}>
          <View style={[style.iconContainer, { backgroundColor: '#ADD4F9'}]}>
            <Feather name="bar-chart-2" size={20} color="black" />
          </View>
          <Text style={style.headerText}>N12,000.00</Text>
          <Text style={style.normalText}>Total Investments</Text>
      </View>

      <View style={style.statsContainer}>
          <View style={[style.iconContainer, { backgroundColor: '#A1D6C7'}]}>
            <Feather name="pie-chart" size={20} color="black" />
          </View>
          <Text style={style.headerText}>N12,000.00</Text>
          <Text style={style.normalText}>Investments</Text>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  parent: {
    flex: 1,
    height: Theme.height/100*20,
    backgroundColor: 'transparent',
    paddingVertical: Theme.majorSpace,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  statsContainer: {
    width: '32%',
    height: '100%',
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: Theme.majorSpace
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    fontWeight: '700',
    fontSize: Theme.header,
    marginTop: Theme.majorSpace
  },
  normalText: {
    fontWeight: '400',
    fontSize: Theme.normalText,
    marginTop: Theme.majorSpace,
    color: 'grey',
    textAlign: 'center'
  }
})
