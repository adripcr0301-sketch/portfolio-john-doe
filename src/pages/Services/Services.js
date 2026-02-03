function Services() {
  const services = [
    {
      icon: 'bi-palette',
      title: 'UX Design',
      description: "L'UX Design est une méthode de conception centrée sur l'utilisateur. Son but est d'offrir une expérience de navigation optimale à l'internaute."
    },
    {
      icon: 'bi-code-slash',
      title: 'Développement web',
      description: "Le développement de sites web repose sur l'utilisation des langages HTML, CSS, JavaScript et PHP. Je réalise des sites sur mesure ou à l'aide de CMS."
    },
    {
      icon: 'bi-search',
      title: 'Référencement',
      description: "Le référencement naturel (SEO) permet d'améliorer le positionnement d'un site web dans les résultats des moteurs de recherche."
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
          <h1>Mon offre de services</h1>
          <p className="lead">Voici les prestations sur lesquelles je peux intervenir.</p>
        </div>
      </section>

      {/* Services Cards */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            {services.map((service, index) => (
              <div key={index} className="col-md-4 mb-4">
                <div className="card h-100 text-center service-card">
                  <div className="card-body">
                    <i className={`bi ${service.icon} fs-1 text-primary mb-3`}></i>
                    <h5 className="card-title">{service.title}</h5>
                    <p className="card-text">{service.description}</p>
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

export default Services;
