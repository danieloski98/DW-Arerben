import React from 'react'
import { View, Text, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native'
import CustomizableTabber from '../../../Components/CustomizableTabbar'
import GradientButton from '../../../Components/GradientButton'
import { Theme } from '../../../theme'
import TextBox from '../../Dashboard/Components/TextBox'
import * as yup from 'yup';
import {useFormik} from 'formik';
import { URL } from '../../../utils/Url'

const schema = yup.object({
    email: yup.string().email('Invalid email')
})


export default function ForgotPassword() {

    const [sent, setsent] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const formik = useFormik({
        initialValues: {email: ''},
        validationSchema: schema,
        onSubmit: () => {null}
    })

    // React.useEffect(() => {
    //     return () => {
    //         setsent(false);
    //         setLoading(false);
    //     }
    // })

    const submit = async() => {
        if(!formik.isValid) {
            alert(formik.errors.email);
        }else if(!formik.dirty) {
            alert("Please filling the form to continue");
        }else {
            setLoading(true);
            const formData = new FormData();
            formData.append("email", formik.values.email);

            const request = await fetch(`${URL}/auth/request-reset-email`, {
                method: 'POST',
                body: formData,
            })

            const json = await request.json();
            console.log(request.status);
            console.log(json);

            switch(request.status) {
                case 200: {
                    alert(json['data'].success);
                    setsent(true);
                    setLoading(false);
                    break;
                }  

                default: {
                    alert("an error occured");
                    break;
                }
            }
        }
    }

    return (
        <View style={{ flex: 1}}>
            <CustomizableTabber name="Forgot Password" />
            <View style={style.box} >
                {
                    sent ? 
                    <View style={style.formHolder}>

                    <Text style={{ fontSize: Theme.header - 3, color: Theme.primaryColor, fontWeight: '700', textAlign: 'center'}}>Instruction sent!</Text>

                    <Text style={{ fontSize: Theme.normalText, marginTop: 10, textAlign: 'center', fontWeight: '300' }}>Instructions for resetting your password have been sent to {formik.values.email}</Text>

                    <Text style={{ fontSize: Theme.normalText, marginTop: 30, textAlign: 'center', fontWeight: '300' }}>You’ll receive this email within 5 minutes. Be sure to check your spam folder, too.</Text>


                    <View style={{ width: '100%', height: 50}}>
                        <GradientButton text="Check Email" onPress={() => null} />
                    </View>

                </View>
                :
                <View style={style.formHolder}>

                    <Text style={{ fontSize: Theme.header - 3, color: Theme.primaryColor, fontWeight: '700', textAlign: 'center'}}>Forgot Password</Text>

                    <Text style={{ fontSize: Theme.normalText, marginTop: 10, textAlign: 'center', fontWeight: '300' }}>Simply enter the email address you used when you joined and we’ll send you instructions to reset your password.</Text>

                    <Text style={{ textAlign: 'left', marginTop: 25, fontSize: Theme.normalText - 2}}>Email</Text>

                    <View style={{ width: '100%', height: 50, marginTop: 5}}>
                        <TextBox name="email" onBlur={formik.handleBlur} onChange={formik.handleChange('email')} value={formik.values.email}  />
                    </View>
                    {
                        formik.errors.email && <Text style={{ textAlign: 'left', marginTop: 5, fontSize: Theme.normalText - 5, color: 'red'}}>{formik.errors.email}</Text>
                    }

                    <View style={{ width: '100%', height: 50}}>
                        <GradientButton text="Send Me Instructions" loading={loading} onPress={submit} />
                    </View>

                </View>
                }
             
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    box: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 30,
    },
    formHolder: {
        width: '100%',
        height: Theme.height/100*40,
        paddingBottom: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        paddingVertical: 20,
        paddingHorizontal: 20,
    }
})