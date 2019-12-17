import React from "react";
import { StyleSheet } from "react-native";
import { Table, Row, Rows } from "react-native-table-component";

export default class GlossaryTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ["Termo", "Significado"],
      tableData: ["",""]
    };
  }

  render() {
    const state = this.state;
    return (
      <Table borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }}>
        <Row
          data={state.tableHead}
          style={styles.head}
          textStyle={styles.text}
        />
        <Rows data={state.tableData} textStyle={styles.text} />
      </Table>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 12, paddingTop: 2, width: 120 },
  head: { height: 40, backgroundColor: "#7852ff" },
  text: {
    textAlign: "justify",
    margin: 6,
    color: "#fff",
    fontSize: 14,
    alignSelf: "center"
  },
  scrollView: { marginHorizontal: 20 }
});
