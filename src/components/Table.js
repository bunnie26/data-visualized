import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import data from "./data";


const columns = [
  {
    field: "Project",
    headerName: "Project",
    width: 180,
    description: "Name of the project.",
    headerClassName: "header-bold",
  },
  {
    field: "Price latest ($)",
    headerName: "Price ($)",
    width: 130,
    description: "Price of the Token.",
    headerClassName: "header-bold",
  },
  {
    field: "24h change (%)",
    headerName: "24h change (%)",
    width: 140,
    description: "Price change in last 24h.",
    headerClassName: "header-bold",
  },
  {
    field: "7d change (%)",
    headerName: "7d change (%)",
    width: 140,
    description: "Price change in last 7d",
    headerClassName: "header-bold",
  },

  {
    field: "30d change (%)",
    headerName: "30d change (%)",
    description: "Price change in last 30d.",
    width: 140,
    headerClassName: "header-bold",
  },
  {
    field: "Circulating market cap latest ($)",
    headerName: "Circulating mc. ($)",
    description:
      "Market cap / Valuation based on circulating supply of tokens..",
    width: 180,
    headerClassName: "header-bold",
  },
  {
    field: "Fully-diluted market cap latest ($)",
    headerName: "Fully-diluted mc ($)",
    description: "Market cap / Valuation based on max. supply of tokens..",
    width: 180,
    headerClassName: "header-bold",
  },
  {
    field: "TVL latest ($)",
    headerName: "TVL ($)",
    description: "Total value Locked",
    width: 180,
    headerClassName: "header-bold",
  },

  {
    field: "30d total revenue ($)",
    headerName: "Revenue ($)",
    description: "Monthy Revenue.",
    width: 160,
    headerClassName: "header-bold",
  },
  {
    field: "P/S ratio latest (x)",
    headerName: "P/S ratio (x)",
    description: "Price to sales Ratio.",
    width: 160,
    headerClassName: "header-bold",
  },
];

function Table() {
  return (
    <div
      className="cryptoTable"
      style={{ height: 800, width: "85%", fontSize: 25 }}
    >
      <DataGrid
        className="dataGrid"
        rows={data}
        columns={columns}
        pageSize={13}
        rowsPerPageOptions={[5]}
        getCellClassName={(params) => {
          if (params.value === "-") {
            return "";
          } else if (params.field === "24h change (%)") {
            return params.value >= 0 ? "green" : "red";
          } else if (params.field === "7d change (%)") {
            return params.value >= 0 ? "green" : "red";
          } else if (params.field === "30d change (%)") {
            return params.value >= 0 ? "green" : "red";
          }
        }}
        sx={{
          ".MuiDataGrid-cell:focus": {
            outline: "solid --bs-indigo 1px",
            borderRadius: "5px",
          },
          ".MuiDataGrid-root": {
            color: "white",
          },
          ".MuiDataGrid-cellContent": {
            paddingLeft: "8px",
          },
          ".MuiDataGrid-columnHeaderTitle": {
            fontWeight: "600",
            fontSize:"16px"
          },
        }}
      />
    </div>
  );
}

export default Table;
