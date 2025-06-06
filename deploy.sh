#!/bin/bash

set -e  # Dừng nếu có lỗi

APP_DIR="public/miniapps/com.example.miniapp1/v1"
TEMP_DIR=".deploy_temp"

echo "🔄 Đang deploy từ: $APP_DIR"

# Kiểm tra thư mục tồn tại
if [ ! -d "$APP_DIR" ]; then
  echo "❌ Thư mục $APP_DIR không tồn tại. Kiểm tra lại đường dẫn."
  exit 1
fi

# Tạo thư mục tạm chứa nội dung cần deploy
rm -rf $TEMP_DIR
mkdir $TEMP_DIR
cp -r $APP_DIR/* $TEMP_DIR/

# Chuyển sang branch gh-pages hoặc tạo mới
git checkout gh-pages 2>/dev/null || git checkout --orphan gh-pages

# Xoá nội dung cũ và copy mới
git rm -rf . > /dev/null 2>&1 || true
cp -r $TEMP_DIR/* .
rm -rf $TEMP_DIR

# Commit và push
git add .
git commit -m "🚀 Deploy updated miniapp v1"
git push origin gh-pages --force

# Quay lại branch chính
git checkout main

echo "✅ Deploy hoàn tất! Truy cập: https://kieulan1912.github.io/miniapp-server/"
