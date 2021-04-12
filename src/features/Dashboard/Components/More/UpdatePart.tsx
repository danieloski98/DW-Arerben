import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Theme } from '../../../../theme'

// icons
import ProfileUpdate from "../../../../../assets/svgs/Edit_profile";
import UpdateDocuments from "../../../../../assets/svgs/Document_icon";
import Password from "../../../../../assets/svgs/Password";
import GradientButton from "../../../../Components/GradientButton";
// import UpdateCard from '../Components/UpdateCard'
import {useNavigation} from '@react-navigation/native'

export default function UpdatePart() {

  const navigation = useNavigation();

  return (
    <View style={style.container}>

      <View style={style.flexbox}>

        <View style={style.box}>
          <View style={style.borderBox}>
            <ProfileUpdate />
          </View>
          <Text style={{ fontSize: Theme.header - 4, fontWeight: '700', marginTop: 10 }}>Fill the registration form</Text>
          <Text style={{ marginTop: 3 }}>You need sign up as an DW agent.</Text>
        </View>

        <View style={style.box}>
          <View style={style.borderBox}>
            <UpdateDocuments />
          </View>
          <Text style={{ fontSize: Theme.header - 4, fontWeight: '700', marginTop: 10 }}>Wait for confirmation</Text>
          <Text style={{ marginTop: 3 }}>We’ll notify you once it has been approved.</Text>
        </View>

        <View style={style.box}>
          <View style={style.borderBox}>
            <Password />
          </View>
          <Text style={{ fontSize: Theme.header - 4, fontWeight: '700', marginTop: 10 }}>Claim your rewards</Text>
          <Text style={{ marginTop: 3 }}>After the approval you will get your referral link.</Text>
        </View>
        
        <View style={{ width: '100%', height: 50,}}>
            <GradientButton text="Register as An Agent" onPress={() => navigation.navigate("registeragent")} />
        </View>

      </View>

    </View>
  );
}

const style = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,

  },
  writeup: {
    fontSize: Theme.normalText,
    fontWeight: "500",
  },
  flexbox: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    paddingBottom: 30,
    
  },
  box: {
    marginVertical: 20,
    width: '100%',
    height: Theme.height / 100 * 20,
    justifyContent: "center",
    backgroundColor: 'transparent',
    alignItems: 'center'
  },
  borderBox: {
    width: 100,
    height: 100,
    borderRadius: 300,
    // borderStyle: "dashed",
    // borderWidth: 2,
    backgroundColor: '#FFEBE2',
    // borderColor: Theme.primaryColor,
    justifyContent: "center",
    alignItems: "center",
  },
});
