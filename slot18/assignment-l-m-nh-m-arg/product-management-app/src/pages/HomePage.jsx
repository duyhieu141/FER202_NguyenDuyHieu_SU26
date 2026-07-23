import { useState, useEffect } from 'react'
import { Container, Alert, Spinner, Modal, Button } from 'react-bootstrap'
import { getProducts, addProduct, deleteProduct } from '../services/productService'
import ProductList from '../components/ProductList'
import AddProductForm from '../components/AddProductForm'

// TODO-04: Fetch data từ API, xử lý loading + error
function HomePage() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // State cho Modal xác nhận xóa
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [deleteId, setDeleteId] = useState(null)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true)
        const data = await getProducts()
        setProducts(data)
        setError(null)
      } catch (err) {
        setError('Không thể tải danh sách sản phẩm. Vui lòng kiểm tra API server!')
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  // Mở modal xác nhận xóa
  const handleDelete = (id) => {
    setDeleteId(id)
    setShowDeleteModal(true)
  }

  // Xác nhận xóa trong modal
  const confirmDelete = async () => {
    try {
      setDeleting(true)
      await deleteProduct(deleteId)
      // Lọc bỏ sản phẩm vừa xóa khỏi state
      setProducts((prev) => prev.filter((p) => p.id !== deleteId))
      setShowDeleteModal(false)
    } catch (err) {
      alert('Xóa sản phẩm thất bại!')
    } finally {
      setDeleting(false)
      setDeleteId(null)
    }
  }

  const handleAdd = async (newProduct) => {
    try {
      const created = await addProduct(newProduct)
      // Cập nhật state — KHÔNG mutate mảng cũ, tạo mảng mới
      setProducts((prev) => [...prev, created])
    } catch (err) {
      alert('Thêm sản phẩm thất bại!')
    }
  }

  if (loading) {
    return (
      <Container className="text-center py-5">
        <Spinner animation="border" variant="primary" />
        <p className="mt-2">Loading products...</p>
      </Container>
    )
  }

  if (error) {
    return (
      <Container className="py-5">
        <Alert variant="danger">{error}</Alert>
      </Container>
    )
  }

  return (
    <Container className="py-4">
      <h2 className="mb-4">🛒 Product List</h2>
      <AddProductForm onAdd={handleAdd} />
      <ProductList products={products} onDelete={handleDelete} />

      {/* Modal xác nhận xóa sản phẩm */}
      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>⚠️ Xác nhận xóa</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Bạn có chắc chắn muốn xóa sản phẩm này? Hành động này không thể hoàn tác.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)} disabled={deleting}>
            Hủy
          </Button>
          <Button variant="danger" onClick={confirmDelete} disabled={deleting}>
            {deleting ? 'Đang xóa...' : 'Xóa sản phẩm'}
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  )
}

export default HomePage
