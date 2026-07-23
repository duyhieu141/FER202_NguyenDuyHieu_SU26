---
name: TODO Task
about: Issue cho một TODO trong assignment
title: "[TODO-07] Gửi DELETE xóa sản phẩm khỏi API và giao diện"
labels: enhancement
assignees: "Nguyễn Đắc Thịnh"
---

## 📋 Mô tả
Viết hàm service `deleteProduct(id)` gửi request DELETE dùng axios lên API. Hoàn thiện hàm xử lý xóa sản phẩm `handleDelete` ở `HomePage` có hiển thị hộp thoại xác nhận (confirm), sau đó lọc bỏ sản phẩm bị xóa khỏi state hiển thị trên UI.

## 📁 Files liên quan
- `src/services/productService.js`
- `src/pages/HomePage.jsx`
- `src/components/ProductCard.jsx`

## ✅ Acceptance Criteria
- [ ] Thêm hàm async `deleteProduct(id)` gửi request DELETE dùng axios lên API.
- [ ] Hoàn thiện logic `handleDelete` trong `HomePage.jsx`: sử dụng `window.confirm('Bạn có chắc muốn xóa sản phẩm này?')` để xác nhận trước khi xóa.
- [ ] Sau khi API xóa thành công, lọc bỏ sản phẩm khỏi state bằng `filter` (tạo mảng mới không chứa id vừa xóa) để cập nhật UI ngay lập tức.
- [ ] Xác nhận dữ liệu bị xóa thật sự trong file `db.json`.

## 🔢 Điểm: 1.0
