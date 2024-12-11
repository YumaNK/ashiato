import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { fetchCompounds, Compound } from "../api/compoundApi";

const CompoundTable: React.FC = () => {
  const [compounds, setCompounds] = useState<Compound[]>([]);

  useEffect(() => {
    fetchCompounds().then(setCompounds);
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "name", headerName: "Molecule", width: 150 },
    {
      field: "image",
      headerName: "Image",
      width: 150,
      renderCell: (params: any) => <img src={params.value} alt={params.row.name} width="50" />,
    },
    { field: "mpoScore", headerName: "MPO Score", width: 150 },
    { field: "cLogP", headerName: "cLogP", width: 150 },
    { field: "hBondAcceptors", headerName: "H-Bond Acceptors", width: 150 },
    { field: "hBondDonors", headerName: "H-Bond Donors", width: 150 },
    { field: "mass", headerName: "Mass", width: 150 },
  ];

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid rows={compounds} columns={columns} />
    </div>
  );
};

export default CompoundTable;
