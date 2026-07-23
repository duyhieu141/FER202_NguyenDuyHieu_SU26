---
name: TODO Task
about: Issue cho một TODO trong assignment
title: "[TODO-05] Tạo AddProductForm với controlled inputs và validate dữ liệu"
labels: enhancement
assignees: "Nguyễn Chí Vương"
---

## 📋 Mô tả
Xây dựng component form `AddProductForm` sử dụng controlled inputs để thu thập thông tin sản phẩm mới bao gồm: name, description, price, currentPrice. Thực hiện validate không được bỏ trống các trường và reset form sau khi submit.

## 📁 Files liên quan
- `src/components/AddProductForm.jsx`

## ✅ Acceptance Criteria
- [ ] Tạo component `AddProductForm` nhận prop callback `onAdd`.
- [ ] Thiết lập controlled inputs với state `formData` cho các trường: `name`, `description`, `price`, `currentPrice`.
- [ ] Tạo hàm handleChange dùng chung cho cả 4 input dựa trên thuộc tính `name` của input.
- [ ] Sử dụng validate của Bootstrap (`noValidate`, `validated` state và `<Form.Control.Feedback type="invalid">`) để ngăn chặn submit khi thông tin trống và hiển thị lỗi.
- [ ] Gọi callback `onAdd` truyền lên cha khi form hợp lệ và tự động gán ảnh mặc định `laptop1.png`.
- [ ] Reset form về trạng thái trống sau khi submit thành công.

## 🔢 Điểm: 1.0
