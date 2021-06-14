import React from 'react'
import { View, Text, StyleSheet, TextInput, Alert, TouchableHighlight } from 'react-native'
import CustomizableTabber from '../../../Components/CustomizableTabbar'
import GradientButton from '../../../Components/GradientButton'
import Tabbar from '../../../Components/Tabbar'
import { Theme } from '../../../theme'
import { URL } from '../../../utils/Url'
import * as yup from 'yup';
import { useFormik } from 'formik';
import useUserDetails from '../../../Hooks/useUserDetails'
import TerminationSuccessModal from '../Components/Investments/TerminationSuccessModal'
import TerminationFailedModal from '../Components/Investments/TerminationFailedModal'
import * as DocumentPicker from 'expo-document-picker'

const validationSchema = yup.object({
  reason_for_termination: yup.string().required('This field is required'),
});

export default function Cancel({ route }: {route:any}) {
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [failed, setFailed] = React.useState(false);
  const [file, setFile] = React.useState(undefined as any);
  const [docname, setDocName] = React.useState("");

  const {user} = useUserDetails();

  const formik = useFormik({
    initialValues: {reason_for_termination: ''},
    onSubmit: () => {},
    validationSchema,
  })

  const pickDoc = async() => {
    const status = await DocumentPicker.getDocumentAsync({
      type: '*/*',
      copyToCacheDirectory: true,
    });

    if (status.type === 'cancel') {
      return;
    }else {
      console.log(status);
      const fet = await fetch(status.uri);
      const data = await fet.blob();
      setFile({name: status.name, type: data._data.type, uri: status.uri});
      setDocName(status.name);
    }
  }

  const submit = async () => {
    if (!formik.dirty || !formik.isValid) {
      Alert.alert('You have to fill in the form to be able to terminate your investment');
      return;
    }
    if (file === undefined) {
      Alert.alert('You have to select the required document');
      return;
    }

    setLoading(true);

    const formdata = new FormData();
    formdata.append('required_doc', file);
    formdata.append('invest', route.params.id);
    formdata.append('reason_for_termination', formik.values.reason_for_termination);

    const request = await fetch(`${URL}/investment/termination/`, {
      method: 'post',
      headers: {
        authorization: `Bearer ${user.access}`,
        'Content-Type': 'multipart/form-data; ',
      },
      body: formdata,
    });

    const json = await request.json();
    setLoading(false);

    if(request.status === 201) {
      setSuccess(true);
      console.log(json);
    }

    if(request.status !== 201) {
      setFailed(true);
      console.log(json);
    }
  }
  return (
    <View style={{ flex: 1 }}>
      <TerminationSuccessModal visible={success} close={() => setSuccess(false)} />
      <TerminationFailedModal visible={failed} close={() => setFailed(false)} />
       <CustomizableTabber name="Terminate Investment" />
       <View style={style.container}>

          <Text>Reason for Termination</Text>
          <TextInput value={formik.values.reason_for_termination} onChangeText={formik.handleChange('reason_for_termination')} onBlur={formik.handleBlur('reason_for_termination')} onFocus={() => formik.setFieldTouched('reason_for_termination', true, true)} style={style.textInput} multiline textAlignVertical="top" />

          <View style={style.filePickerContainer}>
          {docname !== "" && <Text style={style.name}>{docname}</Text>}
            <TouchableHighlight underlayColor='lightgrey' style={style.btn} onPress={pickDoc}>
                <Text>Pick Doc</Text>
            </TouchableHighlight>
          </View>

          <View style={style.button}>
            <GradientButton text="Submit" loading={loading} onPress={submit} />
          </View>

       </View>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: Theme.majorSpace * 2,
  },
  textInput: {
    width: '100%',
    height: Theme.height / 100 * 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'grey',
    marginTop: Theme.majorSpace,
    padding: Theme.majorSpace
  },
  button: {
    width: '100%',
    height: 50,
    marginTop: Theme.majorSpace
  },
  filePickerContainer: {
    width: '100%',
    marginVertical: Theme.majorSpace,
    borderWidth: 2,
    borderColor: 'grey',
    borderStyle: 'dotted',
    height: Theme.height/100*10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btn: {
    width: '50%',
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  name:{
    textAlign: 'center',
    fontSize: Theme.header,
    fontWeight: '600',
  }
});
