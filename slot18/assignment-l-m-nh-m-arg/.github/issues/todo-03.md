---
name: TODO Task
about: Issue cho một TODO trong assignment
title: "[TODO-03] Tạo component ProductCard hiển thị thông tin sản phẩm"
labels: enhancement
assignees: "Nguyễn Đắc Thịnh"
---

## 📋 Mô tả
Xây dựng component `ProductCard` để hiển thị thông tin chi tiết của 1 sản phẩm laptop bao gồm: ảnh, tên, mô tả ngắn, giá gốc (gạch ngang), giá hiện tại (màu đỏ) và các nút View Detail, Delete.

## 📁 Files liên quan
- `src/components/ProductCard.jsx`

## ✅ Acceptance Criteria
- [ ] Tạo component ProductCard nhận props: `product` và callback `onDelete`.
- [ ] Hiển thị hình ảnh sản phẩm từ `/images/${product.image}`.
- [ ] Hiển thị tên sản phẩm và mô tả ngắn (`product.description`).
- [ ] Hiển thị giá gốc gạch ngang (`text-decoration-line-through text-muted`) và giá hiện tại màu đỏ (`text-danger fw-bold`).
- [ ] Nút View Detail liên kết đến trang chi tiết `/products/${product.id}` bằng cách sử dụng `Button as={Link}` từ `react-router-dom`.
- [ ] Nút Delete gọi hàm callback `onDelete(product.id)` khi được click.

## 🔢 Điểm: 0.75
