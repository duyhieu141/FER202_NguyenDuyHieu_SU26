---
name: TODO Task
about: Issue cho một TODO trong assignment
title: "[TODO-04] Tạo ProductList, fetch danh sách sản phẩm và xử lý trạng thái Loading/Error"
labels: enhancement
assignees: "Nguyễn Đắc Thịnh"
---

## 📋 Mô tả
Xây dựng component `ProductList` để hiển thị danh sách sản phẩm dưới dạng grid. Tích hợp fetching data vào `HomePage` sử dụng service `getProducts()`, quản lý trạng thái loading và bắt lỗi (network error, API down) để hiển thị thông báo Alert.

## 📁 Files liên quan
- `src/components/ProductList.jsx`
- `src/pages/HomePage.jsx`
- `src/App.jsx`

## ✅ Acceptance Criteria
- [ ] Tạo component `ProductList` nhận props `products` và callback `onDelete`, hiển thị danh sách dạng Grid Bootstrap (`Row`, `Col`).
- [ ] Component `ProductList` hiển thị "No products found." nếu danh sách rỗng.
- [ ] Thiết lập state `products`, `loading`, `error` trong `HomePage.jsx`.
- [ ] Sử dụng hook `useEffect` gọi `getProducts()` khi HomePage render lần đầu.
- [ ] Hiển thị màn hình Loading (Spinner) khi đang tải dữ liệu.
- [ ] Hiển thị thông báo Alert đỏ báo lỗi khi tắt json-server (không fetch được dữ liệu).
- [ ] Tích hợp tạm HomePage vào App.jsx để kiểm tra hiển thị.

## 🔢 Điểm: 1.25
