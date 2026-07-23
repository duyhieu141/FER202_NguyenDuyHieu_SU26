---
name: TODO Task
about: Issue cho một TODO trong assignment
title: "[TODO-06] Gửi POST thêm sản phẩm vào API và cập nhật danh sách hiển thị"
labels: enhancement
assignees: "Nguyễn Chí Vương"
---

## 📋 Mô tả
Viết hàm service `addProduct(product)` gửi request POST dùng axios lên API server. Tích hợp form `AddProductForm` vào `HomePage` và viết hàm xử lý thêm sản phẩm mới vào state để cập nhật UI ngay lập tức.

## 📁 Files liên quan
- `src/services/productService.js`
- `src/pages/HomePage.jsx`

## ✅ Acceptance Criteria
- [ ] Thêm hàm async `addProduct(product)` gửi POST dùng axios tới API và trả về sản phẩm vừa tạo.
- [ ] Import và render component `AddProductForm` phía trên danh sách sản phẩm trong `HomePage.jsx`.
- [ ] Viết hàm `handleAdd` trong `HomePage` gọi `addProduct()`.
- [ ] Cập nhật state danh sách sản phẩm bằng cách tạo mảng mới chứa sản phẩm mới (dùng spread operator `[...prev, created]`, không mutate state cũ).
- [ ] Kiểm tra sản phẩm mới được thêm thành công và lưu lại trong file `db.json`.

## 🔢 Điểm: 1.0
