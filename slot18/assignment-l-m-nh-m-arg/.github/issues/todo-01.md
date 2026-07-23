---
name: TODO Task
about: Issue cho một TODO trong assignment
title: "[TODO-01] Thiết lập dự án React (Vite) và tích hợp Mock API"
labels: enhancement
assignees: "Nguyễn Đắc Thịnh"
---

## 📋 Mô tả
Khởi tạo và thiết lập dự án ReactJS sử dụng Vite, cài đặt các thư viện cần thiết, thiết lập mock database (json-server) chứa 10 sản phẩm mẫu và cấu hình routing cơ bản.

## 📁 Files liên quan
- `package.json`
- `vite.config.js`
- `db.json`
- `src/main.jsx`
- Thư mục `public/images/`

## ✅ Acceptance Criteria
- [ ] Khởi tạo thành công project Vite + React.
- [ ] Cài đặt đầy đủ các package: `axios`, `react-router-dom`, `react-bootstrap`, `bootstrap`, `json-server@0.17.4`, `concurrently`.
- [ ] Thêm các scripts dev, server, start, build, preview đúng chuẩn vào `package.json`.
- [ ] Tạo file `db.json` ở thư mục gốc chứa đủ 10 sản phẩm laptop có các field: id, name, description, price, currentPrice, image.
- [ ] Copy đủ 10 ảnh laptop từ đề bài vào thư mục `public/images/`.
- [ ] Cấu hình `BrowserRouter` và import bootstrap CSS trong `src/main.jsx`, xóa các CSS mặc định không dùng tới.
- [ ] Chạy lệnh `npm start` khởi động được cả Vite dev server và mock json-server mà không lỗi.

## 🔢 Điểm: 0.5
