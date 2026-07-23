import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Card, Button, Spinner, Alert, Table, Badge } from 'react-bootstrap'
import { fetchCarTypes, fetchCars } from '../api/carApi'
import { formatPriceRange, formatDateDisplay } from '../utils/format'

export default function CarTypeDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [carType, setCarType] = useState(null)
  const [cars, setCars] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const load = async () => {
      // TODO-10A: Dùng Promise.all fetch carTypes + cars
      // Tìm carType theo id; nếu không tìm thấy → navigate('/not-found', { replace: true })
      // Lọc cars theo carTypeId, cập nhật state
      try {
        setLoading(true)
        const [carTypesData, allCars] = await Promise.all([fetchCarTypes(), fetchCars()])
        const found = carTypesData.find((ct) => String(ct.id) === String(id))
        if (!found) {
          navigate('/not-found', { replace: true })
          return
        }
        setCarType(found)
        setCars(allCars.filter((c) => String(c.carTypeId) === String(id)))
        setLoading(false)
      } catch (err) {
        setError(err.message || 'Failed to load data.')
        setLoading(false)
      }
    }
    load()
  }, [id])

  // TODO-10A: Nếu loading → Spinner; nếu error → Alert danger
  if (loading) return <Spinner animation="border" className="d-block mx-auto mt-5" />
  if (error) return <Alert variant="danger" role="alert">{error}</Alert>

  return (
    <div>
      {/* TODO-10A: Nút Back navigate('/car-types') */}
      <Button variant="secondary" className="mb-3" onClick={() => navigate('/car-types')}>
        ← Back to Car Types
      </Button>
      {/* TODO-10A: Card với carType name, Badge id */}
      <Card className="mb-4">
        <Card.Body>
          <Card.Title className="d-flex align-items-center gap-2">
            {carType?.name} <Badge bg="secondary">ID: {carType?.id}</Badge>
          </Card.Title>
          <Card.Text>
            Cars count: {cars.length}
          </Card.Text>
        </Card.Body>
      </Card>
      {/* TODO-10A: Table cars (name, brand, transmission, formatPriceRange, lastServiced) */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Brand</th>
            <th>Transmission</th>
            <th>Price Range</th>
            <th>Last Serviced</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car) => (
            <tr key={car.id}>
              <td>{car.name}</td>
              <td>{car.brand}</td>
              <td>{car.transmission}</td>
              <td>{formatPriceRange(car.priceWeekday, car.priceWeekend)}</td>
              <td>{formatDateDisplay(car.lastServiced)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}
