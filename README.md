
# 📦 mini-app-server

Đây là một server backend đơn giản phục vụ các Mini App HTML/JS tĩnh, tương thích với chuẩn hiển thị của **Rakuten Mini App SDK** hoặc Android WebView. Server sử dụng Node.js + Express để phục vụ các mini app theo định dạng:

```
/miniapp/:appId/v:version/index.html
```

## 🚀 Cài đặt & Chạy server

### 1. Cài Node.js

> Yêu cầu Node.js v14+ và npm đã được cài sẵn.

### 2. Cài dependencies

```bash
npm install
```

### 3. Khởi động server

```bash
npm start
```

Mặc định server sẽ chạy tại:  
📡 `http://localhost:3000`

## 📁 Cấu trúc thư mục

```
mini-app-server/
│
├── miniapps/
│   └── com.example.miniapp1/
│       └── v1/
│           └── index.html
│           └── main.js
│
├── server.js
├── package.json
└── README.md
```

- **`miniapps/`**: chứa các mini app theo `miniAppId` và `version`.
- **`server.js`**: file chính để khởi động express server.

## ➕ Thêm Mini App mới

Tạo folder theo định dạng:

```
miniapps/com.example.miniapp2/v1/
```

Trong đó:
- `com.example.miniapp2`: là miniAppId.
- `v1`: là version.
- Bên trong cần có ít nhất `index.html`.

## 🔒 Lưu ý bảo mật

- Không commit `node_modules/` hoặc file `.env` (nếu dùng).
- Đảm bảo `.gitignore` chứa:

```
node_modules/
.env
```

## 📄 License

MIT © 2025
