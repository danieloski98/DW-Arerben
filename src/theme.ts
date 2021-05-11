import {Dimensions} from 'react-native'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const Theme = {
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
    header: RFValue(18, Dimensions.get('window').height),
    normalText: RFValue(14, Dimensions.get('window').height),
    primaryColor: '#F46929',
    black: '#222222',
    elevation: 5,
    shadowColor: 'grey',
    shadowRadius: 7,
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.7,
    majorSpace: 10
}
