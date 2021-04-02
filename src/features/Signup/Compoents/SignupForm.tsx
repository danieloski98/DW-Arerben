import React from 'react'
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator, Alert } from 'react-native'
import { Theme } from '../../../theme'
import { Feather } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native'
import { useFormik } from 'formik'
import * as yup from 'yup';
import { URL } from '../../../utils/Url'
import * as axios from 'axios';

const signupSchema = yup.object({
    email: yup.string().email("Invalid Email").required("Your email is required"),
    password: yup.string().min(8, "Minimium of 8 characters").required("Your password is required"),
    first_name: yup.string().required("Your firstname is required"),
    last_name: yup.string().required("Your lastname is required"),
    phone: yup.string().required("Your phone number is required"),
})

export default function LoginForm(props: any) {

    const navigation = useNavigation();
    const [showPassword, setShowPassword] = React.useState(true);
    const [loading, setLoading] = React.useState(false);

    // formik
    const formik = useFormik({
        initialValues: {email: '', password: '', first_name: '', last_name: '', phone: ''},
        validationSchema: signupSchema,
        onSubmit: () => {},
    })

      // submit Function
      const  submit = async() => {
        if(!formik.dirty) {
            Alert.alert("Please you have to fill the form");
            return;
        }
        if (!formik.isValid) {
            Alert.alert("Please fill in the form correctly!")
            return;
        }
        
        try {
            // make the request
        setLoading(true);
        const request = await fetch(`${URL}/auth/register/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify( formik.values,)
        })

        const json = await request.json();
        console.log(json);

        switch(request.status) {
            case 201: {
                Alert.alert("Login Successful");
                setLoading(false);
                navigation.navigate("login");
                break;
            }
            case 401: {
                setLoading(false);
                Alert.alert(`${json['detail']}`);
                break;
            }
            default: {
                Alert.alert("An error occured.");
                setLoading(false);
            }
        }
        } catch (error) {
            console.log(error)
            setLoading(false);
            Alert.alert("Internal Server error")
        }
    }

    return (
        <View style={style.parent}>
            
            <View style={style.logoBox}>
                <Text style={style.writeup}>Great! Let’s get you set up.</Text>
            </View>

            <View style={{ width: '100%', height: Theme.height, justifyContent: 'flex-start', marginTop: 20,}}>

                <View style={{ width: '100%', height: '12%' }}>
                    <Text>Firstname</Text>
                    <View style={{ flexDirection: 'row', width: '100%', height: '55%', backgroundColor: 'white', borderRadius: 10, borderWidth: 2, borderColor: '#BCBCBC', alignItems: 'center', paddingHorizontal: 5, marginTop: 10}}>
                        <Feather name="user" size={20} color="#BCBCBC" />
                        <TextInput style={{ flex: 1, marginHorizontal: 10 }} value={formik.values.first_name} onChangeText={formik.handleChange('first_name')} onBlur={() => formik.handleBlur('first_name')} />
                        {formik.touched.first_name && !formik.errors.first_name && <Feather name="check" size={20} color={Theme.primaryColor} />}
                    </View>
                    {
                        formik.errors.first_name && <Text style={{ color: 'red'}}>{formik.errors.first_name}</Text>
                    }
                </View>

                <View style={{ width: '100%', height: '12%' }}>
                    <Text>Lastname</Text>
                    <View style={{ flexDirection: 'row', width: '100%', height: '55%', backgroundColor: 'white', borderRadius: 10, borderWidth: 2, borderColor: '#BCBCBC', alignItems: 'center', paddingHorizontal: 5, marginTop: 10}}>
                        <Feather name="user" size={20} color="#BCBCBC" />
                        <TextInput style={{ flex: 1, marginHorizontal: 10 }} value={formik.values.last_name} onChangeText={formik.handleChange('last_name')} onBlur={() => formik.handleBlur('last_name')} />
                        {formik.touched.last_name && !formik.errors.last_name && <Feather name="check" size={20} color={Theme.primaryColor} />}
                    </View>
                    {
                        formik.errors.last_name && <Text style={{ color: 'red'}}>{formik.errors.last_name}</Text>
                    }
                </View>

                <View style={{ width: '100%', height: '12%' }}>
                    <Text>Email</Text>
                    <View style={{ flexDirection: 'row', width: '100%', height: '55%', backgroundColor: 'white', borderRadius: 10, borderWidth: 2, borderColor: '#BCBCBC', alignItems: 'center', paddingHorizontal: 5, marginTop: 10}}>
                        <Feather name="mail" size={20} color="#BCBCBC" />
                        <TextInput style={{ flex: 1, marginHorizontal: 10 }} value={formik.values.email} onChangeText={formik.handleChange('email')} onBlur={() => formik.handleBlur('email')} />
                        {formik.touched.email && !formik.errors.email && <Feather name="check" size={20} color={Theme.primaryColor} />}
                    </View>
                    {
                        formik.errors.email && <Text style={{ color: 'red'}}>{formik.errors.email}</Text>
                    }
                </View>

                <View style={{ width: '100%', height: '12%' }}>
                    <Text>Phone number</Text>
                    <View style={{ flexDirection: 'row', width: '100%', height: '55%', backgroundColor: 'white', borderRadius: 10, borderWidth: 2, borderColor: '#BCBCBC', alignItems: 'center', paddingHorizontal: 5, marginTop: 10}}>
                        <Text style={{ paddingRight: 10, borderRightWidth: 2, borderRightColor: 'grey'}}>+234</Text>
                        <TextInput style={{ flex: 1, marginHorizontal: 10 }} value={formik.values.phone} onChangeText={formik.handleChange('phone')} onBlur={() => formik.handleBlur('phone')} />
                        {formik.touched.phone && !formik.errors.phone && <Feather name="check" size={20} color={Theme.primaryColor} />}
                    </View>
                    {
                        formik.errors.phone && <Text style={{ color: 'red'}}>{formik.errors.phone}</Text>
                    }
                </View>

                <View style={{ width: '100%', height: '12%', marginTop: 10}}>
                    <Text>Password</Text>
                    <View style={{ flexDirection: 'row', width: '100%', height: '55%', backgroundColor: 'white', borderRadius: 10, borderWidth: 2, borderColor: '#BCBCBC', alignItems: 'center', paddingHorizontal: 5, marginTop: 10}}>
                        <Feather name="lock" size={20} color="#BCBCBC" />
                        <TextInput style={{ flex: 1, marginHorizontal: 10 }} value={formik.values.password} onChangeText={formik.handleChange('password')} onBlur={() => formik.handleBlur('password')}/>
                        <Feather name={showPassword ? 'eye':"eye-off"} size={20} color={Theme.primaryColor} onPress={() => setShowPassword(prev => !prev)} />
                    </View>
                    {
                        formik.errors.password && <Text style={{ color: 'red'}}>{formik.errors.password}</Text>
                    }
                </View>


                <LinearGradient
                    start={{x: 0.0, y: 0.4}}
                    end={{x: 1, y: 0.0}}
                    colors={['#F46929', '#FFE5D9']}
                    style={{ width: '100%', height: '7%', borderRadius: 10, marginTop: 20}}
                >
                    <TouchableOpacity disabled={loading} style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}
                    onPress={submit}
                    >
                        {loading ? <ActivityIndicator size="large" color="white" />: <Text style={{ color: 'white', fontSize: Theme.normalText }}>Create Account</Text>}
                    </TouchableOpacity>
                </LinearGradient>

                <Text style={{ marginTop: 20, fontSize: Theme.normalText, fontWeight: '300'}}>By creating an account, you agree to the <Text style={{ textDecorationLine: 'underline'}}>terms & conditions, and our privacy policy</Text></Text>


                <Text style={{ marginTop: 40, fontSize: Theme.normalText, fontWeight: '300', textAlign: 'center'}}>Already have an account? <Text style={{ textDecorationLine: 'underline', fontWeight: '500'}} onPress={() => navigation.navigate('login')}>Login</Text></Text>

            </View>

        </View>
    )
}

const style = StyleSheet.create({
    parent: {
        flex: 1,
        paddingVertical: 20,
        paddingHorizontal: 20,
    },
    logoBox: {
        width: '100%',
        height: '10%',
        alignItems: 'center',
    },
    writeup: {
        marginTop: 10,
        fontSize: Theme.header,
        fontWeight: '400',
        color: Theme.primaryColor
    }
})