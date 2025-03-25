import {Link} from 'react-router-dom'

import './index.css'

const NotFound = () => (
  <div className="not-found-container">
    <img
      className="image-notfound-net"
      alt="not found"
      src="https://res-console.cloudinary.com/dktwlx0dz/thumbnails/transform/v1/image/upload/Yl9hdXRvOnByZWRvbWluYW50LGNfcGFkLGhfMzAwLHdfMzAwLGZfanBnLGZsX2xvc3N5LmFueV9mb3JtYXQucHJlc2VydmVfdHJhbnNwYXJlbmN5LnByb2dyZXNzaXZl/v1/Y2NicC1taW5pLXByb2plY3QtaW5zdGEtc2hhcmUvbm90LWZvdW5kX3NlY3J0bQ==/template_primary"
    />
    <h1 className="not-found-heading">Page Not Found</h1>
    <Link to="/">
      <button className="home-navigate-button" type="button">
        Go Home
      </button>
    </Link>
  </div>
)

export default NotFound
