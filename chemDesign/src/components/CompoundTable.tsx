import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { fetchCompounds, Compound } from "../api/compoundApi";

const CompoundTable: React.FC = () => {
  const [compounds, setCompounds] = useState<Compound[]>([]);
  const [imageHeights, setImageHeights] = useState<{ [key: string]: number }>({});


  useEffect(() => {
    fetchCompounds().then(setCompounds);
  }, []);

  const handleImageLoad = (id: string, event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const { naturalHeight } = event.target as HTMLImageElement;
    setImageHeights(prev => ({ ...prev, [id]: naturalHeight }));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "name", headerName: "Molecule", width: 500, renderCell: (params: any) => (
        <div style={{ wordWrap: "break-word", whiteSpace: "normal" }}>
          {params.value}
        </div>
      ),
    },
    {
      field: "image",
      headerName: "Image",
      width: 250,
      renderCell: (params: any) => <img src={params.value} alt={params.row.name} width="100%" onLoad={(e) => handleImageLoad(params.row.id, e)} />,
    },
    { field: "mpoScore", headerName: "MPO Score", width: 150 },
    { field: "cLogP", headerName: "cLogP", width: 150 },
    { field: "hBondAcceptors", headerName: "H-Bond Acceptors", width: 150 },
    { field: "hBondDonors", headerName: "H-Bond Donors", width: 150 },
    { field: "mass", headerName: "Mass", width: 150 },
  ];

  const getRowHeight = (params: any) => {
    const imageHeight = imageHeights[params.id] || 50; // デフォルトの高さを50pxに設定
    return imageHeight + 20; // 画像の高さに余白（20px）を加算
  };

  return (
    <div style={{ height: 1000, width: "100%" }}>
      <DataGrid rows={compounds} columns={columns} getRowHeight={getRowHeight} />
    </div>
  );
};

export default CompoundTable;
