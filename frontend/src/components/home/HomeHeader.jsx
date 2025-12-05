import React from "react";

const HomeHeader = () => {
  return (
    <>
      {/* NAVBAR */}
      <nav
        className="navbar navbar-expand-lg navbar-dark py-3 px-4 px-md-5"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 10,
          background: "transparent",
        }}
      >
        <div className="container-fluid">
          <a className="navbar-brand fw-bold fs-4" href="#">
            <img src="/images/Logo.png" alt="StudiNakes Logo" height="50" />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Live Course
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Bimbel
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  TryOut
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Buku
                </a>
              </li>
            </ul>
          </div>

          <div className="d-none d-lg-block">
            <button className="btn btn-danger fw-semibold rounded-pill px-4 py-2">
              Join Now
            </button>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section
        className="hero-section text-white"
        style={{
          background: "linear-gradient(90deg, #0a2e57 0%, #06608a 50%, #0e93bb 100%)",
          minHeight: "85vh",
          paddingTop: "120px",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            {/* TEXT */}
            <div className="col-lg-6 col-md-12">
              <h1 className="display-4 fw-bold mb-3">
                Belajar Lebih Mudah,
                <br />
                Raih Prestasi Lebih
                <br />
                Tinggi
              </h1>
              <p className="lead mb-4">
                Join Us For Expert-Guided Trainings That Elevate Your Skill
                <br />
                And Transform Your Career.
              </p>
              <div
                className="input-group rounded-pill shadow-lg"
                style={{ maxWidth: "400px", backgroundColor: "white" }}
              >
                <input
                  type="text"
                  className="form-control border-0 py-3 ps-4"
                  placeholder="Search Trainings"
                  style={{ fontSize: "0.95rem" }}
                />
                <button className="btn btn-link text-muted pe-4" type="button">
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* IMAGE */}
        <img
          src="/images/Home/front-view-young-beautiful-lady-white-t-shirt-black-jeans-coat-holding-green-book-white-1.png"
          alt="Doctor"
          className="img-fluid d-none d-lg-block"
          style={{
            height: "85vh",
            objectFit: "contain",
            position: "absolute",
            bottom: "0",
            right: "18%",
            transform: "translateX(15%)",
            filter: "drop-shadow(-20px 0px 40px rgba(0,0,0,0.25))",
          }}
        />
      </section>

      {/* PARTNERS SECTION */}
      <section className="py-4" style={{ backgroundColor: "#1f2937" }}>
        <div className="container">
          <div className="d-flex justify-content-center flex-wrap gap-5">
            <img src="/images/partners/smartfinder.png" alt="SmartFinder" style={{ height: "40px", opacity: 0.8 }} />
            <img src="/images/partners/zoomer.png" alt="Zoomer" style={{ height: "40px", opacity: 0.8 }} />
            <img src="/images/partners/shells.png" alt="Shells" style={{ height: "40px", opacity: 0.8 }} />
            <img src="/images/partners/waves.png" alt="Waves" style={{ height: "40px", opacity: 0.8 }} />
            <img src="/images/partners/artvenue.png" alt="ArtVenue" style={{ height: "40px", opacity: 0.8 }} />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeHeader;
