import React from 'react';
import DashboardLayout from '../../../layouts/DashboardLayout';
import HeaderDashboard from '../../../components/Dashboard/HeaderDashboard';
import StatisticsCard from '../../../components/Dashboard/StatisticsCard';
import ChartComponent from '../../../components/Dashboard/ChartComponent';
import RecentActivity from '../../../components/Dashboard/RecentActivity';
import 'bootstrap/dist/css/bootstrap.min.css';

const MainDashboard = () => {
  return (
    <DashboardLayout>
      <div className="container-fluid p-4">
        <HeaderDashboard />
        
        <div className="row g-4 mb-4">
          <div className="col-md-6 col-lg-3">
            <StatisticsCard 
              title="Total Users" 
              value="1,234" 
              icon="👥" 
              trend="+12%" 
              trendColor="success"
            />
          </div>
          <div className="col-md-6 col-lg-3">
            <StatisticsCard 
              title="Revenue" 
              value="$45,678" 
              icon="💰" 
              trend="+8%" 
              trendColor="success"
            />
          </div>
          <div className="col-md-6 col-lg-3">
            <StatisticsCard 
              title="Orders" 
              value="567" 
              icon="🛒" 
              trend="+15%" 
              trendColor="success"
            />
          </div>
          <div className="col-md-6 col-lg-3">
            <StatisticsCard 
              title="Active Sessions" 
              value="234" 
              icon="⚡" 
              trend="+5%" 
              trendColor="success"
            />
          </div>
        </div>

        <div className="row g-4 mb-4">
          <div className="col-lg-6">
            <ChartComponent type="line" title="Sales Overview" />
          </div>
          <div className="col-lg-6">
            <ChartComponent type="bar" title="User Growth" />
          </div>
        </div>

        <div className="row g-4">
          <div className="col-12">
            <RecentActivity />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default MainDashboard;