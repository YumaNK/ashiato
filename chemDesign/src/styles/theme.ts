import { createTheme } from '@mui/material/styles';

// カスタムテーマの作成
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // プライマリカラー (通常の青)
    },
    secondary: {
      main: '#f50057', // セカンダリカラー (ピンク)
    },
    background: {
      default: '#f4f6f8', // 背景色
      paper: '#ffffff',   // カードやモーダルの背景色
    },
    text: {
      primary: '#333333', // 主要なテキストの色
      secondary: '#666666', // セカンダリテキストの色
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif', // フォント
    h1: {
      fontSize: '2.5rem',
      fontWeight: 500,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
    },
    body2: {
      fontSize: '0.875rem',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px', // ボタンの角丸を設定
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '12px', // カードの角丸を設定
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // カードの影
        },
      },
    },
  },
});

export default theme;
