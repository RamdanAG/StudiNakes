import React from "react";
import NavbarBanner from "../../../components/Dashboard/UserDashboard/NavbarBanner"
import StatsCards from "../../../components/Dashboard/UserDashboard/StatsCards"
import EnrolledTrainings from "../../../components/Dashboard/UserDashboard/EnrolledTrainings"
import SidebarRight from "../../../components/Dashboard/UserDashboard/SidebarRight"
import Navbar from "../../../components/Navbar"
import Footer from "../../../components/footer";

const Dashboard = () => {
  return (
    <>
      <Navbar/>
      <div className="container py-4">
      <NavbarBanner />
      <div className="row">
        <div className="col-lg-8">
          <StatsCards />
          <EnrolledTrainings />
        </div>
        <div className="col-lg-4">
          <SidebarRight />
        </div>
      </div>
    </div>
    <Footer/>
    </>

  );
};

export default Dashboard;
