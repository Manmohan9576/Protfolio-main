import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="container" style={{ textAlign: 'center', maxWidth: '600px', marginBottom: '100px' }}>
      <p style={{ color: 'var(--primary-color)', fontSize: '16px', marginBottom: '20px' }}>04. What's Next?</p>
      <h2 style={{ fontSize: '50px', color: 'var(--text-color)', marginBottom: '30px' }}>Get In Touch</h2>
      <p style={{ color: 'var(--secondary-color)', fontSize: '18px', marginBottom: '50px' }}>
        Although I'm not currently looking for any new opportunities, my inbox is always open.
        Whether you have a question or just want to say hi, I'll try my best to get back to you!
      </p>
      <a href="mailto:hello@example.com" className="btn" style={{ padding: '20px 30px' }}>
        Say Hello
      </a>
    </section>
  );
};

export default Contact;
