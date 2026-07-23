---
name: TODO Task
about: Issue cho một TODO trong assignment
title: "[TODO-09] Xây dựng trang Chỉnh sửa sản phẩm và gửi request PUT để cập nhật"
labels: enhancement
assignees: "Nguyễn Chí Vương"
---

## 📋 Mô tả
Viết hàm service `updateProduct(id, product)` gửi request PUT dùng axios lên API. Thiết kế trang `EditProductPage` chứa form chỉnh sửa sản phẩm, điền sẵn thông tin cũ của sản phẩm, thực hiện cập nhật và điều hướng về trang chi tiết.

## 📁 Files liên quan
- `src/services/productService.js`
- `src/pages/EditProductPage.jsx`

## ✅ Acceptance Criteria
- [ ] Thêm hàm async `updateProduct(id, product)` gửi request PUT dùng axios lên API theo ID sản phẩm.
- [ ] Thiết kế trang `EditProductPage.jsx` có sử dụng `useParams()` để lấy id sản phẩm cần sửa.
- [ ] Gọi `getProductById(id)` trong `useEffect` để tải thông tin hiện tại của sản phẩm và pre-fill (điền sẵn) vào form state.
- [ ] Thiết lập form controlled inputs với các trường: `name`, `description`, `price`, `currentPrice`. Lưu ý giữ nguyên đường dẫn file ảnh cũ (`image`) khi cập nhật.
- [ ] Gọi hàm `updateProduct(id, formData)` khi submit form và sử dụng `useNavigate()` chuyển hướng về trang chi tiết `/products/:id` sau khi cập nhật thành công.
- [ ] Hiển thị thông báo Alert đỏ báo lỗi "Cập nhật sản phẩm thất bại. Vui lòng thử lại!" nếu API server bị tắt hoặc việc lưu thất bại.

## 🔢 Điểm: 1.0
