// TODO-08: Create a proper "Page Not Found" (404) UI
// Requirements:
// - Import useNavigate from 'react-router-dom'
// - Display "404" prominently (e.g. <h1 className="display-1 fw-bold text-danger">)
// - Display "Page Not Found" message
// - Add a Button that navigates to '/' when clicked (text must contain "Back" or "Home")
// - Wrap everything in <Container className="mt-5 text-center">
import { useNavigate } from 'react-router-dom'
import { Container, Button } from 'react-bootstrap'
function NotFound() {
  const navigate = useNavigate()
  return (
    <div>
      {/* TODO-08: implement 404 page */}
      <Container className="mt-5 text-center">
        <h1 className="display-1 fw-bold text-danger">404</h1>
        <p className="lead">Page Not Found</p>
        <Button variant="primary" onClick={() => navigate('/')}>
          Back
        </Button>
      </Container>
    </div>
  )
}

export default NotFound
