import React from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Theme } from '../../../../theme'
import TextBox from '../TextBox'
import * as yup from 'yup'
import { useFormik } from 'formik'

const validationSchema = yup.object({
  email: yup.string().email('Invalid email'),
})

export default function InviteCard() {

  const formik = useFormik({
    initialValues: {email: ''},
    onSubmit: () => {},
    validationSchema: validationSchema
  })
    return (
        <View style={{ flex: 1,  }}>
            <Text style={{ fontSize: Theme.header, fontWeight: '700'}}>Send an invitation to a friend</Text>
            <Text style={{ fontSize: Theme.normalText, fontWeight: '300', marginTop: 10}}>Type your friend’s email address and send them an invitation.</Text>
            <View style={{ flex: 0.5, marginTop: 10}}>
                <Text style={{ fontSize: Theme.normalText, fontWeight: '300'}}>Email</Text>
                <View style={{ height: '70%'}}>
                <View style={{ width: '100%', height: 50, marginVertical: 3 }}>
                    <TextBox name="email" value={formik.values.email} onChange={formik.handleChange} />
                </View>
                <TouchableOpacity style={{ width: Theme.width /100* 40, height: 50, backgroundColor: 'lightgrey', borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginTop: 10}}>
                    <Text>Send</Text>
                </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
