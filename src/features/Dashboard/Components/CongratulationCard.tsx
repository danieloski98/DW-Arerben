import React from "react";
import { View, Text } from "react-native";
import GradientButton from "../../../Components/GradientButton";
import { Theme } from "../../../theme";

export default function CongratulationCard() {
  return (
    <View
      style={{
        borderWidth: 2,
        borderColor: Theme.primaryColor,
        borderRadius: 20,
        backgroundColor: "white",
        width: "100%",
        height: "auto",
        padding: 20,
        marginBottom: 20
      }}
    >
      <Text style={{ fontSize: Theme.header, fontWeight: "700" }}>
        Congrats! Your account has been completely updated.
      </Text>
      <Text
        style={{ fontSize: Theme.normalText, fontWeight: "400", marginTop: 20 }}
      >
        You have successfully updated your DW- Arerben account.
      </Text>

      <View style={{ width: "45%", height: 50, marginBottom: 20 }}>
        <GradientButton text="Dismiss" onPress={() => alert("Dimissing...")} />
      </View>
    </View>
  );
}
