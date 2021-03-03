import {Dimensions} from 'react-native'
export const Theme = {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    header: Dimensions.get('window').width / 100 * 6,
    normalText: Dimensions.get('window').width / 100 * 4
}