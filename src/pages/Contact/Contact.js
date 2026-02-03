import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message envoyé !');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <>
      {/* Header */}
      <section className="py-4 bg-light">
        <div className="container text-center">
          <h1>Contact</h1>
          <p className="lead">
            Pour me contacter en vue d'un entretien ou d'une future collaboration,
            merci de remplir le formulaire de contact.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-5">
        <div className="container">
          <div className="row">

            {/* Contact Form */}
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h4 className="border-bottom border-primary pb-2 mb-4">Formulaire de contact</h4>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Votre nom</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Votre adresse email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">Votre numéro de téléphone</label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="subject" className="form-label">Sujet</label>
                  <input
                    type="text"
                    className="form-control"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Votre message</label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Envoyer</button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="col-lg-6">
              <h4 className="border-bottom border-primary pb-2 mb-4">Mes coordonnées</h4>

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
              <p className="mb-4">
                <i className="bi bi-envelope me-2"></i>
                john.doe@gmail.com
              </p>

              {/* Google Map */}
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.7186892807396!2d4.803919776561791!3d45.77827491092822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb5f9c8c9b6d%3A0x5d2b4d4f4b0b4b0b!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1620000000000!5m2!1sfr!2sfr"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps - John Doe"
                ></iframe>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
