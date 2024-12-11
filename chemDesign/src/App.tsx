import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './styles/theme'; // 作成したMaterial-UIのテーマ
import Dashboard from './pages/Dashboard'; // ダッシュボード画面

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Material-UIによるデフォルトのスタイルリセット */}
      <Dashboard /> {/* メイン画面 */}
    </ThemeProvider>
  );
};

export default App;
