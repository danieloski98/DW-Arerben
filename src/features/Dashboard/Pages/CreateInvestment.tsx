import React from 'react'
import { View, Text, Image, Platform } from 'react-native'
import { ScrollView, TouchableOpacity,  } from 'react-native-gesture-handler'
import CustomizableTabber from '../../../Components/CustomizableTabbar'
import GradientButton from '../../../Components/GradientButton'
import { Theme } from '../../../theme'
import DropDown from '../Components/DropDown'
import TextBox from '../Components/TextBox'
import * as imagepicker from 'expo-image-picker'
import * as DocumentPicker from 'expo-document-picker'
import { Feather } from '@expo/vector-icons'
import * as yup from 'yup';
import { useFormik } from 'formik';
import { useNavigation } from '@react-navigation/core'
import DateTimePicker from '@react-native-community/datetimepicker';
import useUserDetails from '../../../Hooks/useUserDetails'
import { URL } from '../../../utils/Url'
import SuccessModal from '../Components/Investments/SuccessModal';
import FailedModal from '../Components/Investments/FailedModal'

// yup
const validationObject = yup.object({
  invest_pack: yup.number().required('This field is required'),
  invest_amount: yup.number().required('This field is required'),
  invest_date: yup.string().required("This field is required"),
})

export default function CreateInvestment(props: any) {
    const [proof, setProof] = React.useState("");
    const [show, setShow] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [date, setDate] = React.useState(new Date());
    const [uploadFile, setUploadFile] = React.useState({} as any);
    const [showSuccess, setShowSuccess] = React.useState(false);
    const [showFailure, setShowFailure] = React.useState(true);
    const navigation = useNavigation();
    const user = useUserDetails();

    // formik
    const formik = useFormik({
      initialValues: {
        invest_pack: props.route.params.package,
        invest_amount: 0,
        invest_date: '',
      },
      onSubmit: () => {},
      validationSchema: validationObject,
    })

    React.useEffect(() => {
      formik.setFieldValue('invest_pack', props.route.params.package);
    }, [formik.values.invest_pack])

    const pickProof = async() => {

        const {status} = await imagepicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            alert("You have to grant permission");
            // return;
        }

        const res = await DocumentPicker.getDocumentAsync({
          type: 'image/jpeg',
          copyToCacheDirectory: true,
        })

        if (res.type === 'success') {
          console.log(res);
          setUploadFile(res);
          setProof(res.uri);
        }

        // pick the image
        // const result = await imagepicker.launchImageLibraryAsync({
        //     mediaTypes: imagepicker.MediaTypeOptions.Images,
        //     quality: 1,
        //     allowsEditing: true,
        //     aspect: [4,4],
        //     base64: false,
        // })

        // console.log(result);

        // if(!result.cancelled) {
        //   // object
        //   const file = {
        //     uri: result.uri,
        //     name: '',
        //     type: '',
        //   }
        //   // create file
        //   const fet = await fetch(result.uri);
        //   const blob = await fet.blob();

        //   setUploadFile(blob);

        //   setProof(result.uri);
        // }

    }

  const toggle = () => {
      setShow((prev) => !prev)
  }

  const setDateISO = (data: Date) => {
    const nd = data.toISOString().split('T')[0];
    formik.setFieldValue('invest_date', nd);
    setDate(data);
  }

  const makeRequest = async() => {
    setLoading(true);
    if (!formik.dirty) {
      setLoading(false);
      alert('please filling the form to continue');
    }else if (!formik.isValid) {
      setLoading(false);
      alert('Please fill in the form correctly');
    }else {

          // arrange formData
    const formData = new FormData();
    for (const pro in formik.values) {
      formData.append(pro, formik.values[pro]);
    }

    if (proof !== undefined) {
      formData.append('proof_payment', {
        name: uploadFile['name'],
        uri: proof,
        type: 'image/jpg'
      });
      console.log(JSON.stringify(uploadFile));
    }

    try {

      const result = await fetch(`${URL}/investment/`, {
        method: 'POST',
        headers: {
          authorization: `Bearer ${user.user.access}`,
          'Content-Type': 'multipart/form-data; ',
        },
        body: formData,
      })
      // const result = await UpdateUserController.initialUpdate(formData, {authorization: `Bearer ${user.user.access}`})

      const json = await result.json();

      if (result.status === 201) {
        // navigation.navigate('dashboard');
        setShowSuccess(true);
      }else {
        console.log(json);
        console.log(result.status);
        setShowFailure(true);
      }

      setLoading(false);
    } catch (error) {
      alert('An error occured')
      console.log(error);
      setLoading(false);
    }

    }


  }

  const closeSuccess = () => {
    setShowSuccess(false);
    navigation.navigate('Investments');
  }

  const closeFailure = () => {
    setShowFailure(false);
  }

  return (
        <View style={{ flex: 1}}>

            <CustomizableTabber name="Create Investment" />

            <SuccessModal visible={showSuccess} close={closeSuccess} />
            <FailedModal visible={showFailure} close={closeFailure} />

            <ScrollView style={{ flex: 1, backgroundColor: 'transparent', paddingHorizontal: Theme.majorSpace, paddingTop: 20, paddingBottom: 20}}>
                <View style={{ flex: 1, backgroundColor: 'white', borderRadius: 10, paddingHorizontal: Theme.majorSpace, paddingTop: 50, paddingBottom: 30 }}>

                   <Text style={{ fontSize: Theme.normalText, marginBottom: 10, fontWeight: '500' }}>Investment Pack</Text>
                   <View style={{ width: '100%', height: 50, zIndex: 4, borderWidth: 2, borderColor: 'lightgrey', borderRadius: 10, justifyContent: 'center', paddingLeft: 10, backgroundColor: 'whitesmoke' }}>
                       <Text style={{ fontSize: Theme.normalText + 2}}>{formik.values.invest_pack}</Text>
                   </View>
                   {
                     formik.errors.invest_pack && <Text style={{ color: 'red', fontSize: Theme.normalText - 2 }}>{formik.errors.invest_pack}</Text>
                   }

                   <Text style={{ marginTop: 20, fontSize: Theme.normalText, marginBottom: 10, fontWeight: '500' }}>Investment Amount</Text>
                   <View style={{ width: '100%', height: 50, zIndex: 3 }}>
                       <TextBox name="invest_amount" value={formik.values.invest_amount.toString()} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                   </View>
                   {
                     formik.errors.invest_amount && <Text style={{ color: 'red', fontSize: Theme.normalText - 2 }}>{formik.errors.invest_amount}</Text>
                   }

                   <Text style={{ marginTop: 20, fontSize: Theme.normalText, marginBottom: 10, fontWeight: '500' }}>Investment Date</Text>
                   <View style={{ width: '100%', height: 50, zIndex: 2}}>
                  <TouchableOpacity style={{ width: '100%', height:Theme.height/100*6, borderColor: 'lightgrey', borderWidth: 2, borderRadius: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: Theme.majorSpace, marginBottom: 20 }} onPress={toggle}>
                      <Text>{date.toLocaleDateString()}</Text>
                      <Feather name="calendar" size={25} color={Theme.primaryColor} />
                  </TouchableOpacity>
                  </View>

                  {
                      show && <DateTimePicker mode="date" date={new Date("yyyy-mm-dd")} value={date} display={Platform.OS === 'ios' ? "inline":"default"} onChange={(e, date) => {setDateISO(date as Date); setShow(false)}} style={{ zIndex: 4, backgroundColor: 'white'}} />
                  }
                   {
                     formik.errors.invest_date && <Text style={{ color: 'red', fontSize: Theme.normalText - 2 }}>{formik.errors.invest_date}</Text>
                   }

                   <Text style={{ marginTop: 20, fontSize: Theme.normalText, marginBottom: 10, fontWeight: '500' }}>Proof of Payment</Text>

                   <View style={{ width: '100%', borderRadius: 10, borderStyle: 'dashed', borderColor: 'lightgrey', borderWidth: 2, paddingVertical: 20, paddingHorizontal: 20, alignItems: 'center', justifyContent: 'center' }}>

                       {/* <Text style={{ fontSize: Theme.normalText, marginBottom: 10, fontWeight: '500' }}>Choose file</Text> */}

                       {
                        proof !== "" ?
                        <View style={{ width: 100, height: 100, marginVertical: 20 }}>
                            <Feather name="x" style={{ position: 'absolute', zIndex: 1, backgroundColor: 'black', borderRadius: 20, padding: 5, left: 80, elevation: 4, shadowColor: Theme.shadowColor, shadowOffset: {width: 2, height:4}, shadowOpacity: 0.7, shadowRadius: 5 }} size={20} color="white" onPress={() => setProof("")}  />
                            <Image source={{ uri: proof }} style={{ width: '100%', height: '100%', borderRadius: 10, marginTop: 5 }} resizeMode="cover" />
                        </View>: null
                    }

                       <TouchableOpacity onPress={pickProof} style={{ width: 200, height: 50, borderRadius: 10, backgroundColor: 'lightgrey', alignItems: 'center', justifyContent: 'center'}}>
                           <Text>Choose file</Text>
                       </TouchableOpacity>

                   </View>


                </View>
            </ScrollView>

            <View style={{ flex: 0.12, backgroundColor:'white', paddingBottom: 20}}>
                <View style={{ width: '100%', height: 50, paddingHorizontal: Theme.majorSpace}}>
                    <GradientButton text="Submit" onPress={makeRequest} loading={loading} />
                </View>
            </View>

        </View>
    )
}
