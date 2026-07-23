import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Container, Card, Button, Spinner, Alert, Badge } from 'react-bootstrap'
import { fetchMovieById } from '../api/movieApi'
import { useMovie } from '../context/MovieContext'
import { formatVND, formatDateDisplay } from '../utils/format'

function MovieDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { state } = useMovie()
  const { genres } = state
  const [movie, setMovie] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // TODO-05: useEffect — call fetchMovieById(id), on success setMovie(data),
  //           on error setError(err.message), finally setLoading(false)
  useEffect(() => {
    // TODO-05
    fetchMovieById(id)
      .then((data) => setMovie(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [id])

  const getGenreName = (genreId) => genres.find((g) => String(g.id) === String(genreId))?.name || 'Unknown'

  // TODO-05: if loading → return <Container><Spinner animation="border" role="status" /></Container>
  if (loading) {
    return (
      <Container className="text-center mt-5">
        <Spinner animation="border" role="status" />
      </Container>
    )
  }

  // TODO-05: if error → return <Container><Alert variant="danger">{error}</Alert></Container>
  if (error) {
    return (
      <Container className="mt-5">
        <Alert variant="danger">{error}</Alert>
      </Container>
    )
  }

  return (
    <Container className="mt-4" style={{ maxWidth: 600 }}>
      {/* TODO-05: Add a Back button that navigates to '/' */}
      <Button variant="secondary" className="mb-3" onClick={() => navigate('/')}>
        Back
      </Button>
      <Card>
        <Card.Header><strong>Movie Detail</strong></Card.Header>
        <Card.Body>
          {/* TODO-05: Show movie.title, movie.director, movie.studio, genre (Badge),
              ticketPrice (formatVND), vipPrice (formatVND), releaseDate (formatDateDisplay) */}
          <Card.Title className="mb-3">{movie.title}</Card.Title>
          <Card.Text><strong>Director:</strong> {movie.director}</Card.Text>
          <Card.Text><strong>Studio:</strong> {movie.studio}</Card.Text>
          <Card.Text>
            <strong>Genre:</strong> <Badge bg="secondary">{getGenreName(movie.genreId)}</Badge>
          </Card.Text>
          <Card.Text><strong>Ticket Price:</strong> {formatVND(movie.ticketPrice)}</Card.Text>
          <Card.Text><strong>VIP Price:</strong> {formatVND(movie.vipPrice)}</Card.Text>
          <Card.Text><strong>Release Date:</strong> {formatDateDisplay(movie.releaseDate)}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default MovieDetail
