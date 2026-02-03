import { useState, useEffect } from 'react';

function GitHubModal({ show, onClose }) {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // GitHub API call
    fetch('https://api.github.com/users/github-john-doe')
      .then(response => response.json())
      .then(data => {
        setUserData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching GitHub data:', error);
        setLoading(false);
      });
  }, []);

  if (!show) return null;

  return (
    <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content bg-dark text-white">
          <div className="modal-header border-secondary">
            <h5 className="modal-title">Mon profil GitHub</h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              onClick={onClose}
              aria-label="Fermer"
            ></button>
          </div>
          <div className="modal-body">
            {loading ? (
              <div className="text-center py-4">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Chargement...</span>
                </div>
              </div>
            ) : userData ? (
              <div className="row">
                <div className="col-md-5 text-center mb-3 mb-md-0">
                  <img
                    src={userData.avatar_url}
                    alt={userData.name || userData.login}
                    className="img-fluid rounded"
                    style={{ maxWidth: '150px' }}
                  />
                </div>
                <div className="col-md-7">
                  <h6 className="text-primary">
                    <i className="bi bi-person-circle me-2"></i>
                    <a
                      href={userData.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary text-decoration-none"
                    >
                      {userData.name || userData.login}
                    </a>
                  </h6>

                  {userData.bio && (
                    <p className="small">
                      <i className="bi bi-quote me-2"></i>
                      {userData.bio}
                    </p>
                  )}

                  <p className="mb-1 small">
                    <i className="bi bi-folder me-2"></i>
                    Repositories: {userData.public_repos}
                  </p>
                  <p className="mb-1 small">
                    <i className="bi bi-people me-2"></i>
                    Followers: {userData.followers}
                  </p>
                  <p className="mb-0 small">
                    <i className="bi bi-person-plus me-2"></i>
                    Following: {userData.following}
                  </p>
                </div>
              </div>
            ) : (
              <p className="text-center">Impossible de charger les données.</p>
            )}
          </div>
          <div className="modal-footer border-secondary">
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Fermer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GitHubModal;
