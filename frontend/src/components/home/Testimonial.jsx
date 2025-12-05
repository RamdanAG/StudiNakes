import React from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Rinto Nurdin',
    role: 'Student',
    message: 'Sangat bagus dan recommended untuk siapa saja yang ingin belajar bidang kesehatan. Trainer nya sangat profesional dan ramah.',
    rating: 5,
    avatarUrl: '/images/avatars/rinto.jpg'
  },
  {
    id: 2,
    name: 'Dewi Maylita',
    role: 'Student',
    message: 'Kursus ini sangat membantu saya dalam memahami materi dengan lebih mudah. Instruktur yang berpengalaman membuat pembelajaran lebih efektif.',
    rating: 5,
    avatarUrl: '/images/avatars/dewi.jpg'
  }
];

export default function Testimonial() {
  return (
    <section className="py-5">
      <div className="container">
        <h2 className="text-center fw-bold mb-5">Our Students Say!</h2>
        
        <div className="row g-4">
          {testimonials.map((item) => (
            <div key={item.id} className="col-md-6">
              <div className="card border-0 shadow-sm p-4" style={{ borderRadius: '12px' }}>
                {/* Rating Stars */}
                <div className="mb-3">
                  {[...Array(item.rating)].map((_, i) => (
                    <i key={i} className="bi bi-star-fill text-warning"></i>
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="mb-4 text-muted">{item.message}</p>

                {/* User Info */}
                <div className="d-flex align-items-center">
                  <img
                    src={item.avatarUrl}
                    alt={item.name}
                    className="rounded-circle me-3"
                    style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                  />
                  <div>
                    <h6 className="mb-0 fw-bold">{item.name}</h6>
                    <small className="text-muted">{item.role}</small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}