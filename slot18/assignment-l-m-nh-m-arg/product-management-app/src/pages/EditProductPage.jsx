import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { Container, Form, Button, Alert, Spinner, Card } from 'react-bootstrap'
import { getProductById, updateProduct } from '../services/productService'

// TODO-09: Trang chỉnh sửa sản phẩm
function EditProductPage() {
  const { id } = useParams()
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    currentPrice: '',
    image: '',
  })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [saving, setSaving] = useState(false)
  const [validated, setValidated] = useState(false)

  // Pre-fill form với dữ liệu hiện tại của sản phẩm
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true)
        const data = await getProductById(id)
        setFormData(data)
        setError(null)
      } catch (err) {
        setError('Không tìm thấy sản phẩm!')
      } finally {
        setLoading(false)
      }
    }
    fetchProduct()
  }, [id])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.currentTarget

    if (!form.checkValidity()) {
      setValidated(true)
      return
    }

    try {
      setSaving(true)
      setError(null)
      await updateProduct(id, formData)
      // Update thành công → quay về trang chi tiết
      navigate(`/products/${id}`)
    } catch (err) {
      setError('Cập nhật sản phẩm thất bại. Vui lòng thử lại!')
      setSaving(false)
    }
  }

  if (loading) {
    return (
      <Container className="text-center py-5">
        <Spinner animation="border" variant="primary" />
      </Container>
    )
  }

  return (
    <Container className="py-4" style={{ maxWidth: '600px' }}>
      <Button as={Link} to={`/products/${id}`} variant="outline-secondary" className="mb-4">
        ← Back to Detail
      </Button>
      <Card className="shadow-sm">
        <Card.Header className="bg-warning text-dark fw-bold">✏️ Edit Product #{id}</Card.Header>
        <Card.Body>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label className="fw-semibold">Product Name</Form.Label>
              <Form.Control
                required
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter product name"
              />
              <Form.Control.Feedback type="invalid">
                Name is required.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="fw-semibold">Description</Form.Label>
              <Form.Control
                required
                as="textarea"
                rows={3}
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Enter description"
              />
              <Form.Control.Feedback type="invalid">
                Description is required.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="fw-semibold">Price</Form.Label>
              <Form.Control
                required
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="e.g. 25.990.000"
              />
              <Form.Control.Feedback type="invalid">
                Price is required.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="fw-semibold">Current Price</Form.Label>
              <Form.Control
                required
                name="currentPrice"
                value={formData.currentPrice}
                onChange={handleChange}
                placeholder="e.g. 20.990.000"
              />
              <Form.Control.Feedback type="invalid">
                Current price is required.
              </Form.Control.Feedback>
            </Form.Group>

            <Button type="submit" variant="primary" className="w-100" disabled={saving}>
              {saving ? 'Saving...' : 'Save Changes'}
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default EditProductPage
