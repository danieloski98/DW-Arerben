import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Button from '../../../../Components/Button';
import GradientButton from '../../../../Components/GradientButton';
import { Theme } from '../../../../theme';
import { IINvestment } from '../../../../Types/Investment';
import { useNavigation } from '@react-navigation/native'

export default function UserInvesmentCard(props: IINvestment) {
  const navigation = useNavigation();
  const checkPack = (pack: number) => {
    switch(pack) {
      case 1: {
        return "Classic"
      }
      case 2: {
        return "Premium"
      }
      case 3: {
        return "Platnium"
      }
    }
  }
  return (
    <View style={style.parent}>
      <View style={style.header}>
        <Text style={style.packText}>{props.invest_pack_name}</Text>
        <View style={style.statusTextHolder}>
            <Text style={style.statusText}>{props.status}</Text>
        </View>
      </View>

      <View style={style.container}>
          <Text style={style.titleText}>Amount Invested</Text>
          <View style={style.contentBox}>
            <Text>{props.invest_amount}</Text>
          </View>
      </View>

      <View style={style.container}>
          <Text style={style.titleText}>Duration</Text>
          <View style={style.contentBox}>
            <Text>{props.Duration}</Text>
          </View>
      </View>

      <View style={style.container}>
          <Text style={style.titleText}>ROI</Text>
          <View style={style.contentBox}>
            <Text>{props.ROI}</Text>
          </View>
      </View>

      <View style={style.container}>
          <Text style={style.titleText}>Est ROI</Text>
          <View style={style.contentBox}>
            <Text>{props.EST_ROI}</Text>
          </View>
      </View>

      <View style={style.container}>
          <Text style={style.titleText}>Date</Text>
          <View style={style.contentBox}>
            <Text>{props.invest_date}</Text>
          </View>
      </View>

      <View style={style.btnContainer}>
        <View style={style.btnHolder}>
          <GradientButton text="Terminate" onPress={() => navigation.navigate('terminate', {id:props.id})} />
        </View>
        <View style={style.btnHolder}>
          <Button color="lightgrey" text="RollOver" onPress={() => navigation.navigate('rollover', {id:props.id})} />
        </View>
      </View>

    </View>
  )
}

const style = StyleSheet.create({
  parent: {
    width: '100%',
    borderRadius: 10,
    padding: 20,
    backgroundColor: 'white',
    elevation: 5,
    shadowColor: Theme.shadowColor,
    shadowOffset: Theme.shadowOffset,
    shadowOpacity: Theme.shadowOpacity,
    shadowRadius: Theme.shadowRadius,
    marginBottom: 20
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: Theme.majorSpace,
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 2,
  },
  statusTextHolder: {
    backgroundColor: '#069c796e',
    padding: 10,
    borderRadius: 10,
  },
  statusText: {
    color: '#069C79'
  },
  packText: {
    color: 'black',
    fontSize: Theme.header,
    fontWeight: '700'
  },
  container: {
    marginVertical: 10,
  },
  titleText: {
    fontSize: Theme.normalText,
    fontWeight: '600',
    color: 'grey'
  },
  contentBox: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'whitesmoke',
    marginTop: 5,
  },
  btnContainer: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  btnHolder: {
    width: '45%',
    height: '100%',
  }
});
