import React, { useState, useRef, useEffect } from "react";

const featuredTrainings = [
  {
    id: 1,
    title: "Kedokteran Umum",
    instructor: "Asep Priyadi",
    originalPrice: "2,000.00",
    discountPrice: "1,600.00",
    discount: "20%",
    sales: 15,
    rating: 5.0,
    imgUrl: "/images/Trainings/kedokteran.jpg",
    avatarUrl: "/images/avatars/asep.jpg",
  },
  {
    id: 2,
    title: "Keperawatan",
    instructor: "Jane Cooper",
    originalPrice: "2,000.00",
    discountPrice: "1,600.00",
    discount: "20%",
    sales: 18,
    rating: 5.0,
    imgUrl: "/images/Trainings/keperawatan.jpg",
    avatarUrl: "/images/avatars/jane.jpg",
  },
  {
    id: 3,
    title: "Kebidanan",
    instructor: "Sarah Johnson",
    originalPrice: "2,000.00",
    discountPrice: "1,600.00",
    discount: "20%",
    sales: 22,
    rating: 4.9,
    imgUrl: "/images/Trainings/kebidanan.jpg",
    avatarUrl: "/images/avatars/sarah.jpg",
  },
  {
    id: 4,
    title: "Farmasi",
    instructor: "Michael Brown",
    originalPrice: "2,000.00",
    discountPrice: "1,600.00",
    discount: "15%",
    sales: 12,
    rating: 4.8,
    imgUrl: "/images/Trainings/farmasi.jpg",
    avatarUrl: "/images/avatars/michael.jpg",
  },
    {
    id: 5,
    title: "Farmasi",
    instructor: "Michael Brown",
    originalPrice: "2,000.00",
    discountPrice: "1,600.00",
    discount: "15%",
    sales: 12,
    rating: 4.8,
    imgUrl: "/images/Trainings/farmasi.jpg",
    avatarUrl: "/images/avatars/michael.jpg",
  },
    {
    id: 6,
    title: "Farmasi",
    instructor: "Michael Brown",
    originalPrice: "2,000.00",
    discountPrice: "1,600.00",
    discount: "15%",
    sales: 12,
    rating: 4.8,
    imgUrl: "/images/Trainings/farmasi.jpg",
    avatarUrl: "/images/avatars/michael.jpg",
  },
];

const StarRating = ({ rating, sales }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="d-flex align-items-center gap-2">
      <div className="d-flex gap-1">
        {[...Array(fullStars)].map((_, i) => (
          <i key={`full-${i}`} className="bi bi-star-fill text-warning"></i>
        ))}
        {hasHalfStar && <i className="bi bi-star-half text-warning"></i>}
        {[...Array(emptyStars)].map((_, i) => (
          <i key={`empty-${i}`} className="bi bi-star text-warning"></i>
        ))}
      </div>
      <small className="text-muted">({Math.round(rating)})</small>
    </div>
  );
};

export default function HomeCardFeaturedTrainings() {
  const scrollRef = useRef(null);
  const [pageIndex, setPageIndex] = useState(0);
  const cardsPerView = 4;
  const cardWidth = 280;
  const cardGap = 20;

  const totalPages = Math.ceil(featuredTrainings.length / cardsPerView);

  const scrollToPage = (index) => {
    if (!scrollRef.current) return;
    const scrollPos = index * (cardWidth + cardGap) * cardsPerView;
    scrollRef.current.scrollTo({ left: scrollPos, behavior: "smooth" });
    setPageIndex(index);
  };

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const newPage = Math.round(scrollRef.current.scrollLeft / ((cardWidth + cardGap) * cardsPerView));
    setPageIndex(newPage);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el?.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="py-5">
      <div className="container">
        {/* Header */}
        <div className="d-flex justify-content-between align-items-start mb-5">
          <div>
            <h2 className="fw-bold mb-2">
              Featured <span style={{ color: '#269ece' }}>Trainings</span>
            </h2>
            <p className="text-muted">
              Gabung di kategori unggulan, dapatkan pengetahuan yang akan membantu perjalanan belajarmu.
            </p>
          </div>
          <a href="#" className="text-decoration-none fw-semibold" style={{ color: '#269ece' }}>
            View All Trainings <i className="bi bi-arrow-right ms-2"></i>
          </a>
        </div>

        {/* Carousel */}
        <div className="position-relative">
          <div
            ref={scrollRef}
            className="d-flex overflow-auto pb-3"
            style={{
              gap: `${cardGap}px`,
              scrollSnapType: "x mandatory",
              scrollbarWidth: "none",
              WebkitOverflowScrolling: "touch",
            }}
          >
            <style>{`.d-flex::-webkit-scrollbar { display: none; }`}</style>

            {featuredTrainings.map((item) => (
              <div
                key={item.id}
                className="card border-0 shadow-sm"
                style={{
                  minWidth: `${cardWidth}px`,
                  borderRadius: '12px',
                  overflow: 'hidden',
                  scrollSnapAlign: 'start',
                  transition: 'box-shadow 0.3s ease'
                }}
              >
                {/* Image Section */}
                <div className="position-relative">
                  <img
                    src={item.imgUrl}
                    className="card-img-top"
                    alt={item.title}
                    style={{ height: '160px', objectFit: 'cover' }}
                  />
                  <span
                    className="position-absolute top-0 end-0 m-2 badge fw-bold"
                    style={{
                      backgroundColor: 'white',
                      color: '#269ece',
                      borderRadius: '4px',
                      padding: '0.4rem 0.8rem'
                    }}
                  >
                    {item.discount} OFF
                  </span>
                  <div
                    className="position-absolute bottom-0 w-100 p-3"
                    style={{
                      background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 100%)'
                    }}
                  >
                    <h6 className="text-white fw-bold mb-0">{item.title}</h6>
                  </div>
                </div>

                {/* Body Section */}
                <div className="card-body p-3">
                  {/* Instructor */}
                  <div className="d-flex align-items-center mb-3">
                    <img
                      src={item.avatarUrl}
                      alt={item.instructor}
                      className="rounded-circle me-2"
                      style={{ width: '28px', height: '28px', objectFit: 'cover' }}
                    />
                    <small className="text-muted fw-semibold">{item.instructor}</small>
                  </div>

                  {/* Price & Rating */}
                  <div className="d-flex justify-content-between align-items-start gap-2">
                    <div className="flex-grow-1">
                      <div className="d-flex gap-2 align-items-center mb-2">
                        <span className="fw-bold text-primary" style={{ fontSize: '1.1rem' }}>
                          Rp{item.discountPrice}
                        </span>
                        <span className="text-decoration-line-through text-muted" style={{ fontSize: '0.85rem' }}>
                          Rp{item.originalPrice}
                        </span>
                      </div>
                      <div className="d-flex gap-2 align-items-center">
                        <small className="text-muted">{item.sales} sales</small>
                        <StarRating rating={item.rating} sales={item.sales} />
                      </div>
                    </div>
                    <button className="btn btn-sm btn-light border rounded-circle p-2">
                      <i className="bi bi-heart text-danger"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={() => scrollToPage(pageIndex - 1)}
            disabled={pageIndex === 0}
            className="btn btn-light rounded-circle shadow-sm position-absolute top-50 start-0 translate-middle-y"
            style={{
              width: '40px',
              height: '40px',
              zIndex: 10,
              marginLeft: '-60px',
              opacity: pageIndex === 0 ? 0.5 : 1
            }}
          >
            <i className="bi bi-chevron-left"></i>
          </button>
          <button
            onClick={() => scrollToPage(pageIndex + 1)}
            disabled={pageIndex >= totalPages - 1}
            className="btn btn-light rounded-circle shadow-sm position-absolute top-50 end-0 translate-middle-y"
            style={{
              width: '40px',
              height: '40px',
              zIndex: 10,
              marginRight: '-60px',
              opacity: pageIndex >= totalPages - 1 ? 0.5 : 1
            }}
          >
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>

        {/* Pagination Dots */}
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
                cursor: 'pointer',
                transition: 'background-color 0.3s'
              }}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}