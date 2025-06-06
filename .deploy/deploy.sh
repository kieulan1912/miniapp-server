#!/bin/bash

# Đường dẫn đến mini app bạn muốn deploy
DEPLOY_DIR="public/miniapps/com.example.miniapp1/weather"

# Kiểm tra gh-pages đã được cài chưa
if ! npx --no-install gh-pages --version > /dev/null 2>&1; then
  echo "❌ Bạn cần cài đặt 'gh-pages' bằng: npm install --save-dev gh-pages"
  exit 1
fi

# Kiểm tra thư mục tồn tại
if [ ! -d "$DEPLOY_DIR" ]; then
  echo "❌ Thư mục $DEPLOY_DIR không tồn tại. Kiểm tra lại đường dẫn."
  exit 1
fi

echo "🚀 Deploying $DEPLOY_DIR to GitHub Pages..."

# Thực hiện deploy bằng gh-pages
npx gh-pages -d "$DEPLOY_DIR" -m "🚀 Auto deploy miniapp v1" --branch gh-pages

echo "✅ Đã deploy thành công!"
echo "🌐 Truy cập: https://kieulan1912.github.io/miniapp-server/"
