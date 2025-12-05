import React, { useRef, useState, useEffect } from 'react';

const bukuList = [
  {
    id: 1,
    title: 'Buku Keperawatan Dasar',
    author: 'Dr. Asep Priyadi',
    originalPrice: '150,000',
    discountPrice: '120,000',
    discount: '20%',
    sales: 45,
    rating: 4.9,
    imgUrl: '/images/Books/keperawatan.jpg',
  },
  {
    id: 2,
    title: 'Panduan Kebidanan',
    author: 'Dr. Jane Cooper',
    originalPrice: '140,000',
    discountPrice: '112,000',
    discount: '20%',
    sales: 38,
    rating: 4.8,
    imgUrl: '/images/Books/kebidanan.jpg',
  },
  {
    id: 3,
    title: 'Farmasi Klinis',
    author: 'Prof. Sarah Johnson',
    originalPrice: '160,000',
    discountPrice: '128,000',
    discount: '20%',
    sales: 52,
    rating: 5.0,
    imgUrl: '/images/Books/farmasi.jpg',
  },
  {
    id: 4,
    title: 'Kesehatan Gigi',
    author: 'Dr. Michael Brown',
    originalPrice: '135,000',
    discountPrice: '108,000',
    discount: '20%',
    sales: 28,
    rating: 4.7,
    imgUrl: '/images/Books/gigi.jpg',
  },
];

export default function HomeCardBukuNakes() {
  const scrollRef = useRef(null);
  const [pageIndex, setPageIndex] = useState(0);
  const cardsPerView = 3;
  const cardWidth = 280;

  const totalPages = Math.ceil(bukuList.length / cardsPerView);

  const scrollToPage = (index) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollTo({ left: index * cardWidth * cardsPerView + 20, behavior: 'smooth' });
    setPageIndex(index);
  };

  return (
    <section className="py-5" style={{ backgroundColor: '#f9fafb' }}>
      <div className="container">
        {/* Header */}
        <div className="d-flex justify-content-between align-items-start mb-5">
          <div>
            <h2 className="fw-bold mb-2">Buku <span style={{ color: '#269ece' }}>Nakes</span></h2>
            <p className="text-muted">
              Koleksi buku pembelajaran terlengkap untuk menunjang perjalanan belajarmu.
            </p>
          </div>
          <a href="#" className="text-decoration-none fw-semibold" style={{ color: '#269ece' }}>
            View All Books <i className="bi bi-arrow-right ms-2"></i>
          </a>
        </div>

        {/* Books Carousel */}
        <div className="position-relative">
          <div
            ref={scrollRef}
            className="d-flex overflow-auto pb-3"
            style={{ gap: '20px', scrollbarWidth: 'none' }}
          >
            <style>{`.d-flex::-webkit-scrollbar { display: none; }`}</style>

            {bukuList.map((item) => (
              <div
                key={item.id}
                className="card border-0 shadow-sm"
                style={{
                  minWidth: `${cardWidth}px`,
                  borderRadius: '12px',
                  overflow: 'hidden'
                }}
              >
                {/* Image */}
                <div className="position-relative">
                  <img
                    src={item.imgUrl}
                    className="card-img-top"
                    alt={item.title}
                    style={{ height: '220px', objectFit: 'cover' }}
                  />
                  <span className="position-absolute top-0 end-0 m-2 badge bg-white text-primary fw-bold">
                    {item.discount}
                  </span>
                </div>

                {/* Content */}
                <div className="card-body p-3">
                  <h6 className="card-title fw-bold mb-2" style={{ fontSize: '0.95rem' }}>
                    {item.title}
                  </h6>
                  <p className="text-muted mb-2" style={{ fontSize: '0.85rem' }}>
                    {item.author}
                  </p>

                  <div className="d-flex gap-2 align-items-center mb-2">
                    <span className="fw-bold text-primary">Rp{item.discountPrice}</span>
                    <span className="text-decoration-line-through text-muted" style={{ fontSize: '0.85rem' }}>
                      Rp{item.originalPrice}
                    </span>
                  </div>

                  <div className="d-flex justify-content-between align-items-center">
                    <small className="text-muted">{item.sales} sales</small>
                    <small className="text-warning fw-bold">★ {item.rating}</small>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <button
            onClick={() => scrollToPage(pageIndex - 1)}
            disabled={pageIndex === 0}
            className="btn btn-light rounded-circle shadow-sm position-absolute top-50 start-0 translate-middle-y"
            style={{ zIndex: 10, marginLeft: '-60px', opacity: pageIndex === 0 ? 0.5 : 1 }}
          >
            <i className="bi bi-chevron-left"></i>
          </button>
          <button
            onClick={() => scrollToPage(pageIndex + 1)}
            disabled={pageIndex >= totalPages - 1}
            className="btn btn-light rounded-circle shadow-sm position-absolute top-50 end-0 translate-middle-y"
            style={{ zIndex: 10, marginRight: '-60px', opacity: pageIndex >= totalPages - 1 ? 0.5 : 1 }}
          >
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>

        {/* Pagination */}
        <div className="d-flex justify-content-center mt-4 gap-2">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToPage(i)}
              className="rounded-circle border-0"
              style={{
                width: '8px',
                height: '8px',
                backgroundColor: i === pageIndex ? '#269ece' : '#e0e0e0',
                cursor: 'pointer'
              }}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}