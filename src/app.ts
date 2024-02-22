import express from 'express';
import { healthRouter } from './routes/health';

const app = express();

// JSONミドルウェアの設定
app.use(express.json());

// ルートの設定
app.use('/health', healthRouter);

// アプリケーションのエクスポート（テスト用）
export { app };

// サーバー起動（開発時のみ）
if(process.env.NODE_ENV !== 'test') {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}
