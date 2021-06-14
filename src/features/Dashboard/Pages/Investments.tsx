import { useNavigation } from "@react-navigation/core";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";

// components
import Tabbar from "../../../Components/Tabbar";
import { Theme } from "../../../theme";
import { INvestmentPackage } from "../../../Types/Investmentpackage.type";
import InvestmentsLists from "../Components/Investments/InvestmentsLists";
import InvestmentpackList from "../Components/Investments/InvestmentpackList";

// interface
export interface INvestment extends INvestmentPackage {
  status: string;
  is_reviewed: string;
}

export default function Investments() {
  const [page, setPage] = React.useState(1);

  const togglePage =(p: number) => {
    setPage(p);
  }

  return (
    <View style={style.parent}>
      <Tabbar />

      <View style={style.scrollContainer}>
        {page === 1 ? <InvestmentsLists /> : <InvestmentpackList />}
      </View>

      <View style={{ width: '100%', flex: 0.1, backgroundColor: 'white', paddingHorizontal: 30, justifyContent: 'space-between', borderBottomWidth: 2, borderBottomColor: 'lightgrey', flexDirection: 'row', alignItems: 'center' }}>
        <Text onPress={() => togglePage(1)} style={{ fontSize: Theme.header, color: page === 1 ? Theme.primaryColor:'grey' }}>My Investments</Text>
        <Text onPress={() => togglePage(2)} style={{ fontSize: Theme.header, color: page === 2 ? Theme.primaryColor:'grey' }}>Create Investment</Text>
      </View>

    </View>
  );
}

const style = StyleSheet.create({
  parent: {
    flex: 1,
    paddingBottom: 30
  },
  scrollContainer: {
    flex: 0.9,
    paddingBottom: 0,
  },
});
