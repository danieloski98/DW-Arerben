import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Theme } from '../../../theme'

// icons
import ProfileUpdate from "../../../../assets/svgs/Edit_profile";
import UpdateDocuments from "../../../../assets/svgs/Document_icon";
import Password from "../../../../assets/svgs/Password";
import GradientButton from "../../../Components/GradientButton";

export default function UpdateCard() {
  return (
    <View style={style.container}>

      <Text style={style.writeup}>
        You need to upgrade your account to gain full access
      </Text>

      <View style={style.flexbox}>

        <View style={style.box}>
          <View style={style.borderBox}>
            <ProfileUpdate />
          </View>
          <Text style={{ marginTop: 10,  fontSize: Theme.normalText }}>Update Profile</Text>
        </View>

        <View style={style.box}>
          <View style={style.borderBox}>
            <UpdateDocuments />
          </View>
          <Text style={{ marginTop: 10,  fontSize: Theme.normalText }}>Update Documents</Text>
        </View>

        <View style={style.box}>
          <View style={style.borderBox}>
            <Password />
          </View>
          <Text style={{ marginTop: 10, fontSize: Theme.normalText }}>Change DWA Password</Text>
        </View>
        
        <View style={{ width: '100%', height: 50,}}>
            <GradientButton text="Update Documents" onPress={() => alert("Press")} />
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
    flexWrap: "wrap",
    justifyContent: "flex-start",
    paddingBottom: 30,
    alignItems: 'center'
  },
  box: {
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
    backgroundColor: '#FFEBE2',
    // borderStyle: "dashed",
    // borderWidth: 2,
    // borderColor: Theme.primaryColor,
    justifyContent: "center",
    alignItems: "center",
  },
});
