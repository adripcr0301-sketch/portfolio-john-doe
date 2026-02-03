import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">

          {/* Column 1: Contact Info */}
          <div className="col-md-4 mb-3 mb-md-0">
            <h5>John Doe</h5>
            <p className="mb-1">40 rue Laure Diebold</p>
            <p className="mb-1">69009 Lyon, France</p>
            <p className="mb-1">10 20 30 40 50</p>
            <p className="mb-3">john.doe@gmail.com</p>

            {/* Social Icons */}
            <div className="social-icons">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-white me-2"
                aria-label="GitHub"
              >
                <i className="bi bi-github fs-5"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-white me-2"
                aria-label="Twitter"
              >
                <i className="bi bi-twitter fs-5"></i>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-white"
                aria-label="LinkedIn"
              >
                <i className="bi bi-linkedin fs-5"></i>
              </a>
            </div>
          </div>

          {/* Column 2: Useful Links */}
          <div className="col-md-4 mb-3 mb-md-0">
            <h5>Liens utiles</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="footer-link">Accueil</Link></li>
              <li><Link to="/services" className="footer-link">Services</Link></li>
              <li><Link to="/portfolio" className="footer-link">Portfolio</Link></li>
              <li><Link to="/contact" className="footer-link">Me contacter</Link></li>
              <li><Link to="/mentions-legales" className="footer-link">Mentions légales</Link></li>
            </ul>
          </div>

          {/* Column 3: Recent Projects */}
          <div className="col-md-4">
            <h5>Mes dernières réalisations</h5>
            <ul className="list-unstyled">
              <li><Link to="/portfolio" className="footer-link">Fresh Food</Link></li>
              <li><Link to="/portfolio" className="footer-link">Restaurant Akira</Link></li>
              <li><Link to="/portfolio" className="footer-link">Espace bien-être</Link></li>
              <li><Link to="/portfolio" className="footer-link">SEO</Link></li>
              <li><Link to="/portfolio" className="footer-link">Création d'une API</Link></li>
              <li><Link to="/portfolio" className="footer-link">Maquette d'un site</Link></li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
