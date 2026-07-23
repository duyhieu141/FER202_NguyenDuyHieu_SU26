import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Card, Button, Table, Spinner, Alert, Badge } from 'react-bootstrap'
import axios from 'axios'
import { formatPriceRange } from '../utils/format'

const BASE_URL = 'http://localhost:3001'

export default function CategoryDetail() {
  const { id } = useParams()
  const navigate = useNavigate()

  const [category, setCategory] = useState(null)
  const [restaurants, setRestaurants] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const load = async () => {
      setLoading(true)
      try {
        const [catRes, restRes] = await Promise.all([
          axios.get(`${BASE_URL}/categories`),
          axios.get(`${BASE_URL}/restaurants`),
        ])
        
        const foundCategory = catRes.data.find(
          (c) => String(c.id) === String(id)
        )
        if (!foundCategory) {
          setError('Category not found.')
          return
        }
        setCategory(foundCategory)

        const filtered = restRes.data.filter(
          (r) => String(r.categoryId) === String(id)
        )
        setRestaurants(filtered)
        setError(null)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [id])

  if (loading) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" />
      </div>
    )
  }
  if (error) {
    return (
      <div className="mt-5">
        <Alert variant="danger" role="alert">
          {error}
        </Alert>
      </div>
    )
  }
  if (!category) return null

  return (
    <div>
      <Button variant="secondary" onClick={() => navigate('/categories')} className="mb-3">
        Back to Categories
      </Button>

      <Card className="mb-4">
        <Card.Body>
          <h3>
            Category: <Badge bg="primary">{category.name}</Badge>
          </h3>
          <p className="text-muted mb-0">
            Total restaurants: {restaurants.length}
          </p>
        </Card.Body>
      </Card>

      <h4>Restaurants</h4>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Owner</th>
            <th>Address</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {restaurants.length === 0 ? (
            <tr>
              <td colSpan={5} className="text-center text-muted">
                No restaurants found in this category.
              </td>
            </tr>
          ) : (
            restaurants.map((r, index) => (
              <tr key={r.id}>
                <td>{index + 1}</td>
                <td>{r.name}</td>
                <td>{r.owner}</td>
                <td>{r.address}</td>
                <td>{formatPriceRange(r.priceMin, r.priceMax)}</td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </div>
  )
}
