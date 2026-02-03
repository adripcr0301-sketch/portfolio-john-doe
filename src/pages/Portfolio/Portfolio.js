import { useEffect } from 'react';

function Portfolio() {
  useEffect(() => {
    document.title = 'Portfolio - John Doe';
  }, []);

  const projects = [
    {
      image: '/images/portfolio/fresh-food.jpg',
      title: 'Fresh Food',
      description: 'Site de vente de produits frais en ligne.',
      tech: 'Site réalisé avec PHP et MySQL'
    },
    {
      image: '/images/portfolio/restaurant-japonais.jpg',
      title: 'Restaurant Akira',
      description: 'Site de vente de produits frais en ligne.',
      tech: 'Site réalisé avec WordPress'
    },
    {
      image: '/images/portfolio/espace-bien-etre.jpg',
      title: 'Espace bien-être',
      description: 'Site de vente de produits frais en ligne.',
      tech: 'Site réalisé avec Laravel'
    },
    {
      image: '/images/portfolio/seo.jpg',
      title: 'SEO',
      description: "Amélioration du référencement d'un site e-commerce.",
      tech: 'Utilisation des outils SEO'
    },
    {
      image: '/images/portfolio/coder.jpg',
      title: "Création d'une API",
      description: "Création d'une API RESTful publique.",
      tech: 'PHP - SYMFONY'
    },
    {
      image: '/images/portfolio/screens.jpg',
      title: "Maquette d'un site web",
      description: "Création du prototype d'un site.",
      tech: 'Réalisé avec FIGMA'
    }
  ];

  return (
    <>
      {/* Banner */}
      <section
        className="banner py-5 text-white text-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${process.env.PUBLIC_URL}/images/banner.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container py-5">
          <h1>Portfolio</h1>
          <p className="lead">Voici quelques-unes de mes réalisations.</p>
        </div>
      </section>

      {/* Portfolio Cards */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            {projects.map((project, index) => (
              <div key={index} className="col-md-4 mb-4">
                <div className="card h-100 portfolio-card">
                  <img
                    src={`${process.env.PUBLIC_URL}${project.image}`}
                    className="card-img-top"
                    alt={project.title}
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">{project.title}</h5>
                    <p className="card-text">{project.description}</p>
                    <a href="#!" className="btn btn-primary">Voir le site</a>
                  </div>
                  <div className="card-footer text-center text-muted">
                    {project.tech}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
