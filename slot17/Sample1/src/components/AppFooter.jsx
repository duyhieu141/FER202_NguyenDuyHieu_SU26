import about from '../data/about'

export default function AppFooter() {
  // TODO-08: Hiển thị logo, copyright, version, course từ about.js
  return (
    <footer className="bg-dark text-white py-3 mt-auto">
      <div className="container text-center">
        {/* TODO-08: Hiển thị logo image, appName, copyright, version, course */}
        <div className="d-flex align-items-center justify-content-center gap-2 mb-2">
          <img src={about.logo} alt="logo" width="24" height="24" />
          <span>{about.appName}</span>
        </div>
        <div className="small">
          <span className="me-2">{about.copyright}</span>
          <span className="me-2">|</span>
          <span className="me-2">{about.version}</span>
          <span className="me-2">|</span>
          <span>{about.course}</span>
        </div>
      </div>
    </footer>
  )
}
