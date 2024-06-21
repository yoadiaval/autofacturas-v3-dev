import {
  //PDFViewer,
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  //PDFDownloadLink,
} from "@react-pdf/renderer";
import { format } from "date-fns";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#ffffff",
    padding: 50,
    gap: 20,
    fontSize: 10,
    color: "#000000",
  },

  section: {
    marginBottom: 10,
    lineHeight: 1.5,
  },
  sectionFixedWidth: {
    marginBottom: 10,
    width: "85px",
    lineHeight: 1.5,
  },
  table: {
    width: "100%",
    marginBottom: 10,
    borderCollapse: "collapse",
    borderTop: "1px solid #696969",
  },
  tableRow: {
    display: "flex",
    flexDirection: "row",
  },
  tableCell: {
    flex: 1,
    padding: 5,
    borderLeft: "1px solid #696969",
    borderBottom: "1px solid #696969",
  },
  centeredCell: {
    fontWeight: "bold",
    textAlign: "center",
  },
  TextToEnd: {
    textAlign: "right",
  },
  widthCol2: {
    width: "30%",
    padding: 5,
    borderRight: "1px solid #696969",
  },

  sectionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  hr: {
    height: 2,
    width: "100%",
    backgroundColor: "gray",
    marginBottom: 8,
    marginTop: 1,
  },
});

const company = {
  name: "CERYACAST SL",
  address: "Cirilo Amoros Street 44, 46004, Valencia, Spain",
  cif: "B10712222",
  bank: "BANKINTER",
  bankAddress: "CL Pintor Sorolla, 24, 46002, Valencia, SPAIN",
  swift: "BKBKESMMXXX",
  iban: import.meta.env.VITE_APP_IBAN,
};

function PDFDoc({ data }) {
  //data{registro,factura,selectedClient{id,detailsClients{name,lastName,cif,street,number,cp,city}}}
  const rows = data.factura.map((item, index) => {
    return (
      <View key={index} style={styles.tableRow}>
        <Text style={[styles.tableCell, { backgroundColor: "#EBF1DE" }]}>
          {item.description}
        </Text>
        <Text
          style={[
            styles.TextToEnd,
            styles.widthCol2,
            {
              backgroundColor: "#EBF1DE",
              borderLeft: "1px solid #696969",
              borderBottom: "1px solid #696969",
            },
          ]}
        >
          {"\u20AC "}
          {parseFloat(item.amount).toFixed(2)}
        </Text>
      </View>
    );
  });

  const date = format(new Date(data.registro.date), "MMMM dd, yyyy");

  const totalFactura = () => {
    let total = 0;
    data.factura.map((item) => {
      total = total + parseFloat(item.amount);
    });
    return total;
  };

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.sectionContainer}>
          {/* Columna 1 */}
          <View
            style={[
              styles.section,
              { backgroundColor: "#DDD9C4", padding: "10px" },
            ]}
          >
            <Text style={{ fontSize: 14, color: "#282828" }}>
              {company.name}
            </Text>
            <Text style={{ color: "#595959" }}>CIF: {company.cif}</Text>
            <Text style={{ color: "#000000" }}>{company.address}</Text>
            <Text style={{ color: "#000000" }}>CLÍNICA DENTAL</Text>
          </View>

          {/* Columna 2 */}
          <View style={styles.section}>
            <Text
              style={[
                styles.TextToEnd,
                {
                  marginBottom: 25,
                  fontSize: 20,
                  width: "110px",
                  display: "flex",
                  textAlign: "center",
                  color: "#808080",
                },
              ]}
            >
              INVOICE
            </Text>
            <View style={styles.sectionContainer}>
              <View style={styles.section}>
                <Text
                  style={{
                    textAlign: "right",
                    paddingLeft: "20px",
                    color: "#000000",
                  }}
                >
                  DATE:
                </Text>
                <Text style={{ color: "#000000" }}>INVOICE #</Text>
                <Text
                  style={{
                    textAlign: "right",
                    paddingLeft: "9px",
                    color: "000000",
                  }}
                >
                  Currency
                </Text>
              </View>
              <View
                style={[
                  styles.sectionFixedWidth,
                  { backgroundColor: "#EBF1DE" },
                ]}
              >
                <Text style={styles.TextToEnd}>{date}</Text>
                <Text style={styles.TextToEnd}>
                  {data.registro.serie + "-" + data.numReg}
                </Text>
                <Text style={styles.TextToEnd}>Euro</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Texto fuera de las columnas */}
        <View style={styles.section}>
          <Text style={{ color: "#000000" }}>Bill To:</Text>
          <Text>
            {data.selectedClient.name + " " + data.selectedClient.lastName}
          </Text>
          <Text>
            {data.selectedClient.street + ", " + data.selectedClient.number}
          </Text>
          <Text>{data.selectedClient.cp + "-" + data.selectedClient.city}</Text>
          <Text>NIF:{data.selectedClient.cif}</Text>
        </View>

        {/* Tabla */}
        <Text style={{ color: "#000000" }}>
          Terms of the payment according to the corresponding agreement:
        </Text>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <Text
              style={[
                styles.centeredCell,
                styles.tableCell,
                { backgroundColor: "#f2f2f2", color: "#000000" },
              ]}
            >
              DESCRIPTION
            </Text>
            <Text
              style={[
                styles.centeredCell,
                styles.widthCol2,
                {
                  backgroundColor: "#f2f2f2",
                  borderLeft: "1px solid #696969",
                  borderBottom: "1px solid #696969",
                  color: "#000000",
                },
              ]}
            >
              AMOUNT
            </Text>
          </View>
          {rows}
          <View style={styles.tableRow}>
            <Text
              style={[
                styles.TextToEnd,
                { flex: 1, padding: 5, color: "#000000" },
              ]}
            >
              TOTAL
            </Text>
            <Text
              style={[
                styles.TextToEnd,
                styles.widthCol2,
                {
                  backgroundColor: "#f2dcdb",
                  borderLeft: "1px solid #696969",
                  borderBottom: "1px solid #696969",
                  color: "#000000",
                },
              ]}
            >
              {"\u20AC "} {parseFloat(totalFactura()).toFixed(2)}
            </Text>
          </View>
        </View>

        {/* Columna 3 */}
        <View style={styles.sectionContainer}>
          <View style={[styles.section, { width: "200px", color: "#000000" }]}>
            <Text>Bank Name: </Text>
            <Text>Bank Address: </Text>
            <Text>Account holder name: </Text>
            <Text>BIC/SWIFT code: </Text>
            <Text>IBAN number (Europe): </Text>
          </View>
          <View style={[styles.section, { width: "350px" }]}>
            <Text>{company.bank}</Text>
            <Text>{company.address}</Text>
            <Text>{company.name}</Text>
            <Text>{company.swift}</Text>
            <Text>{company.iban}</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ color: "#000000" }}>Forma de pago: </Text>
          <Text>{data.registro.typePayment}</Text>
        </View>
      </Page>
    </Document>
  );
}

export default PDFDoc;
