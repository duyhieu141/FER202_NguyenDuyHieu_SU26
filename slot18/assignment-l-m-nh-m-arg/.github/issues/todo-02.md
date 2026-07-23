---
name: TODO Task
about: Issue cho một TODO trong assignment
title: "[TODO-02] Viết service getProducts lấy danh sách sản phẩm"
labels: enhancement
assignees: "Nguyễn Đắc Thịnh"
---

## 📋 Mô tả
Viết hàm service `getProducts()` sử dụng axios để thực hiện gửi request GET đến endpoint `http://localhost:3001/products` nhằm lấy danh sách sản phẩm từ mock server.

## 📁 Files liên quan
- `src/services/productService.js`

## ✅ Acceptance Criteria
- [ ] Tạo file `src/services/productService.js`.
- [ ] Viết hàm async `getProducts()` gọi API `GET http://localhost:3001/products` dùng axios.
- [ ] Trả về đúng dữ liệu `response.data` của API.
- [ ] Hàm không tự catch lỗi để các component gọi có thể tự catch lỗi bằng try/catch.

## 🔢 Điểm: 0.5
