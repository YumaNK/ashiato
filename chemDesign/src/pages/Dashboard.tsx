import React, { useState } from "react";
import { Grid, Box } from "@mui/material";
import CompoundTable from "../components/CompoundTable";
import SearchWindow from "../components/SearchWindow";  // SearchWindowをインポート
import { Compound } from "../api/compoundApi";
import { getRandomCompounds } from "../utils/randomUtils"; // ランダムな化合物を取得するユーティリティ関数

const Dashboard: React.FC = () => {
  const [compounds, setCompounds] = useState<Compound[]>([]);

  const handleSearch = () => {
    // 検索ボタンが押された時にmockDataからランダムに10個の化合物を選択
    const randomCompounds = getRandomCompounds(10);
    setCompounds(randomCompounds);
  };

  return (
    <Box sx={{ padding: 4, width: "100%" }}>
      <Grid container spacing={4}>
        {/* 検索ウィンドウ */}
        <Grid item xs={12} md={12}>
          <SearchWindow onSearch={handleSearch} /> {/* SearchWindowを使用 */}
        </Grid>

        {/* 化合物テーブル */}
        <Grid item xs={12} md={12}>
          <CompoundTable compounds={compounds} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
