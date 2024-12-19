import React from "react";
import { Grid, Box } from "@mui/material";
import CompoundTable from "../components/CompoundTable";


const Dashboard: React.FC = () => {
  return (
    <Box sx={{ padding: 4, width: "100%" }}>
      <Grid container spacing={4}>
        {/* 化合物テーブル */}
        <Grid item xs={12} md={10}>
          <CompoundTable />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
