import { useEffect } from 'react';

// Home page component
function Home({ onOpenModal }) {
  useEffect(() => {
    document.title = 'John Doe - Développeur Web Full Stack';
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section
        className="hero d-flex align-items-center justify-content-center text-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${process.env.PUBLIC_URL}/images/hero-bg.jpg)`
        }}
      >
        <div className="hero-content">
          <h1>Bonjour, je suis John Doe</h1>
          <h2>Développeur web full stack</h2>
          <button
            className="btn btn-primary mt-3"
            onClick={onOpenModal}
          >
            En savoir plus
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-5">
        <div className="container">
          <div className="row">

            {/* About Text */}
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h2 className="border-bottom border-primary pb-2 mb-4">A propos</h2>
              <img
                src="/images/john-doe-about.jpg"
                alt="John Doe"
                className="img-fluid mb-3"
              />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                consequat lectus a ante tempor pharetra. Nulla facilisi. Duis
                consectetur, nunc vel feugiat vehicula, eros ipsum placerat elit.
              </p>
              <p>
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia curae; Donec velit neque, auctor sit amet aliquam
                vel, ullamcorper sit amet ligula.
              </p>
              <p>
                Praesent sapien massa, convallis a pellentesque nec, egestas non
                nisi. Curabitur aliquet quam id dui posuere blandit.
              </p>
            </div>

            {/* Skills */}
            <div className="col-lg-6">
              <h2 className="border-bottom border-primary pb-2 mb-4">Mes compétences</h2>

              <div className="skill mb-3">
                <div className="d-flex justify-content-between">
                  <span>HTML5</span>
                  <span>90%</span>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar bg-danger"
                    role="progressbar"
                    style={{ width: '90%' }}
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>

              <div className="skill mb-3">
                <div className="d-flex justify-content-between">
                  <span>CSS3</span>
                  <span>80%</span>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar bg-primary"
                    role="progressbar"
                    style={{ width: '80%' }}
                    aria-valuenow="80"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>

              <div className="skill mb-3">
                <div className="d-flex justify-content-between">
                  <span>JAVASCRIPT</span>
                  <span>70%</span>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    style={{ width: '70%' }}
                    aria-valuenow="70"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>

              <div className="skill mb-3">
                <div className="d-flex justify-content-between">
                  <span>PHP</span>
                  <span>60%</span>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar bg-warning"
                    role="progressbar"
                    style={{ width: '60%' }}
                    aria-valuenow="60"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>

              <div className="skill mb-3">
                <div className="d-flex justify-content-between">
                  <span>REACT</span>
                  <span>50%</span>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: '50%', backgroundColor: '#adb5bd' }}
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
