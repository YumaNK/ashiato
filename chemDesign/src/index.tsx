import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // App.tsxをインポート

// React 18 のマウント
const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App /> {/* メインアプリケーション */}
    </React.StrictMode>
  );
}
