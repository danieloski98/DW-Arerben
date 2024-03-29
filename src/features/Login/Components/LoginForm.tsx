import React from 'react'
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator, Alert } from 'react-native'
import { Theme } from '../../../theme'
import { Feather } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native'
import { useFormik } from 'formik'
import * as yup from 'yup';
import { URL } from '../../../utils/Url';
import useUserDetails from '../../../Hooks/useUserDetails'

// login schema

const LoginSchema = yup.object({
    email: yup.string().email("Invalid Email").required("Your email is required"),
    password: yup.string().min(8, "Minimium of 8 characters").required("Your password is required"),
})

export default function LoginForm(props: any) {

    const userDetails = useUserDetails();

    const navigation = useNavigation();
    const [showPassword, setShowPassword] = React.useState(true);
    const [loading, setLoading] = React.useState(false);

    // formik
    const formik = useFormik({
        initialValues: {email: '', password: ''},
        validationSchema: LoginSchema,
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
        // navigation.navigate("dashboard");
        try {
            // make the request

        const formData = new FormData();

        formData.append("email", formik.values.email);
        formData.append("password", formik.values.password);

        setLoading(true);
        const request = await fetch(`https://mydwa.herokuapp.com/auth/login/`, {
          method: "POST",
         body: formData
        })

        const json: any = await request.json();
        switch(request.status) {
            case 200: {
                setLoading(false);
                const data = json.data;
                const token = json.data.tokens.access;
                const refresh = json.data.tokens.refresh;
                userDetails.setUserAtom({ first_name: data['first_name'], email: data['email'], last_name: '', id: data['id'], access: token, refresh: refresh });
                navigation.navigate("dashboard");
                break;
            }
            case 401: {
                Alert.alert(json['detail'])
                setLoading(false);
                break;
            }
            case 400: {
              setLoading(false);
              Alert.alert(json.errors[0]);
              break;
            }
            case 415: {
                setLoading(false);
                Alert.alert(json['detail'])
                setLoading(false);
                break;
            }
            default: {
                Alert.alert(json['detail']);
                setLoading(false);
            }
        }
        } catch (error) {
            setLoading(false);
            Alert.alert("Internal Server error");
        }
    }

    return (
        <View style={style.parent}>

            <View style={style.logoBox}>
                <Image source={require('../../../../assets/images/logo.png')} resizeMode="contain" style={{ width: '30%', height: '60%'}} />
                <Text style={style.writeup}>Welcome back to DW-Investment</Text>
            </View>

            <View style={{ flex: 0.8, justifyContent: 'flex-start', marginTop: 50}}>

                <View style={{ width: '100%', height: 50, marginBottom: 5 }}>
                    <Text>Email</Text>
                    <View style={{ flexDirection: 'row', width: '100%', height: '100%', backgroundColor: 'white', borderRadius: 10, borderWidth: 2, borderColor: '#BCBCBC', alignItems: 'center', paddingHorizontal: 5, marginTop: 10}}>
                        <Feather name="user" size={20} color="#BCBCBC" />
                        <TextInput style={{ flex: 1, marginHorizontal: 10 }} value={formik.values.email} onChangeText={formik.handleChange('email')} onBlur={() => formik.handleBlur('email')} />
                        {formik.touched.email && !formik.errors.email && <Feather name="check" size={20} color={Theme.primaryColor} />}
                    </View>
                    {
                        formik.errors.email && <Text style={{ color: 'red'}}>{formik.errors.email}</Text>
                    }
                </View>

                <View style={{ width: '100%', height: 50, marginTop: 50,}}>
                    <Text>Password</Text>
                    <View style={{ flexDirection: 'row', width: '100%', height: '100%', backgroundColor: 'white', borderRadius: 10, borderWidth: 2, borderColor: '#BCBCBC', alignItems: 'center', paddingHorizontal: 5, marginTop: 10}}>
                        <Feather name="lock" size={20} color="#BCBCBC" />
                        <TextInput style={{ flex: 1, marginHorizontal: 10 }} secureTextEntry={showPassword} value={formik.values.password} onChangeText={formik.handleChange('password')} onBlur={() => formik.handleBlur('password')} />
                        <Feather name={showPassword ? 'eye':"eye-off"} size={20} color={Theme.primaryColor} onPress={() => setShowPassword(prev => !prev)} />
                    </View>
                    {
                        formik.errors.password && <Text style={{ color: 'red'}}>{formik.errors.password}</Text>
                    }
                </View>

                <Text  onPress={() => navigation.navigate('forgotpassword')} style={{ marginTop: 50, fontSize: Theme.normalText, fontWeight: '500'}}>Having trouble signing in?</Text>

                <LinearGradient
                    start={{x: 0.0, y: 0.4}}
                    end={{x: 1, y: 0.0}}
                    colors={['#F46929', '#FFE5D9']}
                    style={{ width: '100%', height: 50, borderRadius: 10, marginTop: 20}}
                >
                    <TouchableOpacity disabled={loading} style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}
                    onPress={submit}
                    >
                        {loading ? <ActivityIndicator size="large" color="white" />:
                        <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                            <Feather name="unlock" color="white" size={30} />
                            <Text style={{ color: 'white', fontSize: Theme.normalText, marginLeft: 10}}>Login</Text>
                        </View>}
                    </TouchableOpacity>
                </LinearGradient>


                <Text style={{ marginTop: 40, fontSize: Theme.normalText, fontWeight: '500', textAlign: 'center'}}>Don’t have an account? <Text style={{ textDecorationLine: 'underline', fontWeight: '700'}} onPress={() => navigation.navigate('signup')}>Create</Text></Text>

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
        height: '15%',
        alignItems: 'center',
    },
    writeup: {
        marginTop: 10,
        fontSize: Theme.normalText,
        fontWeight: '400'
    }
})
