# Focus Todo

TypeScript、Express.js、MySQLを使用した、集中管理のためのTODOアプリケーション


## 概要

タスク管理を効率的に行うためのWebアプリケーション。
ユーザー認証機能を備え、タスクの作成、カテゴリ分け、優先度設定などが可能。

## 主な機能

- ユーザー認証
- タスク管理（作成・編集・削除）
- カテゴリ管理
- 優先度設定
- 期限設定

## 技術スタック

- バックエンド: TypeScript + Express.js
- データベース: MySQL
- テスト: Jest
- API文書化: Swagger

## 開発環境のセットアップ

1. リポジトリのクローン
```bash
git clone https://github.com/yourusername/focus-todo.git
cd focus-todo
```

2. パッケージのインストール
```bash
npm install
```

3. 環境変数の設定
```bash
cp .env.example .env
# .envファイルを編集して必要な設定を行う
```

4. 開発サーバーの起動
```bash
npm run dev
```

## ディレクトリ構造

```
src/
├── config/        # 設定ファイル
├── controllers/   # コントローラー
├── middleware/    # ミドルウェア
├── models/        # データベースモデル
├── routes/        # APIルート
├── services/      # ビジネスロジック
├── types/         # 型定義
├── utils/         # ユーティリティ
└── app.ts         # アプリケーションのエントリーポイント
```

## 利用可能なコマンド

※随時追加予定

