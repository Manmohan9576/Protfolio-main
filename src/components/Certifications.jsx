import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

// Configure PDF worker
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: 'LPIC-1 Linux Administrator (101-500)',
      issuer: 'Packt',
      date: 'Mar 20, 2025',
      description: 'an online non-credit course authorized by Packt and offered through Coursera',
      color: '#61dafb',
      pdf: '/certifications/Coursera 3XWB2FS5FMWG.pdf',
    },
    {
      id: 2,
      title: 'Migrating to the AWS Cloud',
      issuer: 'Amazon Web Service',
      date: 'Apr 1, 2025',
      description: 'Fundamental understanding of IT services and their uses in the AWS Cloud.',
      color: '#ff9900',
      pdf: '/certifications/Coursera 6VBNBKRKOTIS.pdf',
    },
    {
      id: 3,
      title: 'Operating System Foundations',
      issuer: 'INFOSEC',
      date: 'Apr 15, 2025',
      description: 'Complex data structures and algorithms in JavaScript.',
      color: '#f7df1e',
      pdf: '/certifications/Coursera G696LNM51C37.pdf',
    },
    {
      id: 4,
      title: 'Introduction to Relational Databases (RDBMS)',
      issuer: 'IBM',
      date: 'Mar 30, 2025',
      description: 'Designing and managing robust, secure, scalable, highly available, and dynamic solutions on Google Cloud.',
      color: '#4285F4',
      pdf: '/certifications/Coursera GTI257GWDNQW.pdf',
    },
    {
      id: 5,
      title: 'Meta Front-End Developer',
      issuer: 'Meta',
      date: '2024',
      description: 'Advanced React, UI/UX principles, and modern frontend development practices.',
      color: '#0668E1',
      pdf: '/certifications/Coursera K7GK9VIFFB3C.pdf',
    },
    {
      id: 6,
      title: 'Certified Kubernetes Admin',
      issuer: 'CNCF',
      date: '2023',
      description: 'Installation, configuration, and management of production-grade Kubernetes clusters.',
      color: '#326CE5',
      pdf: '/certifications/Coursera PYNPU1TS6GO2.pdf',
    },
    {
      id: 7,
      title: 'React Native Specialist',
      issuer: 'Udemy',
      date: '2023',
      description: 'Building cross-platform mobile applications using React Native.',
      color: '#61dafb',
      pdf: '/certifications/Coursera UJ1NL3N7V469.pdf',
    },
  ];

  return (
    <section id="certifications" style={{ padding: '100px 0' }}>
      <div className="container">
        <h2 className="section-title">Certifications</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px',
          perspective: '1000px',
        }}>
          {certifications.map((cert) => (
            <div key={cert.id} className="flip-card" style={{
              backgroundColor: 'transparent',
              width: '100%',
              height: '300px',
            }}>
              <div className="flip-card-inner" style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                textAlign: 'center',
                transition: 'transform 0.6s',
                transformStyle: 'preserve-3d',
                cursor: 'pointer',
              }}>
                {/* Front */}
                <div className="flip-card-front" style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  backfaceVisibility: 'hidden',
                  backgroundColor: '#112240',
                  color: 'var(--text-color)',
                  borderRadius: '10px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '10px',
                  boxShadow: '0 10px 30px -15px rgba(2, 12, 27, 0.7)',
                  overflow: 'hidden',
                }}>
                  <div style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    overflow: 'hidden',
                    borderRadius: '8px',
                  }}>
                    <Document
                      file={cert.pdf}
                      loading={<div style={{ color: 'var(--primary-color)' }}>Loading Thumbnail...</div>}
                      error={<div style={{ color: 'red' }}>Failed to load PDF</div>}
                    >
                      <Page
                        pageNumber={1}
                        width={280}
                        renderTextLayer={false}
                        renderAnnotationLayer={false}
                      />
                    </Document>
                  </div>
                </div>

                {/* Back */}
                <div className="flip-card-back" style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  backfaceVisibility: 'hidden',
                  backgroundColor: 'var(--primary-color)',
                  color: '#0a192f',
                  transform: 'rotateY(180deg)',
                  borderRadius: '10px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '20px',
                  boxShadow: '0 10px 30px -15px rgba(2, 12, 27, 0.7)',
                }}>
                  <h3 style={{ marginBottom: '15px', color: '#0a192f' }}>{cert.title}</h3>
                  <p style={{ marginBottom: '20px', fontWeight: '500' }}>{cert.description}</p>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <span style={{
                      padding: '5px 15px',
                      border: '2px solid #0a192f',
                      borderRadius: '20px',
                      fontWeight: 'bold'
                    }}>
                      {cert.date}
                    </span>
                    <a
                      href={cert.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        padding: '7px 15px',
                        backgroundColor: '#0a192f',
                        color: 'var(--primary-color)',
                        borderRadius: '20px',
                        fontWeight: 'bold',
                        fontSize: '14px',
                        textDecoration: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px'
                      }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      📄 View PDF
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
};

export default Certifications;
