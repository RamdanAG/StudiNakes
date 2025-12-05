import React from 'react';

const kategori = [
  { id: 1, title: 'Keperawatan', img: '/images/Trainings/keperawatan.jpg' },
  { id: 2, title: 'Kebidanan', img: '/images/Trainings/kebidanan.jpg' },
  { id: 3, title: 'Farmasi', img: '/images/Trainings/farmasi.jpg' },
  { id: 4, title: 'Kesehatan Gigi', img: '/images/Trainings/kesehatan-gigi.jpg' },
  { id: 5, title: 'Kedokteran', img: '/images/Trainings/kedokteran.jpg' },
];

export default function HomeCardKategoriBimbel() {
  return (
    <section className="py-5" style={{ backgroundColor: '#f9fafb' }}>
      <div className="container">
        {/* Header */}
        <div className="d-flex justify-content-between align-items-start mb-5">
          <div>
            <h2 className="fw-bold mb-2">Kategori Bimbel</h2>
            <p className="text-muted">
              Let's join our famous categories, the knowledge provided will definitely be useful for you.
            </p>
          </div>
          <a href="#" className="text-decoration-none fw-semibold" style={{ color: '#269ece' }}>
            View All Categories <i className="bi bi-arrow-right ms-2"></i>
          </a>
        </div>

        {/* Category Cards - One Row */}
        <div className="row g-3">
          {kategori.map((item) => (
            <div key={item.id} className="col-12 col-sm-6 col-md-4 col-lg-2-4" style={{ flex: '0 0 calc(20% - 12px)' }}>
              <div 
                className="card border-0 overflow-hidden position-relative"
                style={{
                  height: '180px',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                {/* Background Image */}
                <img 
                  src={item.img} 
                  className="card-img h-100 w-100" 
                  alt={item.title}
                  style={{ objectFit: 'cover' }}
                />

                {/* Overlay Gradient */}
                <div 
                  className="position-absolute top-0 start-0 w-100 h-100"
                  style={{
                    background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 100%)'
                  }}
                ></div>

                {/* Title */}
                <div className="position-absolute bottom-0 start-0 end-0 p-3">
                  <h6 className="text-white fw-bold mb-0">{item.title}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1200px) {
          .col-lg-2-4 {
            flex: 0 0 calc(25% - 12px) !important;
          }
        }
        @media (max-width: 992px) {
          .col-lg-2-4 {
            flex: 0 0 calc(33.333% - 12px) !important;
          }
        }
        @media (max-width: 768px) {
          .col-lg-2-4 {
            flex: 0 0 calc(50% - 12px) !important;
          }
        }
      `}</style>
    </section>
  );
}