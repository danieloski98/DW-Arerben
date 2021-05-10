import React from 'react'
import { View, Text } from 'react-native'
import CustomizableTabber from '../../../Components/CustomizableTabbar'
import { Theme } from '../../../theme'
import TextBox from '../Components/TextBox'
import {Feather} from '@expo/vector-icons'
import GradientButton from '../../../Components/GradientButton'
import * as yup from 'yup'
import { useFormik } from 'formik'

const val = yup.object({
  old_password: yup.string().required('This field is required').min(8, 'Minimium of 8 characters'),
  new_password: yup.string().required('This field is required').min(8, 'Minimium of 8 characters'),
});

export default function ChanePassword() {
    const [show, setShow] = React.useState(false);

    const formik = useFormik({
      initialValues: {old_password: '', new_password: ''},
      onSubmit: () => {},
      validationSchema: val,
    })

    return (
        <View style={{ flex: 1 }}>
            <CustomizableTabber name="Change Password" />
            <View style={{ flex: 1, paddingHorizontal: Theme.majorSpace, paddingTop: 50 }}>
                <View style={{ width: '100%', height: 300, borderRadius: 10, backgroundColor: 'white', padding: Theme.majorSpace}}>
                    <Text style={{ textAlign: 'center', fontSize: Theme.normalText, fontWeight: '700', color: 'grey'}}>Please your new password must be different</Text>

                    <Text style={{ marginTop: 50 }}>OLD PASSWORD</Text>
                    <View style={{ width: '100%', height: '18%'}}>
                        <TextBox name="old_password" value={formik.values.old_password} onChange={formik.handleChange} />
                    </View>

                    <Text style={{ marginTop: 20 }}>NEW PASSWORD</Text>
                    <View style={{ width: '100%', height: '18%'}}>
                        <TextBox  name="new_password" value={formik.values.new_password} onChange={formik.handleChange}  rightItem={<Feather name={show ?"eye-off":"eye"} color='lightgrey' size={25} onPress={() => setShow(prev => !prev)} style={{ zIndex: 2}} />}/>
                    </View>
                </View>
            </View>
            <View style={{ width: '100%', height: '10%', backgroundColor: 'white', paddingHorizontal: Theme.majorSpace, paddingBottom: Theme.majorSpace}}>
                <View style={{ width: '100%', height: '70%'}}>
                <GradientButton text="Save" onPress={() => alert("No route yet for this")} />
                </View>
            </View>
        </View>
    )
}
