import React from 'react'
import HomeHeader from '../components/Home/HomeHeader'
import HomeCardKategoriBimbel from '../components/Home/HomeCardKategoriBimbel'
import HomeCardFeaturedTrainings from '../components/Home/HomeCardFeaturedTrainings'
import HomeCardBukuNakes from '../components/home/HomeCardBukuNakes'
import Testimonial from '../components/home/Testimonial'
import Footer from '../components/footer'

export default function Home(){
    return (
        <>
        <HomeHeader/>
        <HomeCardKategoriBimbel/>
        <HomeCardFeaturedTrainings/>

        {/* ===== JOIN NOW SECTION ===== */}
        <section
            className="d-flex align-items-center text-white"
            style={{
                minHeight: "50vh",
                background: "linear-gradient(90deg, #0a2e57 0%, #06608a 50%, #0e93bb 100%)",
                position: "relative",
                overflow: "visible",      // <-- penting agar gambar boleh keluar
                padding: "80px 0 40px 0", // ruang atas biar image naik
            }}
        >
            <div className="container">
                <div className="row align-items-center">
                    
                    {/* TEXT */}
                    <div className="col-lg-6 col-md-7">
                        <h1 className="fw-bold" style={{ fontSize: "2.8rem", lineHeight: "1.3" }}>
                            Join Now & Unlock your<br/>Learning Potential
                        </h1>

                        <button
                            className="btn fw-semibold mt-4 px-4 py-2"
                            style={{
                                backgroundColor: "#EB5E53",
                                color: "white",
                                borderRadius: "30px",
                            }}
                        >
                            Get Started →
                        </button>
                    </div>
                </div>
            </div>
        </section>
        {/* ===== END JOIN SECTION ===== */}

        <HomeCardBukuNakes/>
        <Testimonial/>
        <Footer/>
        </>
    )
}
