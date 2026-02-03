import { useEffect } from 'react';

function MentionsLegales() {
  useEffect(() => {
    // Add noindex meta tag for SEO
    const metaRobots = document.createElement('meta');
    metaRobots.name = 'robots';
    metaRobots.content = 'noindex, nofollow';
    document.head.appendChild(metaRobots);

    // Cleanup on unmount
    return () => {
      document.head.removeChild(metaRobots);
    };
  }, []);

  return (
    <>
      {/* Header */}
      <section className="py-5">
        <div className="container text-center">
          <h1>Mentions légales</h1>
          <div className="border-bottom border-primary mx-auto mt-3" style={{ width: '200px' }}></div>
        </div>
      </section>

      {/* Accordion */}
      <section className="pb-5">
        <div className="container">
          <div className="accordion" id="mentionsAccordion">

            {/* Éditeur du site */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Éditeur du site
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#mentionsAccordion"
              >
                <div className="accordion-body">
                  <h5>John Doe</h5>
                  <p className="mb-1">
                    <i className="bi bi-geo-alt me-2"></i>
                    40 rue Laure Diebold
                  </p>
                  <p className="mb-1">
                    <i className="bi bi-geo me-2"></i>
                    69009 Lyon, France
                  </p>
                  <p className="mb-1">
                    <i className="bi bi-phone me-2"></i>
                    10 20 30 40 50
                  </p>
                  <p className="mb-0">
                    <i className="bi bi-envelope me-2"></i>
                    john.doe@gmail.com
                  </p>
                </div>
              </div>
            </div>

            {/* Hébergeur */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Hébergeur
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#mentionsAccordion"
              >
                <div className="accordion-body">
                  <h5>GitHub Pages</h5>
                  <p className="mb-1">GitHub, Inc.</p>
                  <p className="mb-1">88 Colin P Kelly Jr St</p>
                  <p className="mb-0">San Francisco, CA 94107, United States</p>
                </div>
              </div>
            </div>

            {/* Crédits */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Crédits
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#mentionsAccordion"
              >
                <div className="accordion-body">
                  <p className="mb-2">
                    <strong>Images :</strong>{' '}
                    <a
                      href="https://pixabay.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Pixabay
                    </a>
                  </p>
                  <p className="mb-0">
                    <strong>Favicon :</strong>{' '}
                    <a
                      href="https://www.flaticon.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Flaticon
                    </a>
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default MentionsLegales;
