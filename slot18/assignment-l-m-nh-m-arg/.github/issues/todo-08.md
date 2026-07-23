---
name: TODO Task
about: Issue cho một TODO trong assignment
title: "[TODO-08] Thiết lập React Router và xây dựng trang Chi tiết sản phẩm"
labels: enhancement
assignees: "Nguyễn Chí Vương"
---

## 📋 Mô tả
Cấu hình routing cho ứng dụng với các đường dẫn cụ thể, viết hàm service `getProductById(id)` và thiết kế trang `ProductDetailPage` hiển thị đầy đủ thông tin chi tiết sản phẩm.

## 📁 Files liên quan
- `src/App.jsx`
- `src/services/productService.js`
- `src/pages/ProductDetailPage.jsx`

## ✅ Acceptance Criteria
- [ ] Cấu hình các routes trong `src/App.jsx`: `/` (HomePage), `/products/:id` (ProductDetailPage), và `/products/:id/edit` (EditProductPage).
- [ ] Thêm hàm async `getProductById(id)` gửi GET dùng axios tới API theo ID sản phẩm.
- [ ] Sử dụng hook `useParams()` để lấy parameter `id` từ URL trong `ProductDetailPage`.
- [ ] Sử dụng `useEffect` gọi `getProductById(id)` để tải dữ liệu sản phẩm tương ứng và lưu vào state.
- [ ] Hiển thị thông tin đầy đủ của sản phẩm: ảnh, tên, ID, mô tả chi tiết, giá gốc, giá hiện tại.
- [ ] Bắt lỗi (404) khi truy cập sản phẩm không tồn tại (ví dụ `/products/999`) và hiển thị thông báo "Không tìm thấy sản phẩm!" kèm nút quay lại danh sách (`← Back to List`).
- [ ] Có nút `✏️ Edit` điều hướng đến trang chỉnh sửa sản phẩm `/products/:id/edit`.

## 🔢 Điểm: 1.0
